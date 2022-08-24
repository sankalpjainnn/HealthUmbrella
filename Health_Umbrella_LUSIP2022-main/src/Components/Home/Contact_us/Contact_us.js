import React from 'react'
import "./Contact_us.css"
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"

function Contact_us() {
  return (
    <div className='contact_us'>
        <div className="left">
            <h1>Reach Out To Us</h1>
            {/* <p>For any query reach out to us!!</p> */}
            <div className="contactDetails">
                <div className='item item1'>
                    <img src={image1} alt="img" /><h6>100-00-00-00</h6>
                </div>
                <div className='item item2'>
                    <img src={image2} alt="img" /><h6>100-00-00-00</h6>
                </div>
            </div>
        </div>
        <div className="right">
            <h1>Stay connected with us</h1>
            <form>
                <div className="row form">
                    <div className="col">
                        <input type="text" className="input" placeholder="Your name" aria-label="Your name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="input" placeholder="Your email" aria-label="Your email"/>
                    </div>
                </div>
                <button type="submit" className="button">JOIN US</button>
            </form>
        </div>
    </div>
  )
}

export default Contact_us