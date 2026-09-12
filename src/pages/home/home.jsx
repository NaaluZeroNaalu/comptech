import { useState } from "react";
import heroimage from "./heroimage.png";
import webdevelopement from "./webdevelopement.gif";
import ServicesSection from "../services/Servicesection";

function Home() {
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <>
      <br />
      <br />

      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-start py-4">
              <h3 className="display-4 fw-bold">
                Complete IT Solutions for{" "}
                <span style={{ color: "#ff6200" }}>Your Business</span>
              </h3>

              <p className="lead" style={{ color: "#666" }}>
                We provide innovative solutions for your business needs with
                cutting-edge technology.
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

      {/* Why Choose Us */}
      <section className="why-choose-us-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            Why <span style={{ color: "#ff6200" }}>Choose Us</span>
          </h2>

          <div className="row">
            {[
              {
                title: "Expert Team",
                icon: "fas fa-users",
                desc: "Our skilled professionals bring years of experience to deliver top-notch solutions tailored to your needs.",
              },
              {
                title: "Customer-Centric",
                icon: "fas fa-heart",
                desc: "We prioritize your satisfaction with personalized support and solutions that align with your goals.",
              },
              {
                title: "Cutting-Edge Tech",
                icon: "fas fa-microchip",
                desc: "Stay ahead with our use of the latest technologies and innovative approaches to solve your challenges.",
              },
              {
                title: "Affordable Pricing",
                icon: "fas fa-dollar-sign",
                desc: "High-quality services at competitive rates, ensuring you get the best value for your investment.",
              },
            ].map((reason, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="why-card text-center">
                  <div className="why-icon mb-3">
                    <i className={reason.icon}></i>
                  </div>

                  <h5 className="why-title">{reason.title}</h5>

                  <p
                    className="why-text"
                    style={{ color: "#666" }}
                  >
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Stats */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center">
            {[
              { number: "4+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="stat-box">
                  <h4 style={{ color: "#ff6200" }}>
                    {stat.number}
                  </h4>

                  <p style={{ color: "#666" }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Social Icons */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-3">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/yourcompany"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg
            bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600
            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-110
            ${
              socialOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto delay-[150ms]"
                : "opacity-0 scale-0 translate-y-5 pointer-events-none delay-0"
            }`}
        >
          <i className="fab fa-instagram"></i>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/yourcompany"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg
            bg-[#0077b5]
            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-110
            ${
              socialOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto delay-100"
                : "opacity-0 scale-0 translate-y-5 pointer-events-none delay-0"
            }`}
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg
            bg-[#25d366]
            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-110
            ${
              socialOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto delay-50"
                : "opacity-0 scale-0 translate-y-5 pointer-events-none delay-0"
            }`}
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setSocialOpen(!socialOpen)}
          aria-label="Toggle social links"
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl
            shadow-lg transition-all duration-300 hover:scale-105
            ${socialOpen ? "rotate-180" : "animate-pulse"}`}
          style={{ backgroundColor: "#ff6200" }}
        >
          <i
            className={`fas ${
              socialOpen ? "fa-times" : "fa-share-alt"
            }`}
          ></i>
        </button>
      </div>
    </>
  );
}

export default Home;
