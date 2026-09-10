import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react'; // Removed unused ArrowRight
import servicesData from './servicesData.json';
import webdevelopement from "./webdevelopement.gif";
import security from "./security.gif";
import webhosting from "./webhosting.gif";
import seo from "./seo.gif";
 
const iconMap = {
  webdevelopement,
  security,
  webhosting,
  seo
};

function ServicesSection() {
  // Track by ID instead of index for better React stability
  const [hoveredCardId, setHoveredCardId] = useState(null);
 
  return (
    <section style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#333',
          }}>
            Discover our{' '}
            <span style={{ color: '#ff6200' }}>Solutions</span>
          </h2>
          <p style={{
            color: '#666',
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Explore our comprehensive suite of technology solutions
          </p>
        </div>
 
        {/* Services Grid */}
        <div className="row g-4" style={{ marginBottom: '40px' }}>
          {servicesData.services.map((solution) => (
            <div className="col-md-6 col-lg-3" key={solution.id}>
              {/* Card Container */}
              <div
                style={{
                  position: 'relative',
                  height: '300px',
                  cursor: 'pointer',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.4s ease',
                  // Fixed duplicate box-shadow issue
                  boxShadow: hoveredCardId === solution.id
                    ? '0 20px 40px rgba(255, 98, 0, 0.2)'
                    : '0 8px 16px rgba(0, 0, 0, 0.08)',
                }}
                onMouseEnter={() => setHoveredCardId(solution.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                {/* Image Background */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    zIndex: 1,
                  }}
                >
                  <img
                    src={iconMap[solution.icon]}
                    alt={solution.title}
                    style={{
                      maxHeight: '200px',
                      maxWidth: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      transition: 'all 0.4s ease',
                      transform: hoveredCardId === solution.id ? 'scale(0.85) translateY(-20px)' : 'scale(1) translateY(0)',
                    }}
                  />
                </div>
 
                {/* Header with Title - Always Visible */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '60px',
                    background: 'linear-gradient(135deg, #ff6200 0%, #ff8533 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    justifyContent: 'space-between',
                    zIndex: 3,
                  }}
                >
                  <h3 style={{
                    margin: 0,
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                  }}>
                    {solution.title}
                  </h3>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                  }}>
                    0{solution.id}
                  </span>
                </div>
 
                {/* Reveal Box - Slides Up on Hover */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    background: 'white',
                    padding: '24px',
                    borderTop: '2px solid rgba(255, 98, 0, 0.1)',
                    zIndex: 2,
                    // FIX: Increased height from 220px to 260px to fit the button
                    height: hoveredCardId === solution.id ? '260px' : '60px', 
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 -8px 20px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Title for reveal box */}
                  <h5
                    style={{
                      margin: '0 0 12px 0',
                      color: '#333',
                      fontSize: '1rem',
                      fontWeight: '700',
                      transition: 'all 0.3s ease',
                      opacity: hoveredCardId === solution.id ? 1 : 0,
                    }}
                  >
                    {solution.title}
                  </h5>
 
                  {/* Description - Only Visible on Hover */}
                  <div
                    style={{
                      overflow: 'hidden',
                      // FIX: Increased maxHeight from 100px to 150px
                      maxHeight: hoveredCardId === solution.id ? '150px' : '0', 
                      opacity: hoveredCardId === solution.id ? 1 : 0,
                      transition: 'all 0.4s ease 0.1s',
                    }}
                  >
                    <p
                      style={{
                        color: '#666',
                        fontSize: '0.85rem',
                        lineHeight: '1.5',
                        marginBottom: '16px',
                      }}
                    >
                      {solution.shortDesc}
                    </p>
 
                    {/* Know More Button */}
                    <a
                      href={`/Services-we-provide`}
                      onClick={()=>{
                        sessionStorage.setItem("service",solution.id)
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: '#ff6200',
                        color: 'white',
                        padding: '10px 18px', 
                        borderRadius: '8px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.9rem',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#ff5000';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ff6200';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      Know More
                      <ChevronRight size={16} />
                    </a>
                  </div>
                </div>              
                </div>
            </div>
          ))}
        </div>
 
        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          paddingTop: '40px',
        }}>
          <h3 style={{
            color: '#333',
            fontSize: '1.5rem',
            marginBottom: '20px',
            fontWeight: 'bold',
          }}>
            Need More Information?
          </h3>
          <p style={{
            color: '#666',
            fontSize: '1rem',
            marginBottom: '30px',
          }}>
            Let's discuss which solution works best for your business
          </p>
          <a
            href="/Connect-with-us"
            style={{
              display: 'inline-block',
              backgroundColor: '#ff6200',
              color: 'white',
              padding: '14px 40px',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ff5000';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(255, 98, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ff6200';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;