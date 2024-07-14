// src/Banner.js
import React from 'react';
import './Header.css';
import Meraki from "../../Assets/Meraki.png"; // Assuming the image is saved in the src directory

const Header = () => {
  return (
    <>
    <div className="banner">
    <img src={Meraki} alt="Meraki Innovation Logo" className="logo" />
      <div className="left-section">
        <h4 className='Meraki'>MERAKI <br /> INNOVATION</h4>
        <div className="text">
          <p>Project Design And Guidance</p>
          <p>Project Part Suppliers</p>
          <p>Mechanical & Fabrication Workshop</p>
        </div>
      </div>
      <div>
        
      </div>
      <div className="right-section">
        <div className='email1'>
          <p className='email'>
                <i class="fa-regular fa-envelope"></i>
          </p>
          </div>
            <div className='btn'>
                     <button className="contact-button">
                      CONTACT US
                     </button>
         </div>
      </div>
    </div>
    </>
  );
};

export default Header;
