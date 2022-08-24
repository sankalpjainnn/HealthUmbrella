import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import image1 from "./images/image1.png"
import styles from "./Pathy_header.module.css"

function Header(props) {
  return (
    <div className={`${styles.header}`} >
        <Navbar/>
        <div className={`${styles.pathy_header_intro}`}> 
          <div className={`${styles.box}`}>
            <div className={`${styles.left}`}>
              <h1>Our clinics</h1>
              <p>We will provide convenient access to advance tertiary medical care to the people connected to us. The associated hospitals will deliver high standards of technology, infrastructure and testimonialal care to patients at an affordable cost through a team of superspecialist doctors and dedicated nursing, paramedic staff.</p>
            </div>
            <img classname={`${styles.headerimg}`} src={image1} alt="img" />
          </div>
        </div>
    </div>
  )
}

export default Header