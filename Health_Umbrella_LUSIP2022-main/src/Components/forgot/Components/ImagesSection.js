import React, { useState } from 'react';
import './ImagesSection.css';


import main from '../Images/main.jpg';
import Shape1 from '../Images/Shape1.png';




  
const Header = () =>{
    return (
        <div className="container1">
            <div className="main">
                <img src={main} alt="" />
            </div>
            <div className="shape1">
                <img src={Shape1} alt="" />
            </div>
           
        </div>
    );
};

export default Header;