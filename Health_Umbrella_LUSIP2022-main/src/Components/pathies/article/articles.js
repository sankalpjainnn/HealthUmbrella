import React from 'react';

import Slider from 'react-slick'
import Articlecard from './articlecard.js'
import Reddit from './Reddit.png'
import Quora from './Quora.png'
import './articles.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function articles() {
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
    const obj1 = { logo: Reddit, details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' ,link:'https://www.reddit.com/r/Homeopathy/'} ;
    const obj2 = { logo: Quora, details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...',link:'https://www.quora.com/What-is-the-best-way-to-know-about-Ayurveda-and-her-benefits'} ;
    // const obj3 = { name: 'Shah Rukh', casen: '3', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    // const obj4 = { name: 'Sam Young', casen: '4', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    // const obj5 = { name: 'Iris Yang', casen: '5', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    return (
        <>
            <div className='article_cont'>
                <h1 id='Heading'>Popular Articles</h1>
                <div className='slider'>
                    <Slider {...settings} className='Slider_css'>
                        <Articlecard {...obj1} />
                        <Articlecard {...obj2} />
                        <Articlecard {...obj2} />
                        <Articlecard {...obj1} />
                        <Articlecard {...obj1} />
                        <Articlecard {...obj2} />
                    </Slider>
                </div >
                <a className='learnMore' href='#'>Learn More...</a>
            </div>
        </>
    )
}

export default articles
