import React from "react";
import Product from "../Product/Product";
import "./Home.css";
// import styles from "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon prime image"
      />

      <div className="home__row">
        <Product
          id="12321888"
          title="Kenwood kMix Stand Mixer KMX754RD"
          price={289}
          image="https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SX466_.jpg"
          rating={4}
        />
        <Product
          id="73421341"
          title="SAMSUNG 27-Inch CR50 Frameless Curved Gaming Monitor"
          price={11.96}
          image="https://m.media-amazon.com/images/I/61LmgKYPiJL._AC_SS450_.jpg"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id="1232e341"
          title="Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa - Charcoal"
          price={11.96}
          image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287974cv13d.jpg"
          rating={5}
        />
        <Product
          id="12321r41"
          title="The Lean Startup: How Consant Innovation Helps"
          price={11.96}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product
          id="123w1341"
          title="The Lean Startup: How Consant Innovation Helps"
          price={11.96}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="1q321341"
          title="The Lean Startup: How Consant Innovation Helps"
          price={11.96}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product
          id="12321341r"
          title="The Lean Startup: How Consant Innovation Helps"
          price={11.96}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product
          id="12321t341"
          title="The Lean Startup: How Consant Innovation Helps"
          price={11.96}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product
          id="1232y1341"
          title="The Lean Startup: How Consant Innovation Helps"
          price={11.96}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product
          id="1232r1341"
          title="The Lean Startup: How Consant Innovation Helps"
          price={11.96}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
