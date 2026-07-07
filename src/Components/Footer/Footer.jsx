import "./Footer.css";
import logo from "../../assets/a.png";
import {
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Left */}

      <div className="footer-left">

        <img className="footer-logo" src={logo} alt="SmartScout" />

        <h3>SmartScout</h3>

      </div>

      {/* Center */}

      <div className="footer-center">

        <div className="footer-links">

          <a href="/">About</a>

          <span>|</span>

          <a href="/">Contact Us</a>

          <span>|</span>

          <a href="/">Terms & Conditions</a>

        </div>

        <div className="footer-line">

          <span>© 2026 SmartScout</span>

        </div>

      </div>

      {/* Right */}

      <div className="footer-right">

        <a href="/">
          <FiLinkedin />
        </a>

        <a href="/">
          <FiInstagram />
        </a>

        <a href="/">
          <FiGithub />
        </a>

        <a href="mailto:yourmail@gmail.com">
          <FiMail />
        </a>

      </div>

    </footer>
  );
};

export default Footer;