import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const cheapestStore = product.prices.reduce((lowest, current) =>
    current.price < lowest.price ? current : lowest,
  );

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <h3>{product.name}</h3>

      <p className="brand">{product.brand}</p>

      <p className="rating">
        ⭐ {product.rating} ({product.reviews} Reviews)
      </p>

      <h2 className="price">₹{cheapestStore.price.toLocaleString()}</h2>

      <p className="platform">
        Best Price on
        <span> {cheapestStore.platform}</span>
      </p>

      <div className="card-buttons">
        <button
          className="details-btn"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          View Details
        </button>

        <button
          className="compare-btn"
          onClick={() => navigate(`/compare?product1=${product.id}`)}
        >
          Compare
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
