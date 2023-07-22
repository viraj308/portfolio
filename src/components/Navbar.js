import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          VIRU
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <MdCancel className="icon" size={30} />
          ) : (
            <FaBars size={30} className="icon" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/" className="nav-links">
              HOME
            </Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link
              to="/projects"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}