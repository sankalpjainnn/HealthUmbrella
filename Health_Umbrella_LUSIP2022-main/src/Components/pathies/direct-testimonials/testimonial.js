import React from 'react'
import Slider from 'react-slick'
import Directcard from './direct-testimonial-card'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css'
import { Link } from 'react-router-dom';
function Testimonial() {
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
    const obj1 = { name: 'Bob Brown', casen: '1', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    const obj2 = { name: 'Cyrus Green', casen: '2', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    const obj3 = { name: 'Shah Rukh', casen: '3', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    const obj4 = { name: 'Sam Young', casen: '4', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    const obj5 = { name: 'Iris Yang', casen: '5', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    const obj6 = { name: 'Iris Yang', casen: '6', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };

    return (
        <>
            <div className='testimonial_cont'>
                <h1 id='Heading'>Direct Testimonials</h1>
                <div className='slider'>
                <Slider {...settings} className='Slider_css'>
                    <Directcard {...obj6} />
                    <Directcard {...obj5} />
                    <Directcard {...obj4} />
                    <Directcard {...obj3} />
                    <Directcard {...obj2} />
                    {/* <Directcard {...obj1} /> */}
                </Slider>
                </div>
                <Link className='view_more' to='/pathy/homeopathy/direct-testimonials'>View More...</Link>
            </div>
        </>
    )
}

export default Testimonial
