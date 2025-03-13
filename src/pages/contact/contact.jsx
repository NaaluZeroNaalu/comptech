import contact from "./contact.png"

function Contact(){

    return(
        <>
        <br /><br />
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
                  <button type="submit" className="btn w-100" style={{backgroundColor:"orange"}}>Send Message</button>
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

export default Contact;