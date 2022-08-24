import React from 'react';
import "./Contact_button.css";
import img1 from './image16.png';
function Contact_button() {


      
      return (
       <div className="aayush"> 
      <div className="back">
      <div className="doctor">
      <div className="item1">

        <h2>ॐ सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।
         सर्वे भद्राणि पश्यन्तु। मा कश्चित् दुःख भाग्भवेत्॥  ॐ शान्तिः शान्तिः शान्तिः॥</h2>
        <br />
        
        <div className="animated-button">
                    <button type="button" className="button">Contact Us</button>
                    <div className="background"></div>
                </div>

      </div>
      <div className="">
        <img src={img1} className="image16" />
      </div>

    </div>
    </div>


      
          
       
        </div>
      );
}
  
export default Contact_button;