import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./blocks/Layout";
import Home from "./blocks/Home";
import News from "./blocks/News";
import Events from "./blocks/Events";
import ContactBlock from "./blocks/ContactBlock";
import RickAndMorty from "./sections/RickAndMorty";
import Register from "./sections/Register";
import LogIn from "./sections/LogIn";
import Profile from "./sections/Profile";
import NotFound from "./sections/NotFound";

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
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LogIn />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp;
