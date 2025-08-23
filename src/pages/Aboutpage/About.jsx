import NavbarPage from '../../components/Navbar'
import Footer from '../../components/Footer'
import './About.css'

const About = () => {
  return (
    <div>

      <NavbarPage />

      <main className='Header'>
        <h1 className='about-header'>ABOUT US</h1>
        <p className='about-subtitle'>A platform dedicated to helping students by providing clear and concise
          summaries of complex topics. Our goal is to make learning more easy to understand</p>
      </main>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-12 col-lg-4  mb-3">
            <div className="about-card p-5 h-100 text-center">
              <div className="card-body">
                <h5 className="about-card-title">Our Mission</h5>
                <p className="card-text">Student Aid helps students simplify complex topics with clear explanations and examples.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 col-lg-4 mb-3">
            <div className="about-card p-5 h-100 text-center">
              <div className="card-body">
                <h5 className="about-card-title">Our Approach</h5>
                <p className="card-text">Through short summaries, detailed notes, and videos</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 col-lg-4 mb-3">
            <div className="about-card p-5 h-100 text-center">
              <div className="card-body">
                <h5 className="about-card-title">Our Vision</h5>
                <p className="card-text">To become every student's go-to online study companion</p>
              </div>
            </div>
          </div>
        </div>
      </div>



<Footer/>
    </div>
  )
}

export default About