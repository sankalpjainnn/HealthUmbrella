import React from 'react'
import { useState } from 'react';
import patientcard from './patientcard.png'
import cardrectangle from './cardrectangle.png'
import patientimg from './patientimg.png'
import patienttitle from './patienttitle.png'
import styles from'./BooksArticles_case_test.module.css'
import Stars from '../../BooksArticles_stars/BooksArticles_stars'
import { Link } from 'react-router-dom';
function case_test({ name, casen, details, alter }) {

    let testimonialCaseClass = 'testimonialCard'
    if (alter === 'true') {
        testimonialCaseClass = 'testimonialCardAlt'
    }
    return (
        <>
            
            <div className={testimonialCaseClass}>
                <div className={`${styles.caseDets}`}>
                    <div className={`${styles.testimonialIdentity}`}>
                        <h5 className={`${styles.testimonialPatientName}`}>Lorem Impsum</h5>
                    </div>
                    <Link to='/pathy/homeopathy/direct-testimonials/case1'>
                        <div className={`${styles.testimonialTimeline}`}>
                            <img className={`${styles.testimonialIdImg}`} src={patientcard} alt='card' />
                            <p className={`${styles.testimonialId}`}>Ps/Hom/2022/00{casen}</p>
                        </div>
                    </Link>
                    {/* <div className={`${styles.testimonialTitle}`}>
                        <img className={`${styles.titleImg}`} src={patienttitle} alt='card' />
                        <p className={`${styles.titleText}`}>LOREMIMPSUM</p>
                    </div> */}
                    <div>
                        <p className={`${styles.testimonialPatientDets}`}>{details}</p>
                    </div>
                    <div className={`${styles.testimonialCardFooter}`}>
                        <Stars className={`${styles.testimonialrating}`} {...name} />
                    </div>
                </div>
                <div className={`${styles.patientImgDiv}`}>
                    <img className={`${styles.testimonialPatientImg}`} src={patientimg} alt='patient_img' />
                </div>
            </div>

        </>
    )
}

export default case_test