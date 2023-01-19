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
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/services" element={<Servicepage />} />
      </Routes>
      <Footer />
      <GoToTop />
    </>
  );
}

export default App;
