import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './layout/Home'
import News from './layout/News'
import Events from './layout/Events'
import ContactSection from './layout/ContactSection'

function RouterApp() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home/></Layout>} />
          <Route path="/home" element={<Layout><Home/></Layout>} />
          <Route path="/news" element={<Layout><News/></Layout>} />
          <Route path="/events" element={<Layout><Events/></Layout>} />
          <Route path="/contact" element={<Layout><ContactSection/></Layout>} />
        </Routes>
      </BrowserRouter>
  );
}
export default RouterApp;