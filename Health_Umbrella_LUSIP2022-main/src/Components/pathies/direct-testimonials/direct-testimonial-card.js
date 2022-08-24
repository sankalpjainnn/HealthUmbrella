import React from 'react'

import patientcard from './patientcard.png'
import cardrectangle from './cardrectangle.png'
import patientimg from './patientimg.png'
import patienttitle from './patienttitle.png'
import rating from './rating.png'
import styles from './direct-testimonial-card.module.css'
import Stars from '../stars/stars'
import { Link } from 'react-router-dom';
function directcard({ name, casen, details }) {

    return (
        <>

            <div className={`${styles.card}`}>
                <div className={`${styles.identity}`}>
                    <img className={`${styles.patient_img}`} src={patientimg} alt="patient_img" />
                    <div className={`${styles.identity_name}`}>
                        <div className={`${styles.inner_identity}`}>
                            <h6 className={`${styles.inner_text}`}>Case {casen}</h6>
                            <img className={`${styles.inner_rect}`} src={cardrectangle} alt="card" />
                        </div>
                        <h5 className={`${styles.patient_name}`}>{name}</h5>
                    </div>
                </div>
                <div className={`${styles.timeline}`}>
                    <img className={`${styles.patient}`} src={patientcard} alt="card" />
                    <p className={`${styles.timeline_text}`}>Ps/Hom/2022/00{casen}</p>
                </div>
                <div className={`${styles.title}`}>
                    <img className={`${styles.pateienttitleimg}`} src={patienttitle} alt="card" />
                    <p className={`${styles.title_text}`}>LOREMIMPSUM</p>
                </div>
                <div>
                    <p className={`${styles.patient_details}`}>{details}</p>
                </div>
                <div className={`${styles.card_footer}`}>
                    <Stars className={`${styles.rating}`} {...name}/>
                    <Link to="/pathy/homeopathy/direct-testimonials/case1"><button className={`${styles.patient_card_btn}`}>Read More</button></Link>
                </div>
            </div>

        </>
    )
}

export default directcard