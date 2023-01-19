import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header, Footer, GoToTop } from "./components";
import {
  Homepage,
  Aboutpage,
  Contactpage,
  Projectpage,
  Blogpage,
  Servicepage,
} from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/masterwavetech" element={<Homepage />} />
        <Route path="/masterwavetech/about" element={<Aboutpage />} />
        <Route path="/masterwavetech/contact" element={<Contactpage />} />
        <Route path="/masterwavetech/project" element={<Projectpage />} />
        <Route path="/masterwavetech/blog" element={<Blogpage />} />
        <Route path="/masterwavetech/services" element={<Servicepage />} />
      </Routes>
      <Footer />
      <GoToTop />
    </>
  );
}

export default App;
