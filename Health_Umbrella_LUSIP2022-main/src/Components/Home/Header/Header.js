import React from 'react'
import Navbar from '../../Navbar/Navbar'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"

import "./Header.css"


function Header() {
  return (
    <div className='header'>
        <Navbar />
        <div className='header_intro'>
            <div className="left">
                <h1>Confused about your medical treatment – </h1>
                <p>Let common man’s wisdom guide you to an integrative solution.</p>
                <div className="animated-button">
                    <button type="button" className="button">Click Here</button>
                    <div className="background"></div>
                </div>
            </div>
            <div className="right">
                <div className="background">
                    <img src={image1} alt="image1" />
                </div>
                <div className="box box1">
                    <img src={image2} alt="image2" />
                    <p className='floatCardText'>Patients<br/>52</p>
                </div>
                <div className="box box2">
                    <img src={image3} alt="image3" />
                    <p className='floatCardText'>Articles Published</p>
                </div>
                <div className="box box3">
                    <img src={image4} alt="image4" />
                    <p className='floatCardText'>Visits<br/>1234</p>
                </div>
                <div className="box box4">
                    <img src={image5} alt="image5" />
                    <p className='floatCardText'>15</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Header