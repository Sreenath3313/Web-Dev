import { Link } from 'react-router-dom';

export default function Nav() { 
    return (
        <nav>
            <Link to="/" style={{ color: "#FF5722", textDecoration: "none" }}>Home</Link> |{" "}
            <Link to="/about" style={{ color: "#FF5722", textDecoration: "none" }}>About</Link> |{" "}
            <Link to="/contact" style={{ color: "#FF5722", textDecoration: "none" }}>Contact</Link> |{" "}
            <Link to="/student" style={{ color: "#FF5722", textDecoration: "none" }}>Student Registration</Link>
        </nav>
    )
}