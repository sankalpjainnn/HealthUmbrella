import React from 'react'
import Navbar from "../../Navbar/Navbar"
import image1 from "./images/image1.png"
import styles from "./Pathy_header.module.css"

function Header(props) {
  return (
    <div className={`${styles.header}`}>
        <Navbar />
        <div className={`${styles.pathy_header_intro}`}> 
          <div className={`${styles.box}`}>
            <div className={`${styles.left}`}>
              <h1>Homeopathy</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente atque veniam maxime, mollitia ipsam aperiam? Ipsa vero illo eum praesentium ratione quasi expedita tempora veritatis accusantium sint, id error! Architecto deleniti, sint asperiores excepturi ipsa vitae explicabo laudantium nemo, modi, commodi dolorum dolor quis in porro repellendus maxime atque!</p>
            </div>
            <img src={image1} alt="img" />
          </div>
        </div>
    </div>
  )
}

export default Header