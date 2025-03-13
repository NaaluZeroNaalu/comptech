import heroimage from "./heroimage.png"
import ourmission from "./mission.png"
import whoweare from "./whoweare.png"
import contact from "./contact.png"

function Aboutus(){

    return(
        <>
<br /><br />
<section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-start py-4">
              <h1 className="display-4 fw-bold">
                Who is <span style={{ color: '#ff6200' }}>ComptechHeal</span>
              </h1>
              <p className="lead" style={{ color: '#666' }}>
                At ComptechHeal, we’re a team of innovators dedicated to healing your business’s tech challenges with cutting-edge solutions and unparalleled expertise.
              </p>
              <button className="btn" style={{backgroundColor:"orange"}}>Connect with us</button>
            </div>
            <div className="col-md-6">
              <img
                src={heroimage}
                alt="ComptechHeal Team"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-details-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <img
                src={ourmission}
                alt="Our Work"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h3 className="mt-4 mb-3" style={{ color: '#333' }}>Our Mission</h3>
              <p style={{ color: '#666' }}>
                To deliver innovative, reliable, and affordable technology solutions that drive growth, enhance security, and provide exceptional value, 
                all while maintaining a customer-first approach.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-details-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
            <h3 className="mb-3" style={{ color: '#333' }}>Who We Are</h3>
              <p style={{ color: '#666' }}>
                At ComptechHeal, we’re a team of innovators dedicated to empowering businesses with cutting-edge digital solutions. 
                Since our founding, we’ve helped countless clients achieve their goals through expert web development, hosting, SEO, and security services.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <img
                src={whoweare}
                alt="Our Work"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section py-5">
        <div className="container">

        <h3 className="mb-3 text-center" style={{ color: '#333' }}>Why Choose us</h3>
        <br />
          <div className="row text-center">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="stat-box">
                  <h4 style={{ color: '#ff6200' }}>{stat.number}</h4>
                  <p style={{ color: '#666' }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section py-5">
        <div className="container">
          <h1 className="text-center mb-5">
            Contact <span style={{ color: '#ff6200' }}>Us</span>
          </h1>
          <div className="row">
            {/* Contact Form */}
            <div className="col-md-6 mb-4">
              <div className="contact-form p-4 rounded shadow">
                <h3 style={{ color: '#333' }}>Get in Touch</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{ color: '#666' }}>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{ color: '#666' }}>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label" style={{ color: '#666' }}>Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn w-100" style={{backgroundColor:"#ff6200"}}>Send Message</button>
                </form>
              </div>
            </div>

            {/* Contact Info and Map */}
            <div className="col-md-6">
              <div className="contact-info p-4">
               
                <div className="map-placeholder mt-4">
                  <img
                    src={contact}
                    alt="Map"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Aboutus;