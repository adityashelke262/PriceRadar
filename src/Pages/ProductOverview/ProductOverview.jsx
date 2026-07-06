import amazonLogo from "../../assets/amazon.png";
import flipkartLogo from "../../assets/flipkart1.png";
import blinkitLogo from "../../assets/blinkit1.png";
import cromaLogo from "../../assets/croma.png";
import zeptoLogo from "../../assets/zepto.png";
import bigbasketLogo from "../../assets/bigbasket.png";
import myntraLogo from "../../assets/myntra.png";
import relianceLogo from "../../assets/reliancedigital.png";
import { products } from "../../data/products";
import "./ProductOverview.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const ProductOverview = () => {
  const platformLogos = {
    Amazon: amazonLogo,

    Flipkart: flipkartLogo,

    Blinkit: blinkitLogo,

    Croma: cromaLogo,

    "Reliance Digital": relianceLogo,

    Zepto: zeptoLogo,

    BigBasket: bigbasketLogo,

    Myntra: myntraLogo,
  };
  const [liked, setLiked] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));
  const [aiSummary, setAiSummary] = useState(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatLoading, setChatLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setChatLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          product,
          question,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          type: "user",
          text: question,
        },
        {
          type: "ai",
          text: data.answer,
        },
      ]);

      setQuestion("");
    } catch (err) {
      console.error(err);
    }

    setChatLoading(false);
  };

  console.log(aiSummary);

  useEffect(() => {
    console.log("useEffect started");

    if (!product) return;

    const fetchAISummary = async () => {
      console.log("Fetching AI...");

      setLoadingAI(true);

      try {
        const response = await fetch(
          "http://127.0.0.1:5000/api/product-summary",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          },
        );

        console.log("Response received:", response);

        const data = await response.json();

        console.log("AI Data:", data);

        setAiSummary(data);
      } catch (err) {
        console.error("Fetch Error:", err);
      }

      setLoadingAI(false);
    };

    fetchAISummary();
  }, [product]);
  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const cheapestStore = product.prices.reduce((lowest, current) =>
    current.price < lowest.price ? current : lowest,
  );

  const galleryImages = product.images || [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [showViewer, setShowViewer] = useState(false);

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  return (
    <section className="product-overview">
      <div className="breadcrumb">
        <span onClick={() => navigate("/")}>Home</span>

        <span>›</span>

        <span onClick={() => navigate("/search")}>{product.category}</span>

        <span>›</span>

        <span>{product.name}</span>

        <div className="product-actions">
          <button className="wishlist" onClick={() => setLiked(!liked)}>
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>

          <button
            className="share"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);

              alert("Product link copied!");
            }}
          >
            <FiShare2 />
          </button>
        </div>
      </div>
      <div className="product-container">
        <div className="product-container">
          {/* LEFT COLUMN */}

          <div className="left-column">
            {/* Image Gallery */}

            <div className="product-image-section">
              <div className="thumbnail-list">
                {galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className={`thumbnail ${
                      selectedImage === img ? "active-thumbnail" : ""
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>

              <div className="main-image-container">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="main-product-image"
                  onClick={() => setShowViewer(true)}
                />
              </div>
            </div>

            {/* Why Buy */}

            <div className="left-highlights">
              <h2>✨ Why Buy This Product?</h2>

              <div className="highlight-box">
                <div className="highlight-item">
                  <span>💰</span>
                  <div>
                    <h4>Lowest Price</h4>
                    <p>Compared across multiple stores.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span>🤖</span>
                  <div>
                    <h4>AI Recommendation</h4>
                    <p>Smart buying advice for this product.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span>🔒</span>
                  <div>
                    <h4>Trusted Sellers</h4>
                    <p>Only verified shopping platforms.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span>🚚</span>
                  <div>
                    <h4>Fast Delivery</h4>
                    <p>Available from major retailers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery */}

            <div className="delivery-card">
              <h2>🚚 Delivery & Warranty</h2>

              <div className="delivery-item">
                <span>🚚</span>
                <p>Free Delivery Available</p>
              </div>

              <div className="delivery-item">
                <span>📦</span>
                <p>7-Day Replacement</p>
              </div>

              <div className="delivery-item">
                <span>🛡</span>
                <p>1 Year Brand Warranty</p>
              </div>

              <div className="delivery-item">
                <span>🔐</span>
                <p>100% Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}

        <div className="product-info">
          <p className="product-brand">{product.brand}</p>

          <h1 className="product-name">{product.name}</h1>

          <p className="product-rating">
            ⭐ {product.rating} ({product.reviews} Reviews)
          </p>

          <div className="product-status">
            <span className="stock">✔ {product.stock}</span>

            <span className="discount">{product.discount}</span>
          </div>

          <p className="product-description">
            Compare prices across multiple trusted online stores and buy from
            the platform offering the best deal.
          </p>

          <h2 className="product-price">
            ₹{cheapestStore.price.toLocaleString()}
          </h2>

          <p className="lowest-price">
            Best Price on
            <strong> {cheapestStore.platform}</strong>
          </p>

          <div className="action-buttons">
            <button
              className="buy-btn"
              onClick={() => window.open(cheapestStore.link, "_blank")}
            >
              Buy on {cheapestStore.platform}
            </button>

            <button
              className="compare-btn"
              onClick={() => navigate(`/compare?product1=${product.id}`)}
            >
              Compare
            </button>
          </div>

          {/* Price Comparison */}

          <div className="price-comparison">
            <h2>Compare Prices</h2>

            {product.prices.map((store) => (
              <div key={store.platform} className="price-row">
                <div className="platform-info">
                  <img
                    src={platformLogos[store.platform]}
                    alt={store.platform}
                    className="platform-logo"
                  />

                  <span className="platform-name">{store.platform}</span>
                </div>

                <div className="platform-price">
                  ₹{store.price.toLocaleString()}
                </div>

                <a
                  href={store.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  Visit →
                </a>
              </div>
            ))}
          </div>

          {/* Specifications */}

          <div className="specifications">
            <h2>Specifications</h2>

            <div className="spec-grid">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div className="spec-card" key={key}>
                  <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>

                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendation */}

          <div className="ai-recommendation">
            <h2>🤖 PriceRadar AI</h2>

            <div className="ai-card">
              <div className="ai-rating">
                <h1>
                  {loadingAI ? "--" : aiSummary?.overallScore || "--"}
                  /10
                </h1>

                <span>Overall AI Score</span>
              </div>

              <div className="score-grid">
                <div className="score-card">
                  <h4>⚡ Performance</h4>

                  <span>
                    {loadingAI ? "--" : aiSummary?.scores?.performance}/10
                  </span>
                </div>

                <div className="score-card">
                  <h4>📷 Camera</h4>

                  <span>{loadingAI ? "--" : aiSummary?.scores?.camera}/10</span>
                </div>

                <div className="score-card">
                  <h4>🔋 Battery</h4>

                  <span>
                    {loadingAI ? "--" : aiSummary?.scores?.battery}/10
                  </span>
                </div>

                <div className="score-card">
                  <h4>🖥 Display</h4>

                  <span>
                    {loadingAI ? "--" : aiSummary?.scores?.display}/10
                  </span>
                </div>

                <div className="score-card">
                  <h4>💰 Value</h4>

                  <span>{loadingAI ? "--" : aiSummary?.scores?.value}/10</span>
                </div>
              </div>

              <div className="pros-cons">
                <div className="pros">
                  <h3>👍 Pros</h3>

                  <ul>
                    {loadingAI ? (
                      <li>Loading...</li>
                    ) : (
                      aiSummary?.pros?.map((pro, index) => (
                        <li key={index}>{pro}</li>
                      ))
                    )}
                  </ul>
                </div>

                <div className="cons">
                  <h3>👎 Cons</h3>

                  <ul>
                    {loadingAI ? (
                      <li>Loading...</li>
                    ) : (
                      aiSummary?.cons?.map((con, index) => (
                        <li key={index}>{con}</li>
                      ))
                    )}
                  </ul>
                </div>
                <div className="verdict">
                  <h3>✅ AI Verdict</h3>

                  <p>
                    {loadingAI ? "Generating verdict..." : aiSummary?.verdict}
                  </p>
                </div>
              </div>
              <div className="assistant-section">
                <div className="assistant-card">
                  <h2>🤖 PriceRadar AI Assistant</h2>

                  <p>Ask anything about this product.</p>

                  <div className="assistant-input">
                    <input
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Example: Is this good for gaming?"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          askAI();
                        }
                      }}
                    />

                    <button onClick={askAI}>Ask</button>
                  </div>

                  <div className="suggested-questions">
                    <button
                      onClick={() => setQuestion("Is this good for gaming?")}
                    >
                      🎮 Gaming
                    </button>

                    <button onClick={() => setQuestion("Should I buy this?")}>
                      💰 Worth Buying?
                    </button>

                    <button
                      onClick={() => setQuestion("Is this good for students?")}
                    >
                      🎓 Students
                    </button>

                    <button
                      onClick={() => setQuestion("Is battery backup good?")}
                    >
                      🔋 Battery
                    </button>
                  </div>

                  <button className="new-chat" onClick={() => setMessages([])}>
                    🗑 New Chat
                  </button>

                  {chatLoading && (
                    <p className="thinking">🤖 PriceRadar AI is thinking...</p>
                  )}

                  <div className="chat-history">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={
                          msg.type === "user" ? "user-message" : "ai-message"
                        }
                      >
                        <strong>
                          {msg.type === "user" ? "👤 You" : "🤖 PriceRadar AI"}
                        </strong>

                        <p>{msg.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="summary">
                <h3>🤖 AI Summary</h3>

                {loadingAI ? (
                  <p>Generating AI insights...</p>
                ) : aiSummary ? (
                  <p>{aiSummary.summary}</p>
                ) : (
                  <p>Unable to generate AI summary.</p>
                )}
              </div>

              <div className="best-for">
                <h3>🎯 Best For</h3>

                <div className="best-tags">
                  {loadingAI ? (
                    <span>Loading...</span>
                  ) : (
                    aiSummary?.bestFor?.map((item, index) => (
                      <span key={index} className="best-tag">
                        {item}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}

          <div className="related-products">
            <h2>You May Also Like</h2>

            <div className="related-grid">
              {relatedProducts.map((item) => {
                const lowest = item.prices.reduce((a, b) =>
                  a.price < b.price ? a : b,
                );

                return (
                  <div
                    className="related-card"
                    key={item.id}
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <img src={item.image} alt={item.name} />

                    <h3>{item.name}</h3>

                    <p>{item.brand}</p>

                    <span>⭐ {item.rating}</span>

                    <h2>₹{lowest.price.toLocaleString()}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {showViewer && (
        <div className="image-viewer">
          <button className="close-viewer" onClick={() => setShowViewer(false)}>
            ✕
          </button>

          <img
            src={selectedImage}
            alt={product.name}
            className="viewer-image"
          />
        </div>
      )}
    </section>
  );
};

export default ProductOverview;
