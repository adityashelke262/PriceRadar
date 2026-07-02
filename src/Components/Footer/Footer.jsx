import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
        <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>PriceRadar</h2>
          <p>
            Compare prices across multiple platforms and
            discover the best deals on the internet.
          </p>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <a href="#">Compare Products</a>
            <a href="#">Price Alerts</a>
            <a href="#">Wishlist</a>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 PriceRadar. All Rights Reserved.</p>
      </div>

    </footer>

  )
}

export default Footer

