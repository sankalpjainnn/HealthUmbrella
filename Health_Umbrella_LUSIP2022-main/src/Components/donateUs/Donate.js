import React,{useState} from 'react'
import { scroller } from "react-scroll";

import { Header } from './header/Header'
import { Amount } from './amount/Amount'
import {Info} from './information/Info'

import './donateStyles.css'
import Footer from '../Footer/Footer';

export const Donate = () => {
    const header={
        title:`Lets Help Those Who are More in Need`,
        subtitle:`By helping each other we can spread more happiness to other who are looking for our help`,
    }
    const scrollDown=()=>{
      scroller.scrollTo("scroll-here", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }

    const [amount,setAmount]=useState({amount:0})
    const handleChangeAmount=(value)=>{
      setAmount({amount:value})
    }

    const [info,setInfo]=useState({
      fn:'',
      ln:'',
      email:'',
      pn:''
    })
    const handleChangeInfo=(f,l,e,p)=>{
      setInfo({
        fn:f,
        ln:l,
        email:e,
        pn:p
      })
    }

    // const showData=()=>{
    //   console.log(amount.amount)
    //   console.log(info)
    // }
  return (
    <div className='donate-us'>
        <Header header={header} handleClick={scrollDown}/>
        <div className='scroll-here'/>
        <Amount onChangeAmount={handleChangeAmount}/>
        <Info onChangeInfo={handleChangeInfo}/>
        {/* <button onClick={showData}>Click to check data Stored</button> */}
        <Footer/>
    </div>
  )
}
