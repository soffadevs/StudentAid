import React from 'react'
import NavbarPage from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './contact.css'
import './Contact.css'

const Contact = () => {
  return (
    <div>
     <NavbarPage />
       <section class="py-5" className='Header'>
        <div class="container">
          <h1 class="contact-title">Contact Us</h1>
          <p class="contact-subtitle">Have questions or suggestions? We'd love to hear from you!</p>
        </div>
       </section>

       <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center mb-3">
            <h4>Get in touch with us</h4>
          </div>

          <div className="col-md-6 col-12 mb-3">
            <div className="card shadow p-5 h-100">
              <div className="card-body text-center">
                <h5 className="card-title mb-3"> 
                  <FontAwesomeIcon icon={faEnvelope} className='icon'/> Email
                </h5>
                <h5 className="card-text" style={{color: 'blue'}}>abdurrazaqsafiyyah@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card shadow p-5 h-100">
              <div className="card-body text-center">
                <h5 className="card-title mb-3"> 
                  <FontAwesomeIcon icon={faPhone} className='icon'/> Phone
                </h5>
                <h5 className="card-text" style={{color: 'blue'}}>+234 904 684 1241</h5>
              </div>
            </div>
          </div>
        </div>
       </div>

          <Footer/>

    </div>
  )
}

export default Contact