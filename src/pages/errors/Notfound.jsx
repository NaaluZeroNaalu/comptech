import React from 'react';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

function NotFound() {
  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#f9fafb' }}>
      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            
            {/* Animated Icon Container */}
            <div 
              className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle p-4 shadow-sm" 
              style={{ backgroundColor: '#fff0e6' }}
            >
              <AlertCircle size={56} color="#ff6200" />
            </div>

            {/* 404 Big Heading */}
            <h1 className="fw-bold mb-2" style={{ color: '#ff6200', fontSize: '5.5rem', lineHeight: '1' }}>
              404
            </h1>

            {/* Title */}
            <h2 className="fw-bold mb-3" style={{ color: '#1f2937' }}>
              Page Not Found
            </h2>

            {/* Description */}
            {/* <p className="text-muted mb-4 fs-6" style={{ maxWidth: '450px', margin: '0 auto', lineHeight: '1.6' }}>
              Oops! நீங்கள் தேடும் பக்கம் உருவாக்கப்படவில்லை அல்லது வேறு முகவரிக்கு மாற்றப்பட்டிருக்கலாம்.
            </p> */}

            {/* Action Buttons */}
            <div className="d-flex flex-sm-row flex-column justify-content-center gap-3 mt-4">
              <button 
                onClick={() => window.history.back()} 
                className="btn px-4 py-2.5 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2 bg-white border shadow-sm"
                style={{ color: '#4b5563', borderColor: '#e5e7eb' }}
              >
                <ArrowLeft size={18} /> Go Back
              </button>

              <a 
                href="/" 
                className="btn px-4 py-2.5 text-white rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2 shadow-sm"
                style={{ backgroundColor: '#ff6200', border: 'none', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e65800'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff6200'}
              >
                <Home size={18} /> Back to Home
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;