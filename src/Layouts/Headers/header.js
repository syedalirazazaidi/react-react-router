import React, { useRef, useState } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const boxRef = useRef();
  React.useEffect(() => {
    gsap.to(boxRef.current, { rotation: "360" });
  });
  let activeStyle = {
    fontWeight: "bold",
    color: "grey",
  };
  return (
    <nav className="navbar">
      <h3 className="logo" ref={boxRef}>
        Logo
      </h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <NavLink
          className="home"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className="about"
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          className="project"
          to="/projects"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Projects</li>
        </NavLink>
        <NavLink
          className="contact"
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li> Contact</li>
        </NavLink>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Header;
