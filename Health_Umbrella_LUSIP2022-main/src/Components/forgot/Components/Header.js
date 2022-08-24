import React from 'react';

import './Header.css';
import logo from '../Images/logo.png';

const Header = () =>{
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="title">Health Umbrella Foundation</div>
        </div>
    );
};

export default Header;