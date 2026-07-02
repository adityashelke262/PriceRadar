import React from 'react'
// import iphone from '../../assets/iphone.png'
// import ps5 from '../../assets/ps5.png'
// import airpods from '../../assets/airpods.png'
import './HotDeals.css'

const HotDeals = () => {
  return (
    <section className="hot-deals">

      <h2>Hot Deals</h2>

      <p>
        Discover some of the hottest deals available right now.
      </p>

      <div className="hot-deals-grid">

        <div className="deal-card">

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt=""
          />

          <h3>iPhone 15</h3>

          <span className="price">₹77,999</span>

          <p className="save">
            Save ₹2,000
          </p>

        </div>

        <div className="deal-card">

          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
            alt=""
          />

          <h3>PlayStation 5</h3>

          <span className="price">₹44,999</span>

          <p className="save">
            Save ₹3,000
          </p>

        </div>

        <div className="deal-card">

          <img
            src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434"
            alt=""
          />

          <h3>AirPods Pro</h3>

          <span className="price">₹19,999</span>

          <p className="save">
            Save ₹1,500
          </p>

        </div>

      </div>

    </section>
  )
}

export default HotDeals