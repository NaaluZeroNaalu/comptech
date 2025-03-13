import { useState } from 'react'

function Header(){

    
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);


    return(

        <>
        <nav className="navbar fixed-top  navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid d-flex justify-content-between">
        {/* Logo */}
        <a className="navbar-brand text-dark" href="/">Comptech</a>

        {/* Toggler button for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={isNavOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Center the links */}
            <li className="nav-item mx-3">
              <a className="nav-link active text-dark" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark" href="/About-us">About</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark" href="/services">Services</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark" href="/Connect-with-us">Contact</a>
            </li>
          </ul>
        </div>

        {/* Login button */}
        <button className="btn btn-outline-dark ms-auto" type="button" onClick={() => alert('Login clicked')}>Login</button>
      </div>
    </nav>
        </>
    )
}

export default Header;