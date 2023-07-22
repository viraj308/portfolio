import React from "react";
import Video from "../videos/chainsaw-girls2.mp4";
import Image from "../images/chainsaw-girl.png";
import "./hero.css";

export default function Hero() {
  return (
    <>
      <div className="image-wrapper">
        <img src={Image} />
        <video className="video" autoPlay loop>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h2 className="hero-text2">I am,</h2>
            <h1 className="hero-text1">Viraj Chavan</h1>
            <p className="hero-para">
              aspiring front-end web developer and a binge anime watcher
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
