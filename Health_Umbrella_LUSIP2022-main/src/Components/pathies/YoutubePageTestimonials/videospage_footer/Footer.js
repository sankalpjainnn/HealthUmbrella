import React from 'react'
import footerimg from './footerimg.png'
import facebook from './facebook.png'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import './footerStyles.css'
function Footer() {
    return (
        <>
            <div className='Footer-box'>
                <div className='FooterWrap'>
                    <div className='footerimg'>
                        <img src={footerimg} className='footer-logo' />
                    </div>
                    <div className='Col'>
                        <ul className='unstyled-list'>
                            <li><a href='#'>Join US</a></li>
                            <li><a href='#'>Contact US</a></li>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>Presse</a></li>
                            <li><a href='#'>Partners</a></li>
                            <li><a href='#'>News</a></li>
                        </ul>
                    </div>
                    <div className='Col'>
                        <ul className='unstyled-list'>
                            <li><a href='#'>Legal Notice</a></li>
                            <li><a href='#'>Policy of use of Personal data</a></li>
                            <li><a href='#'>Cookies Policy</a></li>
                            <li><a href='#'>Sitemap</a></li>
                            <li><a href='#'>Credits</a></li>
                        </ul>
                    </div>
                    <div className='Col'>
                        <ul className='unstyled-list'>
                            <li><a href='#'>Find Us on Social Network</a></li>
                            <span className='handleWrapper'>
                                <a href='https://www.facebook.com/' target='_blank'>
                                    <img src={facebook} className='facebook handles' />
                                </a>
                                <a href='https://www.linkedin.com/' target='_blank'>
                                    <img src={linkedin} className='linkedin handles' />
                                </a>
                                <a href='https://www.instagram.com/' target='_blank'>
                                    <img src={instagram} className='instagram handles' />
                                </a>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer