import React from 'react';
import './OuterCard.css';
import avatar from '../Images/avatar.jpg';
const OuterCard = (props) =>{
    return (
        <div className = "outer-card">
            {props.children}
            <form className='form'>
                <div className="button-socials">
                
                </div>
                 <div className="forgotPassword">
                     <p>Forgot</p>
                        <p>Your Password?</p>
                 </div>
                <div className="fields">
                    <img src={avatar} alt="" />
                    <input type="text" placeholder='Enter Your Email' />
                </div>
            <button>Reset Password</button>
            
            </form>
        
        </div>
        
    );
};

export default OuterCard;