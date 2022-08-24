import React from 'react'
import './logoCard.css'

const LogoCard = (props) => {
  return (
    <div className='container_logocard'>
        <div className='card_logo' style={{background:props.color}}>
            <div className='logo_div'>
              <img src={props.img}  className='logo'  alt={props.name}/>
            </div>
            <div className='textWrap'>
              <p className='textLogo'>{props.name} Page ARTICLE</p>
            </div>
        </div>
    </div>
  )
}

export default LogoCard