import React from "react";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <section className="why">

      <h2>Why Choose PriceRadar?</h2>

      <div className="why-grid">

        <div className="why-card">
          <h3>⚡ Fast Comparison</h3>
          <p>Compare prices across multiple stores instantly.</p>
        </div>

        <div className="why-card">
          <h3>💰 Save Money</h3>
          <p>Always find the lowest available price.</p>
        </div>

        <div className="why-card">
          <h3>📈 Price History</h3>
          <p>Track price changes before purchasing.</p>
        </div>

        <div className="why-card">
          <h3>🔔 Price Alerts</h3>
          <p>Get notified whenever your favorite products drop in price.</p>
        </div>

        <div className="why-card">
          <h3>🛒 Multiple Shopping Platforms</h3>
          <p>Compare prices from Amazon, Flipkart, Blinkit, Croma and many more.</p>
        </div>

        <div className="why-card">
          <h3>⭐ Trusted Product Reviews</h3>
          <p>View ratings and reviews to make smarter buying decisions.</p>
        </div>

        <div className="why-card">
          <h3>🤖 AI Product Summary</h3>
          <p>Read quick AI-generated highlights before purchasing any product.</p>
        </div>

        <div className="why-card">
          <h3>🚀 Direct Buy Links</h3>
          <p>Purchase instantly from the platform offering the best available price.</p>
        </div>

      </div>

    </section>
  );
};

export default ChooseUs;