import React, { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  User, 
  Mail, 
  MessageSquare, 
  Send, 
  MapPin, 
  Phone,
  Layout,
  Server,
  Search,
  Lock
} from "lucide-react";

import webdevelopment from "./webdevelopement.gif";
import security from "./security.gif";
import webhosting from "./webhosting.gif";
import seo from "./seo.gif";
import contact from "./contact.png";
import hero from "./hero.jpg";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    gif: webdevelopment,
    icon: <Layout className="text-warning" size={24} />,
    shortDesc: "Custom-built, responsive websites tailored to your business needs, ensuring a seamless user experience across all devices.",
    whatWeDo: "We create modern, scalable, and user-friendly websites that are designed to convert visitors into customers. Our expert team builds websites using the latest technologies and best practices, ensuring your online presence stands out from the competition.",
    whatWeOffer: [
      { feature: "Responsive Design", description: "Websites that look perfect and function flawlessly on all devices - desktop, tablet, and mobile." },
      { feature: "Custom Development", description: "Tailored solutions built from scratch to match your unique business requirements and brand identity." },
      { feature: "E-Commerce Solutions", description: "Fully functional online stores with secure payment gateways, inventory management, and order tracking." },
      { feature: "CMS Integration", description: "Easy-to-use content management systems (WordPress, Drupal, custom CMS) for simple website updates." },
      { feature: "API Development", description: "Robust APIs for seamless integration with third-party services and applications." },
      { feature: "Performance Optimization", description: "Fast-loading websites with optimized code, images, and caching for better user experience and SEO." }
    ]
  },
  {
    id: 2,
    title: "Web Hosting",
    gif: webhosting,
    icon: <Server className="text-warning" size={24} />,
    shortDesc: "Reliable, high-speed hosting solutions with 99.9% uptime, secure servers, and 24/7 support to keep your site running smoothly.",
    whatWeDo: "We provide enterprise-grade hosting infrastructure that ensures your website is always online, fast, and secure. Our hosting solutions are designed to handle traffic spikes, protect against cyber threats, and deliver lightning-fast load times.",
    whatWeOffer: [
      { feature: "99.9% Uptime Guarantee", description: "SLA-backed guarantee ensuring your website is always accessible to your customers." },
      { feature: "SSL Certificates", description: "Free SSL certificates for encrypted connections and secure data transmission protecting customer information." },
      { feature: "Automatic Backups", description: "Daily automated backups with easy restoration options to protect against data loss." },
      { feature: "DDoS Protection", description: "Advanced protection against distributed denial-of-service attacks to keep your website secure." },
      { feature: "Scalable Resources", description: "Flexible hosting plans that grow with your business - easily upgrade as your traffic increases." },
      { feature: "24/7 Technical Support", description: "Expert support team available round-the-clock to resolve issues and optimize your hosting." }
    ]
  },
  {
    id: 3,
    title: "SEO Optimization",
    gif: seo,
    icon: <Search className="text-warning" size={24} />,
    shortDesc: "Boost your online visibility with expert search engine optimization, driving organic traffic and improving search rankings.",
    whatWeDo: "Our SEO experts optimize your website to rank higher in search engine results, driving targeted organic traffic to your business. We use proven strategies and latest SEO techniques to ensure sustainable growth in visibility and conversions.",
    whatWeOffer: [
      { feature: "Keyword Research & Strategy", description: "In-depth analysis to identify high-value keywords that your target audience is searching for." },
      { feature: "On-Page Optimization", description: "Optimization of meta tags, headings, content, and structure for better search engine visibility." },
      { feature: "Technical SEO", description: "Fixing crawlability issues, improving site speed, mobile optimization, and structured data markup." },
      { feature: "Link Building", description: "Strategic backlink acquisition from authoritative websites to boost your domain authority." },
      { feature: "Content Strategy", description: "Creation of high-quality, SEO-optimized content that engages users and ranks well in search results." },
      { feature: "Local SEO", description: "Google My Business optimization and local citation building for better local search visibility." }
    ]
  },
  {
    id: 4,
    title: "Cyber Security",
    gif: security,
    icon: <Lock className="text-warning" size={24} />,
    shortDesc: "Protect your digital assets with advanced security measures, including threat detection, data encryption, and regular audits.",
    whatWeDo: "We provide comprehensive cybersecurity solutions to protect your business from evolving digital threats. Our team implements multi-layered security strategies, monitors for threats 24/7, and ensures your sensitive data remains protected.",
    whatWeOffer: [
      { feature: "Threat Detection & Response", description: "Real-time monitoring and immediate response to detect and mitigate security threats before they cause damage." },
      { feature: "Data Encryption", description: "Enterprise-grade encryption for data in transit and at rest to protect sensitive information." },
      { feature: "Firewall Management", description: "Advanced firewalls and network security configurations to control and monitor traffic." },
      { feature: "Security Audits", description: "Comprehensive vulnerability assessments and penetration testing to identify and fix security weaknesses." },
      { feature: "Employee Training", description: "Security awareness programs to educate your team about phishing, malware, and best practices." },
      { feature: "Compliance Management", description: "Assistance with GDPR, CCPA, PCI-DSS, and other regulatory compliance requirements." }
    ]
  }
];

function Service() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  useEffect(() => {
    // Session storage-ல் இருந்து 'service' ID எடுப்பது
    const storedId = sessionStorage.getItem("service");
    if (storedId) {
      const found = servicesData.find((s) => s.id === Number(storedId));
      if (found) {
        setSelectedService(found);
      }
    }
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    sessionStorage.setItem("service", service.id);
  };

  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      {/* Dynamic Service Banner */}
      <section className="py-5" style={{ background: "linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)" }}>
        <div className="container py-4">
          
          {/* Quick Service Switcher Tabs */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-5" style={{paddingTop:"50px"}}>
            {servicesData.map((s) => (
              <button
                key={s.id}
                onClick={() => handleServiceSelect(s)}
                className={`btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-semibold transition-all ${
                  selectedService.id === s.id
                    ? "btn-dark shadow-sm"
                    : "btn-outline-secondary border-0 bg-white shadow-sm"
                }`}
                style={{
                  backgroundColor: selectedService.id === s.id ? "#ff6200" : "#fff",
                  borderColor: selectedService.id === s.id ? "#ff6200" : "transparent",
                  color: selectedService.id === s.id ? "#fff" : "#4b5563"
                }}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Hero Content for Selected Service */}
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-start">
              <span 
                className="badge px-3 py-2 rounded-pill mb-3 d-inline-flex align-items-center gap-2" 
                style={{ backgroundColor: "#fff0e6", color: "#ff6200", fontWeight: "600" }}
              >
                <Sparkles size={16} /> Premium Service
              </span>
              <h1 className="display-4 fw-bold mb-3" style={{ color: "#111827" }}>
                {selectedService.title} <span style={{ color: "#ff6200" }}>Solutions</span>
              </h1>
              <p className="lead text-muted mb-4" style={{ lineHeight: "1.7" }}>
                {selectedService.shortDesc}
              </p>
              <a 
                href="#contact" 
                className="btn px-4 py-3 rounded-3 text-white fw-bold d-inline-flex align-items-center gap-2 shadow-sm"
                style={{ backgroundColor: "#ff6200" }}
              >
                Get Started Now <ArrowRight size={18} />
              </a>
            </div>

            <div className="col-lg-6 text-center">
              <div 
                className="p-4 rounded-4 shadow-sm bg-white border d-inline-block"
                style={{ borderColor: "#ffe6d5" }}
              >
                <img
                  src={selectedService.gif}
                  alt={selectedService.title}
                  className="img-fluid rounded-3"
                  style={{ maxHeight: "320px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container py-3">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h2 className="fw-bold mb-3" style={{ color: "#111827" }}>
                What We <span style={{ color: "#ff6200" }}>Do?</span>
              </h2>
              <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                {selectedService.whatWeDo}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Grid */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#111827" }}>
              What We <span style={{ color: "#ff6200" }}>Offer</span>
            </h2>
            <p className="text-muted">Key features included with our {selectedService.title} service</p>
          </div>

          <div className="row g-4">
            {selectedService.whatWeOffer.map((offer, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div 
                  className="p-4 rounded-4 h-100 bg-white border shadow-sm transition-all"
                  style={{ 
                    borderColor: "#f3f4f6", 
                    transition: "transform 0.3s ease, box-shadow 0.3s ease" 
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 98, 0, 0.08)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="p-2 rounded-circle" style={{ backgroundColor: "#fff0e6" }}>
                      <CheckCircle2 color="#ff6200" size={22} />
                    </div>
                    <h5 className="fw-bold mb-0" style={{ color: "#111827", fontSize: "1.1rem" }}>
                      {offer.feature}
                    </h5>
                  </div>
                  <p className="text-muted mb-0 small" style={{ lineHeight: "1.6" }}>
                    {offer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container py-4">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#1f2937" }}>
            Contact <span style={{ color: "#ff6200" }}>Us</span>
          </h2>

          <div className="row g-5 align-items-center">
            {/* Form */}
            <div className="col-lg-6">
              <div className="p-4 p-md-5 rounded-4 shadow-sm bg-white" style={{ borderTop: "4px solid #ff6200" }}>
                <h4 className="fw-bold mb-4" style={{ color: "#1f2937" }}>
                  Get In Touch For {selectedService.title}
                </h4>
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-secondary d-flex align-items-center gap-2">
                      <User size={16} color="#ff6200" /> Name
                    </label>
                    <input type="text" className="form-control bg-light border-0 py-2" placeholder="Your Name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-secondary d-flex align-items-center gap-2">
                      <Mail size={16} color="#ff6200" /> Email
                    </label>
                    <input type="email" className="form-control bg-light border-0 py-2" placeholder="Your Email" required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-semibold text-secondary d-flex align-items-center gap-2">
                      <MessageSquare size={16} color="#ff6200" /> Message
                    </label>
                    <textarea className="form-control bg-light border-0 py-2" rows="4" placeholder={`Ask about ${selectedService.title}...`} required></textarea>
                  </div>
                  <button type="submit" className="btn w-100 py-3 text-white fw-bold d-flex align-items-center justify-content-center gap-2 rounded-3" style={{ backgroundColor: "#ff6200" }}>
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* Info & Map */}
            <div className="col-lg-6">
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-center gap-3 p-3 rounded-4 shadow-sm bg-white" style={{ borderLeft: "3px solid #ff6200" }}>
                  <div className="p-3 rounded-circle" style={{ backgroundColor: "#fff0e6" }}>
                    <MapPin color="#ff6200" size={22} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Our Location</h6>
                    <p className="mb-0 text-muted small">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 p-3 rounded-4 shadow-sm bg-white" style={{ borderLeft: "3px solid #ff6200" }}>
                  <div className="p-3 rounded-circle" style={{ backgroundColor: "#fff0e6" }}>
                    <Phone color="#ff6200" size={22} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Call Us</h6>
                    <p className="mb-0 text-muted small">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="rounded-4 overflow-hidden shadow-sm">
                <img src={contact} alt="Contact Map" className="img-fluid w-100" style={{ height: "240px", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;