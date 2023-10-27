import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./blocks/Layout";
import Home from "./blocks/Home";
import News from "./blocks/News";
import Events from "./blocks/Events";
import ContactBlock from "./blocks/ContactBlock";
import NotFound from "./sections/NotFound";
import RickAndMorty from "./sections/RickAndMorty";

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
              <ContactBlock />
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
        <Route
          path="/rickandmorty/:page"
          element={
            <Layout>
              <RickAndMorty />
            </Layout>
          }
        />
        <Route
          path="/rickandmorty"
          element={
            <Layout>
              <RickAndMorty />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp;
