import React,{useState} from 'react'
// import './backgroundStyles.css'
// import './amountStyles.css'
// import './amountResponsive.css'
import styles from "./Amount.module.css"

export const Amount = (props) => {
    const {onChangeAmount}=props
    const [value,setValue]=useState(0)
    const handleChangeValue=(value)=>{
        onChangeAmount(value);
        setValue(value)
    }
    //{`${styles.feedback_page}`}
  return (
    <div className={`${styles.donate_us_amount}`}>
        <div className={`${styles.ellipse} ${styles.container_background}`}>
            
            <div className={`${styles.select_amount}`}>Select an Amount (in Rs)</div>
            <div className={`${styles.buttons}`}>
                <button className={`${styles.button}`} onClick={()=>handleChangeValue(5)} >5</button>
                <button className={`${styles.button}`} onClick={()=>handleChangeValue(25)}>25</button>
                <button className={`${styles.button}`} onClick={()=>handleChangeValue(100)}>100</button>
                <button className={`${styles.button}`} onClick={()=>handleChangeValue(250)}>250</button>
                <button className={`${styles.button}`} onClick={()=>handleChangeValue(500)}>500</button>
            </div>
            <div className={`${styles.input_text}`}>Other (in Rs)</div>
            <input className={`${styles.input}`} type="number"  value={value} onChange={(e)=>handleChangeValue(e.target.value)} valuedefault={0}/>

        </div>
    </div>
  )
}
/* <input type="number"  value={amount} onChange={onChangeAmount} valuedefault={0}/>  */