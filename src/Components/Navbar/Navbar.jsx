import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import logo from "../../assets/a.png";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* LEFT */}

      <Link to="/" className="navbar-logo">
        <img src={logo} alt="PriceRadar" />

        <div>
          <h2>PriceRadar</h2>

          <p>Compare • Save • Buy</p>
        </div>
      </Link>

      {/* CENTER */}

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/search">Search</NavLink>

        <NavLink to="/compare">Compare</NavLink>
      </div>

      {/* RIGHT */}

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
    </nav>
  );
};

export default Navbar;
