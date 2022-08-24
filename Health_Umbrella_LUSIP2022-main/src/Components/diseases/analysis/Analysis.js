import React from 'react'
import img1 from './bar.png'
import img2 from './bar2.png'
//import './analysisStyles.css'
import styles from './Anal.module.css'
import Graph from './Graph'
import Graph2 from './Graph2'


export const Analysis = () => {
  return (
    <div className={`${styles.container_analysis}`}>
        <div className={`${styles.analysis_card}`}>

            <h2 className={`${styles.heading_analysis}`}>Analysis</h2>
            <div className={`${styles.pics_container}`}>
              <Graph2/>
              <img className={`${styles.pic_right}`}  src={img2} alt='pic_right' />
              
              {/* <img className={`${styles.pic_graph}`} src={img1} alt='pic_graph' /> */}
            </div>

        </div>
    </div>
  )
}
