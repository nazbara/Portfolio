import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { logoMark, mascotBase, mascotEyeClosed, mascotEyeMask, mascotWindMap } from '@/lib/assets'

/**
 * The capybara from capybara-wind.html: one WebGL fragment shader that bends the mane in a 5-second
 * gust loop (a wind map says how free each hair is; the face is pinned) and blinks — a blink, then a
 * quick double. Four textures: the artwork, the wind map, and a closed-eye patch + its lid mask.
 *
 * Rendered at half the original 1280px canvas (the shader works in artwork pixels, so the motion is
 * identical) and shown with `mix-blend-mode: lighten`, so the artwork's black backdrop takes on the
 * footer's colour. Animates only while on screen; under prefers-reduced-motion it draws one still
 * frame. If WebGL or a texture is unavailable it falls back to the static logo mark.
 */

const LOOP = 5.0 // seconds; every motion repeats exactly in this time
const SIZE = [1286, 1223] // source artwork size (px)
const DESIGN_CANVAS = 1280 // the original canvas
const DRAWN_W = 1100 // artwork drawn this wide (in the original canvas), leaving room for flying hair
const RES = 640 // canvas pixels actually rendered
const K = RES / DESIGN_CANVAS
const SC = (DRAWN_W * K) / SIZE[0]
const RECT = [(RES - DRAWN_W * K) / 2, (RES - SIZE[1] * SC) / 2, SC]
const EYE_CROP = [490, 200, 200, 130] // x, y, w, h of the closed-eye patch in the artwork

const VS = `attribute vec2 p; varying vec2 vPix; uniform float uC;
void main(){ vPix = (p*0.5+0.5)*vec2(uC, uC); vPix.y = uC - vPix.y; gl_Position = vec4(p,0.,1.); }`

const FS = `precision highp float;
varying vec2 vPix;
uniform sampler2D uBase, uW, uEyeC, uEyeV;
uniform vec2 uSize; uniform vec3 uRect; uniform vec4 uEye;
uniform float uPh, uBlink;
const float TAU = 6.2831853;
void main(){
  vec2 s = (vPix - uRect.xy) / uRect.z;                       // artwork pixels
  float w = texture2D(uW, s / uSize).r;                       // how free the hair is here (0 = pinned face)
  float ph = uPh;

  // gusts: a slow swell, faster puffs, and a sweep travelling across the mane
  float gust = 0.55 + 0.30*sin(TAU*ph) + 0.22*sin(TAU*3.0*ph + 0.9) + 0.10*sin(TAU*7.0*ph + 2.0);
  gust += 0.18*sin(TAU*2.0*ph - s.x*0.004 - s.y*0.002);

  // fan in front of the animal: hair is pushed outward from the head and lifted
  vec2 dir = s - vec2(700., 560.);  dir /= max(length(dir), 1.);
  vec2 d = w * gust * 52. * vec2(dir.x*0.9, -0.55 + dir.y*0.25);

  // smooth, low-frequency sway (whole locks of hair) plus a finer flicker that mostly affects the tips
  float amp = 0.55 + 0.45*gust;
  float tip = w*w;
  float f1 = sin(s.x*0.034 + s.y*0.006 - TAU*4.*ph + w*2.0);
  float f2 = sin(s.x*0.085 - s.y*0.010 + TAU*7.*ph + 1.7);
  float f3 = sin(s.x*0.016 + s.y*0.012 - TAU*2.*ph);
  float f4 = sin(s.y*0.020 + s.x*0.012 + TAU*5.*ph);
  d.x += w * amp * (8.*f1 + 18.*f3) + tip * amp * 5.*f2;
  d.y += w * amp * (5.*f4 - 2.*f1) + tip * amp * 3.*f2;

  vec2 sp = s + d;                                            // where this pixel's colour comes from
  vec2 uv = sp / uSize;
  vec3 col = vec3(0.);
  if (uv.x > 0. && uv.x < 1. && uv.y > 0. && uv.y < 1.) col = texture2D(uBase, uv).rgb;

  // blink: the upper lid slides down over the eye; a dark lash line rides its edge
  vec2 e = (sp - uEye.xy) / uEye.zw;
  if (e.x > 0. && e.x < 1. && e.y > 0. && e.y < 1.) {
    vec2 vt = texture2D(uEyeV, e).rg;
    float v = vt.r*1.6 - 0.3, cov = vt.g;
    float thr = -0.35 + uBlink*1.75;
    float wl = cov * clamp((thr - v)/0.08, 0., 1.);
    col = mix(col, texture2D(uEyeC, e).rgb, wl);
    float line = cov * exp(-pow((v - thr)/0.05, 2.)) * step(0., v) * step(v, 1.05)
               * smoothstep(0.02, 0.12, uBlink) * (1. - smoothstep(0.9, 1.0, uBlink));
    col *= 1. - 0.7*line;
  }
  gl_FragColor = vec4(col, 1.);
}`

const ease = (x: number) => x * x * (3 - 2 * x)

/** Blink amount (0–1) at `t` seconds into the loop: one blink, then a quick double. */
function blinkAt(t: number) {
  let b = 0
  for (const [t0, dur] of [
    [1.25, 0.3],
    [3.55, 0.26],
    [3.95, 0.22],
  ]) {
    const k = (t - t0) / dur
    if (k < 0 || k > 1) continue
    const v = k < 0.4 ? ease(k / 0.4) : k < 0.55 ? 1 : 1 - ease((k - 0.55) / 0.45)
    b = Math.max(b, v)
  }
  return b
}

function supportsWebGL() {
  try {
    return !!document.createElement('canvas').getContext('webgl')
  } catch {
    return false
  }
}

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`could not load ${src}`))
    img.src = src
  })

export default function CapybaraWind({ className = '', label = 'A capybara with fur blowing in the wind, blinking' }: { className?: string; label?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [failed, setFailed] = useState(() => !supportsWebGL())

  useEffect(() => {
    const canvas = ref.current
    if (failed || !canvas) return
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false })
    if (!gl) return

    let cancelled = false
    let raf = 0
    let start: number | undefined
    let io: IntersectionObserver | undefined
    const disposables: (() => void)[] = []
    const fail = () => setFailed(true)

    try {
      const compile = (type: number, src: string) => {
        const shader = gl.createShader(type)!
        gl.shaderSource(shader, src)
        gl.compileShader(shader)
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) ?? 'shader error')
        return shader
      }
      const prog = gl.createProgram()!
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS))
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS))
      gl.linkProgram(prog)
      gl.useProgram(prog)
      disposables.push(() => gl.deleteProgram(prog))

      const buf = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, buf)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
      const loc = gl.getAttribLocation(prog, 'p')
      gl.enableVertexAttribArray(loc)
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
      disposables.push(() => gl.deleteBuffer(buf))

      const U = (name: string) => gl.getUniformLocation(prog, name)
      const tex = (img: HTMLImageElement, unit: number) => {
        const t = gl.createTexture()
        gl.activeTexture(gl.TEXTURE0 + unit)
        gl.bindTexture(gl.TEXTURE_2D, t)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        disposables.push(() => gl.deleteTexture(t))
      }

      const draw = (t: number) => {
        const tt = ((t % LOOP) + LOOP) % LOOP
        gl.viewport(0, 0, RES, RES)
        gl.uniform1f(U('uC'), RES)
        gl.uniform2f(U('uSize'), SIZE[0], SIZE[1])
        gl.uniform3f(U('uRect'), RECT[0], RECT[1], RECT[2])
        gl.uniform4f(U('uEye'), EYE_CROP[0], EYE_CROP[1], EYE_CROP[2], EYE_CROP[3])
        gl.uniform1f(U('uPh'), tt / LOOP)
        gl.uniform1f(U('uBlink'), blinkAt(tt))
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      }

      const loop = (ts: number) => {
        start ??= ts
        draw((ts - start) / 1000)
        raf = requestAnimationFrame(loop)
      }
      const run = () => {
        if (!raf) raf = requestAnimationFrame(loop)
      }
      const stop = () => {
        cancelAnimationFrame(raf)
        raf = 0
        start = undefined
      }

      Promise.all([mascotBase, mascotWindMap, mascotEyeClosed, mascotEyeMask].map(loadImage))
        .then(([base, wmap, eyeC, eyeV]) => {
          if (cancelled) return
          tex(base, 0)
          tex(wmap, 1)
          tex(eyeC, 2)
          tex(eyeV, 3)
          gl.uniform1i(U('uBase'), 0)
          gl.uniform1i(U('uW'), 1)
          gl.uniform1i(U('uEyeC'), 2)
          gl.uniform1i(U('uEyeV'), 3)
          draw(0)
          if (reduced) return // one still frame
          io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? run() : stop()))
          io.observe(canvas)
          disposables.push(stop)
        })
        .catch(fail)
    } catch {
      fail()
    }

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      io?.disconnect()
      disposables.forEach((d) => d())
    }
  }, [failed, reduced])

  if (failed) {
    return <img src={logoMark} alt="" width={1286} height={1223} className={className} />
  }

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label={label}
      width={RES}
      height={RES}
      className={`mix-blend-lighten ${className}`}
      style={{ aspectRatio: '1' }}
    />
  )
}
