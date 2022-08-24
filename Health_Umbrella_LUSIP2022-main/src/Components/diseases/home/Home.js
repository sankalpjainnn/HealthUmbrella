import React from "react";
import e2 from  "./Ellipse 2.png";
import e3 from "./Ellipse 3.png";
import img from "./mainImg.png"

import "./homeStyles.css"

function Home() {
  return (
    <div className="container_home">
      <img className="ellipse2" src={e2} alt="Ellipse" />
      <h1 class="diseaseHeading">Psoriasis</h1>
      <img className="ellipse3" src={e3} alt="Ellipse" />
      <img className="mainImg" src={img} alt="Ellipse" />
      <button className="readMore">Read More</button>
    </div>
  );
}

export default Home;