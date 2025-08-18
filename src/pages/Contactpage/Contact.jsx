import React from 'react'
import NavbarPage from '../../components/Navbar'
import './contact.css'

const Contact = () => {
  return (
    <div>
        <NavbarPage/>

  <section class="py-5" className='Header'>
  <div class="container">
    <h1 class="contact-title">Contact Us</h1>
    <p class="contact-subtitle">Have questions or suggestions? We'd love to hear from you!</p>
  </div>
  </section>

  <div className="container my-5">
            <div className="row">
              <div className="col-md-12 text-center mb-3">
                <h4>Get in touch</h4>
              </div>
              
                      <div className="col-md-6 col-12  mb-3">
                        <div className="card  shadow p-5">
                          <div className="card-body">
                            <h5 className="card-title">Email</h5>
                            <p className="card-text">abdurrazaqsafiyyah@gmail.com</p>
                            <p>send us mail</p>
                    
                          </div>
                        </div>
                      </div>

                    <div className="col-md-6 col-12 mb-3">
                      <div className="card  shadow p-5">
                        <div className="card-body">
                            <h5 className="card-title">Phone</h5>
                            <p className="card-text">+234 904 684 1241</p>
                            <p>Call us</p>
                          
                          </div>
                        </div>
                    </div>
            </div>
     </div>       



    </div>
  )
}

export default Contact