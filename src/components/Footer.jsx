import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'; 

import './CSS/Footer.css'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container my-5 pt-5">
            <div className="row">
                <div className="col-md-4 col-12">
                    <img src={Logo} alt="" className='Logo'/>
                     <h2>Students Aid</h2>
                      <p>Every student's go-to online study companion.</p>
                </div>
                <div className="col-md-4 col-12">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="Home" className="quick-link">Home</a></li>
                        <li><a href="About" className="quick-link">About</a></li>
                        <li><a href="Topic" className="quick-link">Topic</a></li>
                        <li><a href="Contact" className="quick-link">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h2>Contact Us</h2>
                    <p><FontAwesomeIcon icon={faEnvelope} className='footer-icon'/>abdurrazaqsafiyyah@gmail.com</p>
                     <p><FontAwesomeIcon icon={faPhone} className='footer-icon'/> +234 904 684 1241</p>
                    <h4>Follow us</h4>
                    <div className='socials'>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} className='social-link'/></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} className='social-link'/></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} className='social-link'/></a>
                    <a href="#"><FontAwesomeIcon icon={faSquareInstagram} className='social-link'/></a>
                    </div>
                    
                  
                        
                </div>
            </div>
        </div>
         <hr />
          <p id='footer-text'>&copy; 2025 StudentAid. All right reserved.</p>
         

    </div>
  )
}

export default Footer