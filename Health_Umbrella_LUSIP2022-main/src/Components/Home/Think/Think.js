import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Think.css";
import Part from "react-slick";
import img1 from "./Picture3.png";
import img2 from "./Picture2.png";
import img3 from "./Picture1.png";

function Think() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => {
      return <ul style={{ margin: " -25px" }}>{dots}</ul>;
    },
  };

  return (
    <div className="aayush1">
      <div className="slidee">
        <div className="people">
          <h2>What People Think about us ?</h2>
          <div className="value">
            <h3>Do share with us about your experience here, we value your opinions!</h3>
          </div>

          <div className="think">
            <div className="item2">
              <Part {...settings}>
                <div className="box">
                  <div className="card">
                    <div className="card-body">
                      <div>
                        <img className="image" src={img1} alt="" />
                      </div>

                      <p>
                        Knowing that there are people like you, who have gone through this before, and have overcome this, just gives me great strength! And this is exactly what this organization gave me! Finding relevant details never felt this easy
                        before! Great INITIAITIVE!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="card">
                    <div className="card-body">
                      <div className="centimg">
                        <img className="image" src={img2} alt="" />
                      </div>
                      <p>
                        It was an overall good experience,exploring this site. All of the data has been organized systematically, the idea of people sharing their experiences really intrigued me. Not only I was able to find the needed information, I
                        felt confident after reading the experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="card">
                    <div className="card-body">
                      <div className="centimg">
                        <img className="image" src={img1} alt="" />
                      </div>
                      <p>
                        Knowing that there are people like you, who have gone through this before, and have overcome this, just gives me great strength! And this is exactly what this organization gave me! Finding relevant details never felt this easy
                        before! Great INITIAITIVE!
                      </p>
                    </div>
                  </div>
                </div>
              </Part>
            </div>
            <div className="item3">
              <h3>
                There are countless happy stories just like these!
                <br />
                <br />
                We Form a NGO. This is not for any Profit. This is a mission by the people,for the people of the people
              </h3>
              <br />
              <h1>150+ Patients Love</h1>
              <div className="centimg">
                <img className="imgg" src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Think;
