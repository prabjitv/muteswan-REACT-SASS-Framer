import React from "react";
import image from "../assets/MSOnlyEverBackFull.jpg";

const Home = () => (
  <div className="home">
    <div className="home-intro">
      <div className="home-intro-heading">
        <h1>Hi, We're Mute Swan</h1>
        <h2>Welcome to our website!</h2>
        <button>Check out our stuff</button>
      </div>
      <div className="home-intro-image">
        <img src={image} alt="#" className="my-img" />
      </div>
    </div>

    <div className="home-speacialisation">
      <h2>We speacialise in </h2>
      <div className="bottom-line"></div>
      <p>Making quality recordings and engrossing live performances</p>
    </div>

    <div className="home-speacialisation-grid">
      <div>
        <h3>Recordings</h3>
        <p>
          {""}
          We've recorded, arranged, produced, engineered, and mixed our own
          records.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
