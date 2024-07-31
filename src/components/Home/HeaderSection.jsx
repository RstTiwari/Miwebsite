import React from 'react'
import "./HeaderSection.css"
import logoImage from '../Images/Meraki2.jpg';
import { Button } from 'antd';
import { Input } from 'antd';
import { CiMail } from "react-icons/ci";



function HeaderSection() {
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
        <div className='headerSectionMain'>   
            <div className='logo'>
                <div className='logoImage'>
                    <div><img src={logoImage}  alt="Logo Image" /></div>
                    <p>MERAKI <br /> INNOVATION</p>
                </div>

                <div className='features'>
                    <p>Project Design And Guidance</p>
                    <p>Project Part Suppliers</p>
                    <p>Mechanical & Fabrication Workshop</p>
                </div>

                <div className='HeadingButton'>
                    <h1 className='headingMail'  onClick={email}><CiMail /></h1>
                    <button className='aboutButton'   onClick={openWhatsApp} >Contact Us</button>
                </div>
            </div>
 {/*=============================================================================  */}
           
           

        <div className="searchContainer">
            <Input.Search className='inp-1' type='text' placeholder='Mechaiacal Project'></Input.Search>
            <Input.Search className='inp-2' type='text' placeholder='Electronic Project'></Input.Search>
            <Input.Search className='inp-3' type='text' placeholder='Software Project'></Input.Search>

            <Button className='btn' >Add Your Query</Button>
            
        </div>    

        <div className='headingMeraki'>
            <h1>MERAKI PROJECT</h1><br />
            <h1>DIY / THECNOLOGY / LEARNING</h1>
        </div>
        
        </div>
          


    </>

)
}

export default HeaderSection