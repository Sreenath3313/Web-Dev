import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import StudentForm from "./Pages/StudentForm.jsx";
import Nav from './components/Nav.jsx';
import Head, { Footer } from './components/Base.jsx';

export default function Blog() {
  const [message, setMessage] = useState("");
  const [greet, setGreet] = useState("");

  // Call /hello endpoint when component loads
  useEffect(() => {
    fetch("http://localhost:8080/hello")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  // Call /greet endpoint when button is clicked
  const handleGreet = async () => {
    const response = await fetch("http://localhost:8080/greet?name=Sreenath");
    const data = await response.text();
    setGreet(data);
  };

  return (
    <Router>
      <Head />

      {/* If you have a Nav component, you can use <Nav /> here instead of this inline nav */}
      <nav>
        <Link to="/" style={{ color: "#FF5722", textDecoration: "none" }}>Home</Link> |{" "}
        <Link to="/about" style={{ color: "#FF5722", textDecoration: "none" }}>About</Link> |{" "}
        <Link to="/contact" style={{ color: "#FF5722", textDecoration: "none" }}>Contact</Link> |{" "}
        <Link to="/student" style={{ color: "#FF5722", textDecoration: "none" }}>Student Registration</Link>
      </nav>

      <div style={{ margin: '20px 0' }}>
        <p><strong>Message from server:</strong> {message}</p>
        <button onClick={handleGreet}>Get Greeting</button>
        <p><strong>Greeting:</strong> {greet}</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student" element={<StudentForm />} />
      </Routes>

      <Footer />
    </Router>
  );
}
