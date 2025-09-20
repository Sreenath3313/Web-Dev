import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import StudentForm from "./Pages/StudentForm.jsx";
import Nav from './components/Nav.jsx';
import Head, { Footer } from './components/Base.jsx';

function Blog() {
  return (
    <Router>
   <nav>
  <Link to="/" style={{ color: "#FF5722", textDecoration: "none" }}>Home</Link> |{" "}
  <Link to="/about" style={{ color: "#FF5722", textDecoration: "none" }}>About</Link> |{" "}
  <Link to="/contact" style={{ color: "#FF5722", textDecoration: "none" }}>Contact</Link> |{" "}
  <Link to="/student" style={{ color: "#FF5722", textDecoration: "none" }}>Student Registration</Link>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default Blog;
