import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import LandingPage from './page/LandingPage'
import About from "./page/About";
import Blog from "./page/Blog";
import BlogDetail from "./page/BlogDetail";
import Portofolio from "./page/Portofolio";
import Contact from "./page/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/portfolio" element={<Portofolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
