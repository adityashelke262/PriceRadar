import React from "react";
import "./Compare.css";
import { useState, useEffect } from "react";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Compare = () => {
  const [searchParams] = useSearchParams();
  const selectedId = Number(searchParams.get("product1"));

  const navigate = useNavigate();
  const [category, setCategory] = useState("Smartphone");

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  const [product1, setProduct1] = useState(filteredProducts[0]);
  const [product2, setProduct2] = useState(filteredProducts[1]);

  useEffect(() => {
    if (filteredProducts.length < 2) return;

    const selectedProduct = filteredProducts.find(
      (product) => product.id === selectedId,
    );

    if (selectedProduct) {
      setProduct1(selectedProduct);

      const secondProduct = filteredProducts.find(
        (product) => product.id !== selectedProduct.id,
      );

      setProduct2(secondProduct);
    } else {
      setProduct1(filteredProducts[0]);
      setProduct2(filteredProducts[1]);
    }
  }, [category, selectedId]);

  const cheapestStore1 = product1.prices.reduce((cheapest, current) => {
    return current.price < cheapest.price ? current : cheapest;
  });

  const cheapestStore2 = product2.prices.reduce((cheapest, current) => {
    return current.price < cheapest.price ? current : cheapest;
  });

  return (
    <section className="compare">
      {/* header */}

      <div className="compare-header">
        <h1 className="compare-title">Compare Products</h1>

        <p className="compare-subtitle">
          Compare specifications, prices and AI recommendations side by side
          before making your purchase.
        </p>
      </div>

      {/* Product Selector */}

      <div className="category-selector">
        <label>Select Category</label>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Smartphone">Smartphones</option>

          <option value="Laptop">Laptops</option>

          <option value="Protein">Proteins</option>
        </select>
      </div>

      <div className="selector-section">
        <div className="selector-box">
          <label>Product 1</label>

          <select
            value={product1.id}
            onChange={(e) => {
              const selected = filteredProducts.find(
                (product) => product.id === Number(e.target.value),
              );

              setProduct1(selected);
            }}
          >
            {filteredProducts

              .filter((product) => product.id !== product2.id)

              .map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
          </select>
        </div>

        <div className="vs-circle">VS</div>

        <div className="selector-box">
          <label>Product 2</label>

          <select
            value={product2.id}
            onChange={(e) => {
              const selected = filteredProducts.find(
                (product) => product.id === Number(e.target.value),
              );

              setProduct2(selected);
            }}
          >
            {filteredProducts

              .filter((product) => product.id !== product1.id)

              .map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Product Cards */}

      <div className="compare-cards">
        {/* Product 1 */}

        <div className="compare-card">
          <img
            src={product1.image}
            alt={product1.name}
            className="compare-product-image"
          />

          <h2>{product1.name}</h2>

          <p className="brand">{product1.brand}</p>

          <div className="price-box">
            <h3>₹{cheapestStore1.price.toLocaleString()}</h3>

            <span>Available on {cheapestStore1.platform}</span>
          </div>

          <div className="rating">⭐⭐⭐⭐⭐</div>

          <button
            className="view-btn"
            onClick={() => navigate(`/product/${product1.id}`)}
          >
            View Product
          </button>
        </div>

        {/* Product 2 */}

        <div className="compare-card">
          <img
            src={product2.image}
            alt={product2.name}
            className="compare-product-image"
          />

          <h2>{product2.name}</h2>

          <p className="brand">{product2.brand}</p>

          <div className="price-box">
            <h3>₹{cheapestStore2.price.toLocaleString()}</h3>

            <span>Available on {cheapestStore2.platform}</span>
          </div>

          <div className="rating">⭐⭐⭐⭐☆</div>

          <button
            className="view-btn"
            onClick={() => navigate(`/product/${product2.id}`)}
          >
            View Product
          </button>
        </div>
      </div>

      {/* Comparison Table */}

      <div className="comparison-section">
        <h2>Detailed Comparison</h2>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>{product1.name}</th>
              <th>{product2.name}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Display</td>
              <td>{product1.specifications.display}</td>
              <td>{product2.specifications.display}</td>
            </tr>

            <tr>
              <td>Processor</td>
              <td>{product1.specifications.processor}</td>
              <td>{product2.specifications.processor}</td>
            </tr>

            <tr>
              <td>RAM</td>
              <td>{product1.specifications.ram}</td>
              <td>{product2.specifications.ram}</td>
            </tr>

            <tr>
              <td>Storage</td>
              <td>{product1.specifications.storage}</td>
              <td>{product2.specifications.storage}</td>
            </tr>

            <tr>
              <td>Battery</td>
              <td>{product1.specifications.battery}</td>
              <td>{product2.specifications.battery}</td>
            </tr>

            <tr>
              <td>Camera</td>
              <td>{product1.specifications.camera}</td>
              <td>{product2.specifications.camera}</td>
            </tr>

            <tr>
              <td>Operating System</td>
              <td>{product1.specifications.os}</td>
              <td>{product2.specifications.os}</td>
            </tr>

            <tr>
              <td>Lowest Price</td>
              <td>₹{cheapestStore1.price.toLocaleString()}</td>
              <td>₹{cheapestStore2.price.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* AI Recommendation */}

      <div className="ai-section">
        <div className="ai-card">
          <div className="ai-header">
            <h2>🤖 AI Recommendation</h2>

            <p>
              Here's our smart comparison based on the specifications and
              pricing.
            </p>
          </div>

          <div className="ai-grid">
            <div className="ai-box">
              <h3>🏆 Overall Winner</h3>
              Overall Winner
              {cheapestStore1.price < cheapestStore2.price
                ? product1.name
                : product2.name}
            </div>

            <div className="ai-box">
              <h3>📸 Best Camera</h3>

              <p>{product1.name}</p>
            </div>

            <div className="ai-box">
              <h3>🔋 Best Battery</h3>

              <p>{product2.name}</p>
            </div>

            <div className="ai-box">
              <h3>🎮 Best Gaming</h3>

              <p>{product2.name}</p>
            </div>
          </div>

          <div className="recommendation">
            <h3>Recommendation</h3>

            <p>
              If photography and the Apple ecosystem matter most, choose the{" "}
              <strong>{product1.name}</strong>.
              <br />
              <br />
              If you're looking for excellent battery life, gaming performance
              and better value for money, choose the{" "}
              <strong>{product2.name}</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compare;
