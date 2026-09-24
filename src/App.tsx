import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import InsightDetail from '@/pages/InsightDetail'
import Insights from '@/pages/Insights'
import NotFound from '@/pages/NotFound'
import Privacy from '@/pages/Privacy'
import ServiceDetail from '@/pages/ServiceDetail'
import Work from '@/pages/Work'
import WorkDetail from '@/pages/WorkDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<WorkDetail />} />
          <Route path="about" element={<About />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<InsightDetail />} />
          {/* Resources: route hidden until launch-ready — Resources.tsx and data/resources.ts stay in place. */}
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
