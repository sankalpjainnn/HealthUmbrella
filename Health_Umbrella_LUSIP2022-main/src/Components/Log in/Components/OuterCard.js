import React from 'react';
import './OuterCard.css';

const OuterCard = (props) =>{
    return (
        <div className = "outer-card pra">
            {props.children}
        </div>
    );
};

export default OuterCard;