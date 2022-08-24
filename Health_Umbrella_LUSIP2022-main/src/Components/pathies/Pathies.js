import React from 'react';
import Testimonials from './direct-testimonials/testimonial'
import Articles from './article/articles.js'
import Videos from './videosSection/video'
import Stars from './stars/stars'
import { Summary } from './summary/Summary';
import Article from './article_links/Articles';
import Header from './Pathy_header/Header'
import Footer from '../Footer/Footer';

function Pathies() {
  const name="Homopathy"
  const data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return (
    <>
    <Header/>
    <Summary data={data}/>
    <Testimonials />
    <Videos/>
    <Articles/>
    <Article/>
    <Footer/>
    </>
  );
}

export default Pathies;
