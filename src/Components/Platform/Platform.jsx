import "./Platform.css";

import amazonLogo from "../../assets/amazon.png";
import flipkartLogo from "../../assets/flipkart1.png";
import blinkitLogo from "../../assets/blinkit1.png";
import zeptoLogo from "../../assets/zepto.png";
import bigbasketLogo from "../../assets/bigbasket.png";
import cromaLogo from "../../assets/croma.png";
import myntraLogo from "../../assets/myntra.png";
import relianceLogo from "../../assets/reliancedigital.png";

const Platform = () => {
  const logos = [
    {
      name: "Amazon",
      image: amazonLogo,
    },
    {
      name: "Flipkart",
      image: flipkartLogo,
    },
    {
      name: "Blinkit",
      image: blinkitLogo,
    },
    {
      name: "Zepto",
      image: zeptoLogo,
    },
    {
      name: "BigBasket",
      image: bigbasketLogo,
    },
    {
      name: "Croma",
      image: cromaLogo,
    },
    {
      name: "Reliance Digital",
      image: relianceLogo,
    },
    {
      name: "Myntra",
      image: myntraLogo,
    },
  ];

  return (
    <section className="trusted-platforms">

      <div className="trusted-header">

        <h2>Compare Prices Across India's Top Stores</h2>

        <p>
          It's Your Platform that helps you compare prices from trusted online stores so you
          always get the best deal.
        </p>

      </div>

      <div className="platform-grid">

        {logos.map((logo) => (

          <div
            className="platform-card"
            key={logo.name}
          >

            <img
              src={logo.image}
              alt={logo.name}
            />

            <h4>{logo.name}</h4>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Platform;