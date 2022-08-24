import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'

import img from './images/img-info.png'
import face from './images/facebook.png'
import linkedin from './images/linkedin.png'
import insta from './images/instagram.png'

// import './infoStyles.css'
// import './infoResponsive.css'
import styles from "./Info.module.css"
import './InfoExtra.css'

export const Info = (props) => {
  const {onChangeInfo}=props
    const [details,setDetails]=useState({
      fn:'',
      ln:'',
      email:'',
      pn:''
    })
    const [phone,setPhone]=useState();
    const handleChange=(e,s)=>{
      switch(s){
        case 'f':
          setDetails((prevState)=>({
            ...prevState,
            fn:e.target.value
          }))
        break;
        case 'l':
          setDetails((prevState)=>({
            ...prevState,
            ln:e.target.value
          }))
        break;
        case 'e':
          setDetails((prevState)=>({
            ...prevState,
            email:e.target.value
          }))
        break;
        default:
      }
      // console.log(details)
    }
    const handleSubmit=(event)=>{
      event.preventDefault();
      setDetails((prevState)=>({
        ...prevState,
        ph:phone
      }))
      onChangeInfo(details.fn,details.ln,details.email,phone);
    }
    return (
      <div className={`${styles.donate_us_info}`}>
        <div className={`${styles.container_background}`}>

            <div className={`${styles.input_div}`}>
                <form className={`${styles.form}`} onSubmit={handleSubmit}>
                  <input required className={`${styles.input} ${styles.fn}`} value={details.fn} type='text' onChange={(e)=>handleChange(e,'f')} placeholder='First Name'/>
                  <input required className={`${styles.input} ${styles.ln}`} value={details.ln}  type='text' onChange={(e)=>handleChange(e,'l')} placeholder='Last Name'/>
                  <input required className={`${styles.input} ${styles.email}`} value={details.email} type='email' onChange={(e)=>handleChange(e,'e')} placeholder='Email Address'/>
                  <PhoneInput required className={`${styles.input} ${styles.phone}`} value={phone} onChange={setPhone} placeholder='Phone Number' country={'in'}/>
                  <div className={`${styles.animated_button}`}>
                    <button type="submit" className={`${styles.button}`}>Donate Now</button>
                    <div className={`${styles.background_button}`}></div>
                  </div>
                </form>
            </div>
            <div className={`${styles.right_div}`}>
                <img className={`${styles.img}`} src={img} alt='img'/>
                {/* <div className={`${styles.text_div}`}>Find us on social network</div>
                <div className={`${styles.logo_div}`}>
                    <img className={`${styles.logo} ${styles.facebook}`} src={face} alt='f'/>
                    <img className={`${styles.logo} ${styles.linkedin}`} src={linkedin} alt='l'/>
                    <img className={`${styles.logo} ${styles.instagram}`} src={insta} alt='i'/>
                </div> */}
            </div>

        </div>
      </div>
    )
}


