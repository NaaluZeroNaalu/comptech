import webdevelopement from "./webdevelopement.gif"
import security from "./security.gif"
import webhosting from "./webhosting.gif"
import seo from "./seo.gif"
import hero from "./hero.jpg"


function Service(){

    return(

        <>
        <br /><br />
        <section className="intro-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-start py-4">
              <h1 className="display-4 fw-bold">
                Explore Our <span style={{ color: '#ff6200' }}>Services</span>
              </h1>
              <p className="lead" style={{ color: '#666' }}>
                At ComptechHeal, we offer a comprehensive suite of technology solutions designed to elevate your business, 
                streamline operations, and secure your digital presence.
              </p>
              <button className="btn custom-btn-orange">Learn More</button>
            </div>
            <div className="col-md-6">
              <img
                src={hero}
                alt="Services Intro"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="provide-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            Why Choose<span style={{ color: '#ff6200' }}>Us</span>
          </h2>
          <div className="row">
            {[
              {
                title: 'Tailored Solutions',
                desc: 'Customized services to fit your unique business needs and goals.',
                icon: 'fas fa-tools',
              },
              {
                title: '24/7 Support',
                desc: 'Round-the-clock assistance to ensure your operations run smoothly.',
                icon: 'fas fa-headset',
              },
              {
                title: 'Scalable Growth',
                desc: 'Solutions that grow with your business, from startups to enterprises.',
                icon: 'fas fa-chart-line',
              },
            ].map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="provide-card text-center p-4">
                  <div className="provide-icon mb-3">
                    <i className={item.icon}></i>
                  </div>
                  <h5 style={{ color: '#333' }}>{item.title}</h5>
                  <p style={{ color: '#666' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
            <section className="solutions-section py-5">
              <div className="container">
                <h2 className="text-center mb-5">
                  What we <span style={{ color: '#ff6200' }}>Do?</span>
                </h2>
                <div className="row">
                  {[
                    {
                      title: 'Web Development',
                      icon: webdevelopement,
                      h:200,
                      w:300,
                      desc: 'Custom-built, responsive websites tailored to your business needs, ensuring a seamless user experience across all devices.'
                    },
                    {
                      title: 'Web Hosting',
                      icon: webhosting,
                      h:200,
                      w:200,
                      desc: 'Reliable, high-speed hosting solutions with 99.9% uptime, secure servers, and 24/7 support to keep your site running smoothly.'
                    },
                    {
                      title: 'SEO',
                      icon: seo,
                      h:200,
                      w:200,
                      desc: 'Boost your online visibility with expert search engine optimization, driving organic traffic and improving search rankings.'
                    },
                    {
                      title: 'Cyber Security',
                      icon: security,
                      h:210,
                      w:400,
                      desc: 'Protect your digital assets with advanced security measures, including threat detection, data encryption, and regular audits.'
                    }
                  ].map((solution, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                      <div className="card h-100">
                        <div className="card-body text-center">
                          <div className="mb-3">
                            {/* <i className={solution.icon}></i> */}
                          <img src={solution.icon} height={solution.h} width={solution.w} alt="" />
                          </div>
                          <h1 className="card-title btn ">{solution.title}</h1>
                          <p className="card-text" style={{ color: '#666' }}>
                            {solution.desc}
                          </p>
                        </div>
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
                          src=""
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

export default Service;