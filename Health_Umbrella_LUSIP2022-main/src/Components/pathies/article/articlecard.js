import React from 'react'
import './articlecard.css'
import Reddit from './Reddit.png'
import Quora from './Quora.png'
import Redirect from './redirect.png'
function article_card({ logo, details,link }) {
    console.log({details})
    return (
        <>
            <div className='card'>
                <div className='Logo'>
                    <img className='logoimg' src={logo} alt='logo' />
                </div>
                <div>
                    <p className='article_details'>{details}</p>
                </div>
                <a href={link} target='./blank' className='redirect'>
                    <img  className='redirect_img' src={Redirect} alt='' />
                </a>
            </div>
        </>
    )
}

export default article_card