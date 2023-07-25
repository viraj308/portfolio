import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-flex">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            VIRU
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <RxCross1 className="icon" size={25} />
            ) : (
              <FaBars size={25} className="icon" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={closeMobileMenu}>
              <NavLink to="/" className="nav-links">
                Home
              </NavLink>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <NavLink to="/about" className="nav-links">
                About Me
              </NavLink>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <NavLink
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
