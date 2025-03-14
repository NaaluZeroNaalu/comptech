import { useState } from 'react'
import logo from "./logo.png"

function Header(){

    
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);


    return(

        <>
       
       <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="ComptechHeal Logo" height="50" className="d-inline-block align-text-top" />
        </a>

        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link text-dark " href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/About-us">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/Services-we-provide">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/Connect-with-us">Contact</a>
            </li>
          </ul>
          {/* Login button */}
         
        </div>
      </div>
    </nav>
    <br /><br />
        </>
    )
}

export default Header;