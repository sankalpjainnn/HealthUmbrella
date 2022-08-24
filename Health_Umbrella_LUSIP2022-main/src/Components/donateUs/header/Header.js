import React from 'react'
// import './backgroundStyles.css'
// import './headerStyles.css'
// import './headerResponsive.css'
import styles from "./Header.module.css"
import img from './images/homeImg.png'
import Navbar from '../../Navbar/Navbar'


export const Header = ({header,handleClick}) => {
  return (
    <div className={`${styles.donate_us_header} ${styles.ellipse}`}>
          <Navbar/>
        <div className={`${styles.container_background}`}>
        
            
            <div className={`${styles.img_div}`}>
                <img className={`${styles.img}`} src={img} alt='img' />
            </div>

            <div className={`${styles.text_div}`}>
                <div className={`${styles.title}`}>{header.title}</div>
                <div className={`${styles.subtitle}`}>{header.subtitle}</div>
                
                <div className={`${styles.animated_button}`}>
                    <button type="button" className={`${styles.button}`} onClick={handleClick} >Donate Us</button>
                    <div className={`${styles.background_button}`}></div>
                </div>
                {/* <div className={`${styles.background_button}`}>
                  <button className={`${styles.donate_button}`} onClick={handleClick}>Donate Us</button>
                </div> */}
            </div>

        </div>
    </div>
  )
}
/** used div instead of h1 and h2 so that I can define the margin */
