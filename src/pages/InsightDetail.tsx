import { useParams } from 'react-router-dom'

export default function InsightDetail() {
  const { slug } = useParams()

  return (
    <section data-theme="light" className="section-y">
      <div className="site-container">
        <h1>Insight: {slug}</h1>
      </div>
    </section>
  )
}
