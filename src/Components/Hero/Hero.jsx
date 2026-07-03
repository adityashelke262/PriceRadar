import React, { useState, useEffect } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";


const Hero = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Featured products for hero card
  const heroProducts = products.filter((product) => product.featured);

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProduct = heroProducts[currentIndex];

  // Auto change hero product
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroProducts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroProducts.length]);

  // Suggestions
  const suggestions = products
    .filter((product) => {
      const value = search.toLowerCase();

      return (
        product.name.toLowerCase().includes(value) ||
        product.brand.toLowerCase().includes(value)
      );
    })
    .slice(0, 5);

  // Price calculations
  const prices = currentProduct.prices.map((store) => store.price);

  const lowest = Math.min(...prices);

  const highest = Math.max(...prices);

  return (
    <section className="hero">
      {/* LEFT */}

      <div className="hero-left">
        <h1>
          Never Overpay Again.
          <br />
          <span>Find The Best Price Instantly.</span>
        </h1>

        <p>
          Search any product or compare prices across Amazon,
          Flipkart, Blinkit, Zepto, BigBasket and many more
          in seconds.
        </p>

        <div className="hero-search-container">

          <div className="hero-search">

            

            <input
              type="text"
              value={search}
              placeholder="Search products, brands and more..."
              onFocus={() => setShowSuggestions(true)}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
            />

            <button
  onClick={() => {
    document
      .getElementById("featured-products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  View All Products
</button>

          </div>

          {showSuggestions &&
  search &&
  suggestions.length > 0 && (
    <div className="hero-suggestions">
      {suggestions.map((product) => (
        <div
  key={product.id}
  className="hero-suggestion"
  onClick={() => {
    setSearch("");
    setShowSuggestions(false);
    navigate(`/product/${product.id}`);
  }}
>
  {product.name}
</div>
      ))}
    </div>
)}

        </div>

      </div>

      {/* RIGHT */}

      <div className="hero-right">

        <div className="comparison-card">

          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="product-image"
          />

          <h2>{currentProduct.name}</h2>

          {currentProduct.prices.map((store) => (

            <div
              key={store.platform}
              className={`price-row ${
                store.price === lowest ? "best" : ""
              }`}
            >

              <span>{store.platform}</span>

              <span>
                ₹{store.price.toLocaleString()}
                {store.price === lowest && " ✓"}
              </span>

            </div>

          ))}

          <div className="saving">
            You Save ₹{(highest - lowest).toLocaleString()}
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;