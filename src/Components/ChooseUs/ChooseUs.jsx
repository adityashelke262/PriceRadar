import React from 'react'
import './ChooseUs.css'

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
          <p>Get notified when prices drop.</p>
        </div>

      </div>

    </section>
  )
}

export default ChooseUs