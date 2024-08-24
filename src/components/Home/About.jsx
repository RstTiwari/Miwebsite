import React from 'react';
import './About.css'; // Import the CSS file
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Updated imports
import { MdEmail } from 'react-icons/md';

function About() {
    return (
        <div className='maineee'>
            {/* <div className='hole-footer'> */}
            <footer className="footer-section">
                    <div className='about-meraki'>
                        <h3 className='heading'>About MERAKI PROJECT</h3>
                        <p className='para'>
                            In 2023 MERAKI PROJECT launched an initiative <br />
                            Maraki Innovation increases rapidly by <br />
                            its research in technology. MERAKI PROJECT works <br />
                            Toward research based MECHANICAL/ELECTRONICS/SOFTWARE development, <br />
                            System for <br />
                            research and development purpose
                        </p>
                    </div>

                <div className='footer-section-2'>
                    <h2 className='important-link'>IMPORTANT LINK</h2>
                    <ul>
                        <div className='links'>
                            <li><a href="#">TERMS & CONDITIONS</a></li>
                            <li><a href="#">PRIVACY POLICY</a></li>
                            <li><a href="#">SHIPPING & RETURN POLICY</a></li>
                            <li><a href="#">WARRANTY</a></li>
                        </div>
                    </ul>
                </div>
            </footer>

            <div className='last-section'>
                <div>
                    <div className='contact'>
                        <div className='contactLogo'>
                            {/* <h1><FaPhoneAlt /></h1> */}
                        </div>

                        <div>
                            <h2>Contact Us</h2>
                            <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;
                            <span>+91 8928772801</span><br />
                            <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;
                            <span>+91 5830341117</span><br />
                            <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;
                            <span>+91 8767948130</span>
                        </div>
                    </div>
                </div><br /><br />

                <div className='mail'>
                    <div className='mailLogo'><MdEmail /></div>
                    <div><a href="#">sales@merakiinnovation.com</a></div>
                </div><br /><br />

                <div className='address'>
                    <div className='addressLogo'>
                        <FaMapMarkerAlt />
                    </div>
                    <div>
                        A-10 Maa Sharda Industrial,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nagar Gorai Pada <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Industrial Estate, Vasai(E) 401208 <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
