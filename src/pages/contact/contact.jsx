import React from 'react';
import { User, Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';
import contact from "./contact.png";

function Contact() {
  return (
    <section className="contact-section py-5" style={{ backgroundColor: '#f9fafb' }}>
      <div className="container">
        {/* Header */}
        <h1 className="text-center mb-5" style={{ fontWeight: '800', color: '#1f2937', paddingTop:'100px' }}>
          Contact <span style={{ color: '#ff6200' }}>Us</span>
        </h1>

        <div className="row g-5 align-items-center">
          {/* Left Side: Contact Form */}
          <div className="col-lg-6">
            <div 
              className="contact-form p-4 p-md-5 rounded-4 shadow-sm bg-white" 
              style={{ borderTop: '4px solid #ff6200' }}
            >
              <h3 className="mb-4" style={{ color: '#1f2937', fontWeight: '700' }}>
                Get in Touch
              </h3>
              
              <form>
                {/* Name Input */}
                <div className="mb-4">
                  <label htmlFor="name" className="form-label d-flex align-items-center gap-2" style={{ color: '#4b5563', fontWeight: '600' }}>
                    <User size={18} color="#ff6200" /> Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light border-0"
                    id="name"
                    placeholder="Enter your name"
                    required
                    style={{ fontSize: '0.95rem' }}
                  />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label d-flex align-items-center gap-2" style={{ color: '#4b5563', fontWeight: '600' }}>
                    <Mail size={18} color="#ff6200" /> Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light border-0"
                    id="email"
                    placeholder="Enter your email"
                    required
                    style={{ fontSize: '0.95rem' }}
                  />
                </div>

                {/* Message Input */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label d-flex align-items-center gap-2" style={{ color: '#4b5563', fontWeight: '600' }}>
                    <MessageSquare size={18} color="#ff6200" /> Message
                  </label>
                  <textarea
                    className="form-control bg-light border-0"
                    id="message"
                    rows="4"
                    placeholder="How can we help you?"
                    required
                    style={{ fontSize: '0.95rem', resize: 'none' }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn w-100 py-3 text-white fw-bold d-flex align-items-center justify-content-center gap-2 rounded-3 shadow-sm" 
                  style={{ backgroundColor: '#ff6200', transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e65800'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff6200'}
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Contact Info & Image */}
          <div className="col-lg-6">
            <div className="contact-info ps-lg-3">
              
              {/* Info Cards */}
              <div className="d-flex flex-column gap-3 mb-4">
                {/* Location */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-4 shadow-sm bg-white" style={{ borderLeft: '3px solid #ff6200' }}>
                  <div className="p-3 rounded-circle" style={{ backgroundColor: '#fff0e6' }}>
                    <MapPin color="#ff6200" size={24} />
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold" style={{ color: '#1f2937' }}>Our Location</h6>
                    <p className="mb-0 text-muted small">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-4 shadow-sm bg-white" style={{ borderLeft: '3px solid #ff6200' }}>
                  <div className="p-3 rounded-circle" style={{ backgroundColor: '#fff0e6' }}>
                    <Phone color="#ff6200" size={24} />
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold" style={{ color: '#1f2937' }}>Call Us</h6>
                    <p className="mb-0 text-muted small">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              {/* Map/Image Placeholder */}
              <div className="map-placeholder mt-4 rounded-4 overflow-hidden shadow-sm">
                <img
                  src={contact}
                  alt="Contact map"
                  className="img-fluid w-100"
                  style={{ 
                    objectFit: 'cover', 
                    height: '280px',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;