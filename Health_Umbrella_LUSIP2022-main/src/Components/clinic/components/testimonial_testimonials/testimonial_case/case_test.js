import React from 'react'
import {useState} from 'react';
import nametag from './nametag.png'
import clinicimage from './clinicimage.png'
import image27 from './image27.png'
import './case_test.css'
import Stars from '../../testimonial_stars/stars'

function case_test({ name, casen, details,alter }) {

    let clinicCaseClass ='clinicCard'
    if(alter==='true'){
        clinicCaseClass ='clinicCardAlt'
    }
    return (
        <>

            <div className={clinicCaseClass}>
                <div className='caseDets'>
                    <div className='clinicIdentity'>
                           
                            <h5 className='clinic1Name'>{name}</h5>
                    </div>
                    <div className='clinicTimeline'>
                        <img className='clinicIdImg' src={nametag} alt='card' />
                        <p className='clinicId'>{casen}</p>
                    </div>
                    <div className='clinicTitle'>
                        <img className='titleImg' src={image27} alt='card' />
                        <p className='titleText'>Jaipur 302001</p>
                    </div>
                    <div>
                        <p className='clinic1Dets'>{details}</p>
                    </div>
                    <div className='clinicCardFooter'>
                        <Stars className='clinicrating' {...name} />
                    </div>
                </div>
                <div className='mainImgDiv'>
                    <img className='clinic1Img' src={clinicimage} alt='1_img' />
                </div>
            </div>

        </>
    )
}

export default case_test