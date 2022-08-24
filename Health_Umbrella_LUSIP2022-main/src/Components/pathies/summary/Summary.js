import React from 'react'
import pic from './sumImg.png'
import styles from './summaryStyles.module.css'

export const Summary = (props) => {
  return (
    <div className={`${styles.container_summary}`}>
      <div className={`${styles.Summary_Card}`}>
        <div className={`${styles.ImgDiv}`}>
          <img src={pic} className={`${styles.pic_summary}`} alt='background-pic' />
        </div>
        <div className={`${styles.text_summary}`}>
          <h1 className={`${styles.heading_summary} ${styles.text}`}>Summary</h1>
          <p className={`${styles.data_summary} ${styles.text}`}>{props.data} <br /> {props.data}</p>
        </div>
      </div>
    </div>
  )
}
