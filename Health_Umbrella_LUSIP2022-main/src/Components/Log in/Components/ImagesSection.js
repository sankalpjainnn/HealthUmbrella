import React, { useState } from 'react';
import './ImagesSection.css';

import image1 from '../Images/image1.png';
import image2 from '../Images/image2.png';

const ImagesSection = () => {
    const [opacityPhoto1, setOpacityPhoto1] = useState(0);
    const [opacityPhoto2, setOpacityPhoto2] = useState(1);
    const [temp, setTemp] =useState(0);

    const change = () => {
        if(temp%2 == 0){
            setOpacityPhoto1(1);
            setOpacityPhoto2(0);
        }
        else{
            setOpacityPhoto1(0);
            setOpacityPhoto2(1);
        }
        setTemp(temp+1);
    }

    const timer = () =>{
        setInterval(change, 5000);
    } 

    timer();

    return (
        <div className='section-header' onChange = {timer}>
            <div className="image-container" >
                <div style = {{opacity : opacityPhoto1}} className="img-div photo1">
                    <img src={image1} />
                </div>
            </div>
            <div className="image-container">
                <div style = {{opacity : opacityPhoto2}} className="img-div photo2">
                    <img src={image2} />
                </div>
            </div>
        </div>
    );
};

export default ImagesSection;