import React from 'react';
// import Button from 'react-bootstrap/Button';
import './Bottom.css';
import image29 from './image28.png';

const Header = () =>{
    return (
        <div className="clinic_container">
            <div className='clinic_dropdown'>
            <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
            </div>
            </div>
            <div className='clinic_search-box'>
            <input className='clinic_search' type="text" placeholder="Search.." name="search"/>
            <button className='clinic_button' type="submit"><img className='magnifierimg' src={image29} alt='card' /></button>
            </div>
        </div>
    );
};

export default Header;