import React from "react";
import image1 from "./images/image1.png";
// import "./FeedbackPage.css";
import axios from "axios";
import { useState } from "react";
import styles from "./FeedbackPage.module.css"

function FeedbackPage() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  function submithandler() {
    axios.post('http://127.0.0.1:8000/api/feedback', {
      name: name,
      email: email,
      subject: message
    }, 
    {
      headers: {
        'Content-Type': "application/json"
      }
    })
    .then(function (response) {
      console.log("working!!");
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  return (
    <div className={`${styles.feedback_page}`}>
      <div className={`${styles.left}`}>
        <h1>Feel free to drop us your feedback...</h1>
        <div className={`${styles.imagE}`}>
          <img src={image1} alt="img" />
        </div>
      </div>
      <div className={`${styles.right}`}>
        <div className={`${styles.input_box}`}>
          <h1>Feedback</h1>
          <p>
            We are greatful to you for giving us this opportunity to serve you.
            <br />
            Kindly fill up this form and help us improve!
          </p>
          <div className={`${styles.form}`}>
            <input onChange={(e)=>{setname(e.target.value)}} type="text" className={`${styles.input} ${styles.name}`} placeholder="Enter Your Name" aria-label="Your name" />
            <input onChange={(e)=>{setemail(e.target.value)}} type="text" className={`${styles.input} ${styles.email}`} placeholder="Enter Your Email" aria-label="Your name" />
            <textarea onChange={(e)=>{setmessage(e.target.value)}} type="text" className={`${styles.input} ${styles.message}`} placeholder="Message" aria-label="Your name" />
            <div className={`${styles.bottom}`}>
              <div className={`${styles.bottom_msg}`}>We appreciate your feedback and assure you of our best services always.</div>
              <div className={`${styles.animated_button}`}>
                <button onClick={submithandler} type="button" className={`${styles.button}`}>
                  Send
                </button>
                <div className={`${styles.background}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
