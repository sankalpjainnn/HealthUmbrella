import React from 'react';

import Slider from 'react-slick'
import VideoCard from './videoCard.js'

import Thumbnail from './Thumnail.jpg'
import Thumbnail1 from './Thumnail1.jpg'
import './video.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
function video() {
    const settings = {
        dots: true,
        // infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        rtl: true,
        responsive: [
            {
              breakpoint: 1198,
              settings: {
                slidesToShow: 1,
                centreMode: true
              }
            }
            
          ]
    };
    const obj1 = { logo: Thumbnail,title: 'Secrets of Ayurveda With Dr. Vasant Lad & Sadhguru' ,details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...',link:'https://www.youtube.com/watch?v=Z2icN6wFjus'} ;
    const obj2 = { logo: Thumbnail1,title: 'Ayurveda Over Western Medicines | Dr. B.M HEGDE | TEDxMITE' ,details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...',link:'https://www.youtube.com/watch?v=HzTvEK1sVi0'} ;
    // const obj3 = { name: 'Shah Rukh', casen: '3', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    // const obj4 = { name: 'Sam Young', casen: '4', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    // const obj5 = { name: 'Iris Yang', casen: '5', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    return (
        <>
            <div className='article_cont'>
                <h1 id='Heading'>Videos</h1>
                <div className='slider'>
                    <Slider {...settings} className='Slider_css'>
                        <VideoCard {...obj1} />
                        <VideoCard {...obj2} />
                        <VideoCard {...obj2} />
                        <VideoCard {...obj1} />
                        <VideoCard {...obj1} />
                        <VideoCard {...obj2} />
                    </Slider>
                </div >
                <Link className='view_more' to='/pathy/homeopathy/youtube-testimonials'>View More...</Link>
            </div>
        </>
    )
}

export default video
