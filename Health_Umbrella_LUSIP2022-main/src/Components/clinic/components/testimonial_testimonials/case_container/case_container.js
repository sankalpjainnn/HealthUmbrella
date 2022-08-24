import React from 'react'
import {useState} from 'react';
import Cases from '../testimonial_case/case_test'
import './case_container.css'
import ArrowD from './arrowDown.png'

function Case_container() {
    const [readMore,setReadMore]=useState(false);

    const obj1 = { name: 'Name of Clinic', casen: 'Medanta', details: 'Medanta Hospital was founded in 2009 by the renowned Cardiovascular and Cardiothoracic surgeon, Dr. NareshTrehan. The hospital is both NABH and NABL accredited. Centers of excellence include the Heart Institute, Institute of Neurosciences, Bone & Joint Institute, Kidney & Urology Institute, Cancer Institute and Division of Medical Oncology and Hematology. ',alter:1 };

    const obj2 = { name: 'Name of Clinic', casen: 'Sahara', details: 'Sahara Hospital Lucknow is poised to become one of the top hospitals in Asia. . It has conceptualized to be patient friendly and intends to provide quality care with highest standards having all medical facilities and diagnostics under one roof. The hospital has successfully provided its patients cost effective and high quality services for over 30 years now and is contuinung do the same with greater expertise and enthusiam. ',alter:1 };

    const obj3 = { name: 'Name of Clinic', casen: 'Apollo', details: 'The Apollo Heart Institutes are regarded as one of the best heart hospitals in India, performing a multitude of treatments and procedures in cardiology and cardiothoracic surgery. The scorecard shows an unmatched record of over 1,52,000 cardiac and cardiothoracic surgeries. Along with treatments to several issues, it also provides routine wellness and diagnostic services. ',alter:1 };

    const obj4 = { name: 'Name of Clinic', casen: 'Fortis', details: 'The hospital provides comprehensive care for cardiology and cardiac surgery, urology, nephrology, neurosciences, orthopaedics, digestive care and emergency care. This facility has Maharashtra’s largest transplant centre for multiorgan transplant. It is the only hospital in the city to have multi organ transplant and has treated the youngest patient for angioplasty. ',alter:1 };

    const obj5 = { name: 'Name of Clinic', casen: 'Apollo', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ' };

    const obj6 = { name: 'Name of Clinic', casen: 'Fortis', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ' };
    const array = [obj1, obj2, obj3, obj4, obj5, obj6,obj1,obj2,obj3]
    const linkName=readMore?'Read Less':'Read More'
    const size=readMore?true:false

        return (
        <>
            <div className='testimonialCaseCont'>
                <div className='slider'>
                    {(size?array:array.slice(0,4)).map((_, index) => {
                        if(!size && index>5){
                            
                        }
                        if (index % 2 == 0) {

                            return (
                                <>
                                    <Cases {...array[index]} alter="false" />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Cases  {...array[index]} alter="true"/>
                                </>
                            )
                        }
                    }
                    )}
                </div>
                <a onClick={()=>{setReadMore(!readMore)}} className='readMoreDiv'>
                    <div className='arrowDiv'>
                        <img className={linkName} src={ArrowD} alt='arrow' />
                    </div>
                    <a className='readMore' href='#'>{linkName}</a>
                </a>
            </div>
        </>
    )
}

export default Case_container