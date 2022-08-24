import React from 'react'
import {useState} from 'react';
import Cases from '../videos_case/case_vid'
import './vid_container.css'
import ArrowD from './arrowDown.png'
import Thumbnail from './Thumnail.jpg'
import Thumbnail1 from './Thumnail1.jpg'
function Video_container() {
    const [readMore,setReadMore]=useState(false);

    const obj1 = { logo: Thumbnail1,title: 'Ayurveda Over Western Medicines | Dr. B.M HEGDE | TEDxMITE' ,details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...', src:'https://www.youtube.com/watch?v=HzTvEK1sVi0' };
    const obj2 = { logo: Thumbnail,title: 'Secrets of Ayurveda With Dr. Vasant Lad & Sadhguru' ,details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...',src:'https://www.youtube.com/watch?v=Z2icN6wFjus' };
    const array = [obj1, obj2,obj1,obj2,obj1]
    const linkName=readMore?'Read Less':'Read More'
    const size=readMore?true:false

        return (
        <>
            <div className='testimonialCaseCont'>
            
                    {(size?array:array.slice(0,4)).map((_, index) => {
                        if(!size && index>5){
                            
                        }
                        if (index % 2 == 0) {

                            return (
                                <>
                                    <Cases {...array[index]} alter="false" />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Cases  {...array[index]} alter="true"/>
                                </>
                            )
                        }
                    }
                    )}

                <a onClick={()=>{setReadMore(!readMore)}} className='readMoreDiv'>
                    <div className='arrowDiv'>
                        <img className={linkName} src={ArrowD} alt='arrow' />
                    </div>
                    <a className='readMore' href='#'>{linkName}</a>
                </a>
            </div>
        </>
    )
}

export default Video_container