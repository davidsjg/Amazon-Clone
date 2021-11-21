import React from "react";
import Product from "../Product/Product";
// import "./Home.css";
import styles from "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon prime image"
      />

      <Product
        id="12321341"
        title="The Lean Startup: How Consant Innovation Helps"
        price={11.96}
        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        rating={5}
      />
    </div>
  );
}

export default Home;
