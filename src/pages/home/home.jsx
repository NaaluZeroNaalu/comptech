import heroimage from "./heroimage.png"
import webdevelopement from "./webdevelopement.gif"
import security from "./security.gif"
import webhosting from "./webhosting.gif"
import seo from "./seo.gif"
import more from "./more.gif"


function Home(){

    return(
        <>
        <br /><br />
        <section className="hero-section py-5">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-md-6 text-start py-4">
        <h3 className="display-4 fw-bold">
          Welcome to <span style={{ color: '#ff6200' }}>ComptechHeal <br />Technologies</span>
        </h3>
        <p className="lead" style={{ color: '#666' }}>
          We provide innovative solutions for your business needs with cutting-edge technology.
        </p>
     
      </div>
      <div className="col-md-6 text-center">
        <img 
          src={heroimage} 
          alt="Hero" 
          className="img-fluid rounded"
        />
      </div>
    </div>
  </div>
</section>


      <section className="why-choose-us-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            Why <span style={{ color: '#ff6200' }}>Choose Us</span>
          </h2>
          <div className="row">
            {[
              {
                title: 'Expert Team',
                icon: webdevelopement,
                desc: 'Our skilled professionals bring years of experience to deliver top-notch solutions tailored to your needs.'
              },
              {
                title: 'Customer-Centric',
                icon: 'fas fa-heart',
                desc: 'We prioritize your satisfaction with personalized support and solutions that align with your goals.'
              },
              {
                title: 'Cutting-Edge Tech',
                icon: 'fas fa-microchip',
                desc: 'Stay ahead with our use of the latest technologies and innovative approaches to solve your challenges.'
              },
              {
                title: 'Affordable Pricing',
                icon: 'fas fa-dollar-sign',
                desc: 'High-quality services at competitive rates, ensuring you get the best value for your investment.'
              }
            ].map((reason, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="why-card text-center">
                  <div className="why-icon mb-3">
                    <i className={reason.icon}></i>
                  </div>
                  <h5 className="why-title">{reason.title}</h5>
                  <p className="why-text" style={{ color: '#666' }}>
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            Discover our <span style={{ color: '#ff6200' }}>Solutions</span>
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
              },
              {
                title: 'Explore More',
                icon: more,
                h:250,
                w:200,
                desc: 'Discover additional services like digital marketing, app development, and IT consulting to take your business to the next level.'
              }
            ].map((solution, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      {/* <i className={solution.icon}></i> */}
                    <img src={solution.icon} height={solution.h} width={solution.w} alt="" />
                    </div>
                    <a href="#" className="card-title btn ">{solution.title}</a>
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

      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center">
            {[
              { number: '4+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
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
        </>
    )
}

export default Home;