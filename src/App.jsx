import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RickAndMortyLoader from "./Loaders/RickAndMortyLoader.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ThemeContextProvider from "./contexts/ThemeContextProvider.jsx";
import UserContextProvider from "./contexts/UserContextProvider.jsx";
import { SnackbarProvider } from "notistack";
//Pages
import HomeLayout from "./layouts/HomeLayout.jsx";
import { Admin, Profile, Home, ContactPage, EventsPage, NewsPage, RickAndMortyPage, LogInPage, RegisterPage } from "./pages";
//Components
import FetchError from "./components/Errors/FetchError.jsx";
import NotFund from "./components/Errors/NotFund.jsx";

import ProtectedRoute from "./utils/ProtectedRoute.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<FetchError />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="events" element={<EventsPage />} />
      <Route path="news" element={<NewsPage />} />
      <Route path="rickandmorty">
        <Route index element={<RickAndMortyPage />} loader={RickAndMortyLoader} />
        <Route path=":page" element={<RickAndMortyPage />} loader={RickAndMortyLoader} errorElement={<FetchError />} />
      </Route>
      <Route path="login" element={<LogInPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
        <Route path="admin" element={<Admin />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["Admin", "User"]} />}>
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<NotFund />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <ThemeContextProvider>
            <SnackbarProvider autoHideDuration={3000} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
              <RouterProvider router={router} />
            </SnackbarProvider>
          </ThemeContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
