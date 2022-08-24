import React from 'react';

import ImagesSection from './Components/ImagesSection';
import OuterCard from './Components/OuterCard';
import Header from './Components/Header';
import Shape2 from './Components/Shape2';
// import InnerCard from './Components/InnerCard';


import './forgot.css';

const Forgot = () => {
  return (
    <div className='for123'>
    <div className='outer-container'>
      <OuterCard>
        <Header />
        {/* <InnerCard> */}
          <Shape2/>
          
         
        {/* </InnerCard> */}
      </OuterCard>
      <ImagesSection />
    </div>
    </div>
  );
}

export default Forgot;
