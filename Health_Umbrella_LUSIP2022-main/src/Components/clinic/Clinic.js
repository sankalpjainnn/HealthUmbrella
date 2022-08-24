import React from 'react'
import Header from './components/testimonial_header/Header'
import TestimonialCases from './components/testimonial_testimonials/case_container/case_container'
import Bottom from './components/Bottom/Bottom'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
function Clinic() {
  return (
<>
    <Header/>
    <Bottom/>
    <TestimonialCases/>
    <Footer/>
</>
  );
}

export default Clinic;
