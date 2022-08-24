import React from 'react';

import './SubHeader.css';

const SubHeader = () =>{
    return (
        <div className='Prabhavsub-header-container'>
            <div className="Prabhavheader">
                <div className="Prabhavoption Prabhavactive">Sign In</div>
                <div className="Prabhavoption">Sign Up</div>
            </div>
            <div className="Prabhavsub-heading">Sign in to complete to our application</div>
        </div>
    );
};

export default SubHeader;