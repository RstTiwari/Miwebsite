import React from 'react';
import './About.css'; // Import the CSS file

function About(){

    return(
        <div className='maine'>
            {/* <div className='hole-footer'> */}
        <footer className="footer-section">
        <div className="about-section">
                <div className='about-meraki' >
                <h3 className='heading'>About MERAKI PROJECT</h3>
                    <p className='para'>In 2023 MERAKI PROJECT launched an initiative <br /> maraki innovation increases rapidly by <br />his research in technology. MERAKI PROJECT works <br /> Toward research besed  MACHANICAL/ELECTRONICS/SOFTWARE development,<br /> System for <br />research and development purpose</p>
                    
                </div>
           </div>

           <div className='footer-section-2'>
            <h2 className='important-link'>IMPORTANT LINK</h2>
            <ul>
                <div  className='links'>
                    <li><a href="#">TERMS & CONDITIONS</a></li> 
                    <li><a href="#">PRIVACY POLICY</a></li>
                    <li><a href="#">SHIPPING & RETURN POLICY</a></li>
                </div>
            </ul>
            </div>
            </footer>

            <hr />

            <div className='last-section'>
            <div>
                <h2>Contact Us</h2>
               <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;
               <span>+91 8928772801</span><br /> 
               <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;
               <span>+91 5830341117</span><br />
               <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;
               <span>+91 8767948130</span>
            </div><br /><br />

            <div>
            <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;
            <a href="#">sales@merakiinnovation.com</a>
            </div><br /><br />
           
           <div>
           
           <i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;  
                A-10 Maa Sharda Indrustrial,<br /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nagar Gorai Pada <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indrustrial Estate, Vasai(E) 401208 <br />
           </div>
            </div>
        </div>
    )
}

export default About


