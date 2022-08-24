import React from 'react';

import './SocialsButton.css';

const SocialsButton = (props) => {
    return (
        <div className="btn">
            <div className="img">
                <img src={props.link} alt="" />
            </div>
            <div className="content">Sign In with {props.name}</div>
        </div>
    );
};

export default SocialsButton;