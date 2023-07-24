import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";

import "./app.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
