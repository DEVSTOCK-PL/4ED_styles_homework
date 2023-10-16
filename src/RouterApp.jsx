import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./blocks/Layout";
import Home from "./blocks/Home";
import News from "./blocks/News";
import Events from "./blocks/Events";
import ContactSection from "./blocks/ContactBlock";
import NotFound from "./blocks/NotFound";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/news"
          element={
            <Layout>
              <News />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactSection />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp;
