import React from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/Errorpage/Errorpage";
import { Header, Footer, GoToTop } from "./components";
import {
  Homepage,
  Aboutpage,
  Contactpage,
  Projectpage,
  Blogpage,
  Servicepage,
} from "./pages";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <GoToTop />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },
      {
        path: "/blog",
        element: <Blogpage />,
      },
      {
        path: "/contact",
        element: <Contactpage />,
      },
      {
        path: "/project",
        element: <Projectpage />,
      },
      {
        path: "/services",
        element: <Servicepage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
