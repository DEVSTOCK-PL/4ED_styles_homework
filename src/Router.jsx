import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Home, News, Events, Contact, NotFound } from './separated'

function RouterApp () {
    return (
        <BrowserRouter>
            <Routes>
              <Route path='/' />
              <Route path='/home' element={<Layout><Home /></Layout>} />
              <Route path='/news' element={<Layout><News /></Layout>} />
              <Route path='/events' element={<Layout><Events /></Layout>} />
              <Route path='/contact' element={<Layout><Contact /></Layout>} />
              <Route path='*' element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp