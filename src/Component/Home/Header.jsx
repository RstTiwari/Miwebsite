// src/Banner.js
import React from 'react';
import './Header.css';
import Meraki from "../../Assets/Meraki.png"; // Assuming the image is saved in the src directory

const Header = () => {

  const openWhatsApp = () => {
    const phoneNumber = "+1234567890"; // Replace with your phone number
    const message = "Hello, I have a query about the project."; // Replace with your message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

   const email=()=>{
    window.location.href='mailto:sachinpal1199@gmail.com'
   }

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
        <div className='email1' onClick={email}>
          <p className='email' >
                <i class="fa-regular fa-envelope"></i>
          </p>
          </div>
            <div className='btn'>
                     <button className="contact-button"  onClick={openWhatsApp}>
                      CONTACT US
                     </button>
         </div>
      </div>
    </div>
    </>
  );
};

export default Header;
