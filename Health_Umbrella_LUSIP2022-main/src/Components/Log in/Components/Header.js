import React from 'react';

import './Header.css';
import logo from '../Images/logo.png';

const Header = () =>{
    return (
        <div className="Prabhavcontainer">
            <div className="Prabhavlogo">
                <img src={logo} alt="" />
            </div>
            <div className="Prabhavtitle">Health Umbrella Foundation</div>
        </div>
    );
};

export default Header;