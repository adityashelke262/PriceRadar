import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import logo from "../../assets/a.png";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
   <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

  <div className="navbar-container">

    {/* LEFT */}

    <Link to="/" className="navbar-logo">
      <img src={logo} alt="SmartScout" />

      <div>
        <h2>SmartScout</h2>
        <p>Compare • Save • Buy</p>
      </div>
    </Link>

    {/* Desktop Links */}

    <div className="navbar-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/compare">Compare</NavLink>
    </div>

    {/* Desktop Right */}

    <div className="navbar-right">

      <button className="login-btn">
        Login
        <FiArrowRight />
      </button>

      <button className="wishlist-btn">
        <FiHeart />
        <span>Wishlist</span>
      </button>

    </div>

    {/* Mobile Menu Icon */}

    <div
      className="menu-icon"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <FiX /> : <FiMenu />}
    </div>

  </div>

  {/* Mobile Drawer */}

  <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>

    <NavLink to="/" onClick={() => setMenuOpen(false)}>
      Home
    </NavLink>

    <NavLink to="/search" onClick={() => setMenuOpen(false)}>
      Search
    </NavLink>

    <NavLink to="/compare" onClick={() => setMenuOpen(false)}>
      Compare
    </NavLink>

    <button className="mobile-login">
      Login
    </button>

    <button className="mobile-wishlist">
      Wishlist
    </button>

  </div>

</nav>
  );
};

export default Navbar;
