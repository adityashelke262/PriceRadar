import "./Search.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { products } from "../../data/products";
import { FiSearch } from "react-icons/fi";
import Footer from "../../Components/Footer/Footer";
import React, { useState, useRef } from "react";

const Search = () => {
  const resultsRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Default");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = products
    .filter((product) =>{
    const search = searchTerm.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
    })
    .slice(0, 5);

  const filteredProducts = products

    .filter((product) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })

    .sort((a, b) => {
      const cheapestA = Math.min(...a.prices.map((price) => price.price));
      const cheapestB = Math.min(...b.prices.map((price) => price.price));

      switch (sortBy) {
        case "Lowest Price":
          return cheapestA - cheapestB;

        case "Highest Price":
          return cheapestB - cheapestA;

        case "Highest Rating":
          return b.rating - a.rating;

        case "Most Reviews":
          return b.reviews - a.reviews;

        case "A-Z":
          return a.name.localeCompare(b.name);

        case "Z-A":
          return b.name.localeCompare(a.name);

        default:
          return 0;
      }
    });

  return (
    <section className="search-page">
      {/* Header */}

      <div className="search-hero">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80"
          alt="Banner"
          className="hero-banner"
        />

        <div className="hero-content">
          <h1>
            Find The Best Prices,
            <span> Every Time.</span>
          </h1>

          <p>
            Search any product or paste a shopping link. Compare prices across
            Amazon, Flipkart, Blinkit, Zepto, BigBasket and more.
          </p>

          <div className="hero-search">
            <div className="search-container">
              <div className="search-bar">
                <FiSearch className="search-icon" />

                <input
                  type="text"
                  placeholder="Search products, brands, categories..."
                  value={searchTerm}
                  onFocus={() => setShowSuggestions(true)}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                />
              </div>

              {showSuggestions && searchTerm && suggestions.length > 0 && (
                <div className="suggestions">
                  {suggestions.map((product) => (
                    <div
                      key={product.id}
                      className="suggestion-item"
                      onClick={() => {
                        setSearchTerm(product.name);

                        setShowSuggestions(false);

                        setTimeout(() => {
                          resultsRef.current?.scrollIntoView({
                            behavior: "smooth",

                            block: "start",
                          });
                        }, 150);
                      }}
                    >
                      🔍 {product.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="search-content">
        {/* Filters */}

        <div className="filter-section">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>

            <option value="Smartphone">Smartphones</option>

            <option value="Laptop">Laptops</option>

            <option value="Protein">Proteins</option>
          </select>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="Default">Sort By</option>

            <option value="Lowest Price">Lowest Price</option>

            <option value="Highest Price">Highest Price</option>

            <option value="Highest Rating">Highest Rating</option>

            <option value="Most Reviews">Most Reviews</option>

            <option value="A-Z">Name (A-Z)</option>

            <option value="Z-A">Name (Z-A)</option>
          </select>
        </div>

        {/* Products */}

        <div ref={resultsRef} className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-products">

    <div className="search-emoji">

        🔎

    </div>

    <h2>

        Oops! We couldn't find that product.

    </h2>

    <p>

        Try another keyword, brand or category.

    </p>

    <button

        className="reset-search"

        onClick={() => {

            setSearchTerm("");

            setCategory("All");

            setSortBy("Default");

        }}

    >

        Show All Products

    </button>

</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
