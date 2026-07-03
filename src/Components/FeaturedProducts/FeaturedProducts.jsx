import React from "react";
import "./FeaturedProducts.css";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section id="featured-products" className="hot-deals">

      <div className="section-heading">

        <h2>Featured Products</h2>

        <p>
          Discover the most popular products currently available across multiple shopping platforms.
        </p>

      </div>

      <div className="hot-deals-grid">

        {featuredProducts.map((product) => {

          const lowestPrice = Math.min(
            ...product.prices.map((item) => item.price)
          );

          return (

            <div
              key={product.id}
              className="deal-card"
              onClick={() => navigate(`/product/${product.id}`)}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <span className="deal-brand">
                {product.brand}
              </span>

              <h3>{product.name}</h3>

              <div className="rating">

                ⭐ {product.rating}

                <span>
                  ({product.reviews})
                </span>

              </div>

              <div className="price">

                ₹{lowestPrice.toLocaleString()}

              </div>

              <button>

                View Product

              </button>

            </div>

          );
        })}

      </div>

    </section>
  );
};

export default FeaturedProducts;