import React from 'react'
import iphoneImage from '../../assets/iphone.png'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Never Overpay Again.
          <br />
          <span>Find The Best Price Instantly.</span>
        </h1>

        <p>
          Search any product or paste a shopping link.
          Compare prices from Amazon, Flipkart, Blinkit,
          Zepto, BigBasket and more in seconds.
        </p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search products, brands and more..."
          />
          <button>Compare Prices</button>
        </div>

      </div>

      <div className="hero-right">

        <div className="comparison-card">
        <img src={iphoneImage} alt="" className="product-image" />
          <h2>iPhone 15 Pro</h2>

          <div className="price-row">
            <span>Amazon</span>
            <span>₹79,999</span>
          </div>

          <div className="price-row best">
            <span>Flipkart</span>
            <span>₹77,999 ✓</span>
          </div>

          <div className="price-row">
            <span>Blinkit</span>
            <span>₹78,499</span>
          </div>

          <div className="price-row">
            <span>BigBasket</span>
            <span>₹79,499</span>
          </div>

          <div className="saving">
            You Save ₹2,000
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero