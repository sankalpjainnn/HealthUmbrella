import React from 'react';

import './InnerCard.css';

const InnerCard = (props) =>{
    return(
        <div class="inner-card-container">
            {props.children}
        </div>
    );
};

export default InnerCard;