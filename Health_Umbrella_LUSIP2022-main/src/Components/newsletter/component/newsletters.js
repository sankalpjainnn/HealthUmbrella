import React from 'react';
import "slick-carousel/slick/slick.css";
import "./newsletter.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MDBCol } from 'mdb-react-ui-kit';

import img1 from './Picture2.png';
import img2 from './Picture5.png';
import img3 from './Picture4.png';
import img4 from './Picture2.png';







function Newsletters() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <> <div className="sectionii">
      
      
      <div className="texttt">
        <h2 className='h22'>Connect With Us</h2>
        <button className='buttonnews'>Subscribe</button>
        
</div>
<div><MDBCol md="6">
            <input className="Searchi" type="text" placeholder="Search Newsletter" aria-label="Searchi" />
          </MDBCol></div>
      <div className='slide'>





        <Slider {...settings}>
          <div className='box'>
            <div class="card">
              <div className="card-body">
                <div><img className="imagei" src={img1} alt="" /></div>

                <h3 className='h33'>Cancer Prevention Updates</h3>
                <p className='pp'>Cancer is the second leading cause of death in the United States and is one of the world's most researched diseases.</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className="card">
              <div className="card-body">
                <div className='centimg'><img className="imagei" src={img2} alt="" /></div>
                <h3 className='h33'>Cancer Prevention Updates</h3>
                <p className='pp'>In recent years, carbohydrates have developed a bad reputation, creating the perfect opportunity for low or no carb diets to dominate the diet industry.</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className="card">
              <div className="card-body">

                <div className='centimg'><img className="imagei" src={img3} alt="" /></div>
                <h3 className='h33'>Cancer Prevention Updates</h3>
                <p className='pp'>There's been a significant increase in information about building and boosting a healthy immune system in recent months.</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className="card">
              <div className="card-body">
                <div className='centimg'><img className="imagei" src={img4} alt="" /></div>
                <h3 className='h33'>Cancer Prevention Updates</h3>
                <p className='pp'>Cancer is the second leading cause of death in the United States and is one of the world's most researched diseases.</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className="card">
              <div className="card-body">
                <div className='centimg'><img className="imagei" src={img2} alt="" /></div>
                <h3 className='h33'>Cancer Prevention Updates</h3>
                <p className='pp'>In recent years, carbohydrates have developed a bad reputation, creating the perfect opportunity for low or no carb diets to dominate the diet industry.</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className="card">
              <div className="card-body">
                <div className='centimg'><img className="imagei" src={img1} alt="" /></div>
                <h3 className='h33'>Cancer Prevention Updates</h3>
                <p className='pp'>Cancer is the second leading cause of death in the United States and is one of the world's most researched diseases.</p>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
    </>
  );
}






export default Newsletters;