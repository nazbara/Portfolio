import { useParams } from 'react-router-dom'

export default function WorkDetail() {
  const { slug } = useParams()

  return (
    <section data-theme="light" className="section-y">
      <div className="site-container">
        <h1>Work: {slug}</h1>
      </div>
    </section>
  )
}
