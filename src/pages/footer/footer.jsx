
function Footer(){

    return(
        <>
        
      <footer className="footer py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 style={{ color: '#ff6200' }}>Comptech</h5>
              <p style={{ color: '#666' }}>
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
            <div className="col-md-4">
              <h5 style={{ color: '#ff6200' }}>Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/About-us" className="footer-link">About</a></li>
                <li><a href="/Connect-with-us" className="footer-link">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 style={{ color: '#ff6200' }}>Contact</h5>
              <p style={{ color: '#666' }}>
                Email: comptechheal@gmail.com<br />
                {/* Phone: (123) 456-7890 */}
              </p>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer;