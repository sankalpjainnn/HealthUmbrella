import React from 'react'
import { Path } from './Path'
import './pathiesStyles.css'
import Ayurveda from './ayurveda.png'
import yoga from './Yoga.png'
import homeopathy from './homeopathy.png'
import homeopathy2 from './homeopathy2.png'

export const Pathies = () => {
  const small= `Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`
  const hom=`Homeopathy is a medical system based on the belief that the body can cure itself.`
  const ayur=`The traditional Hindu system of medicine that uses a combination of diet, herbal treatment, yogic breathing to treat illness.`
  const yog= `Pranyama is the practice of breath regulation. It's a main component of Yoga, an exercise for physical and mental well being.`
  return (
    <div className='container_pathies'>
        <h2 className='heading_pathies'>Pathies</h2>
        <div className='paths_container'>
            <Path className='path' name="Homeopathy" pic={homeopathy2} data={hom} />
            <Path className='path' name="Ayurveda" pic={Ayurveda} data={ayur} /> 
            <Path className='path' name="Yoga" pic={yoga} data={yog} /> 
        </div>

    </div>
  )
}