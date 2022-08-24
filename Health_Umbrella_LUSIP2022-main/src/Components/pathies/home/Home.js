import React from 'react'
import img from './homeImg.png'
import './homeStyles.css'
import './backgroundStyles.css'

function About(props) {
    return (
        <div className='container_home'>
            <div className='ellipse container_background'>

                    <h2 className='Heading text'> About {props.name}</h2>
                    <div className="Home-Card">
                        <div className='TextWrapper'>
                            <p className='para text'>{props.data}</p>
                        </div>
                        <div className='imgdiv'>
                            <img src={img} className='HomeIMG' alt="img" />
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default About