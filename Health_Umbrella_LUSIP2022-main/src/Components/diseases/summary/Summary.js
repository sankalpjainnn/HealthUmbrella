import React from 'react'
import pic from './test.png'
import './summaryStyles.css'

import styles from "./Summary.module.css"

export const Summary = (props) => {
  return (
    <div className={`${styles.container_summary}`}>
      <div className={`${styles.summary_card}`}>
        <img src={pic} className={`${styles.pic_summary}`} alt='background-pic' />
        <div className={`${styles.text_summary}`}>
          <h2 className={`${styles.heading_summary} ${styles.text}`}>Summary</h2>
          <p className={`${styles.data_summary} ${styles.text}`}>{props.data} <br /> {props.data}</p>
        </div>
      </div>
    </div>
  )
}
