import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerTop">
          <div className="footerSection">
            <h3>OA Realty</h3>
            <p>Your trusted partner in finding the perfect home in Ghana.</p>
            <div className="logo">
              <img src="/logo.png" alt="OA Realty" />
            </div>
          </div>

          <div className="footerSection">
            <h4>Quick Links</h4>
            <ul className="footerLinks">
              <li><Link to="/list?type=buy">Buy</Link></li>
              <li><Link to="/list?type=rent">Rent</Link></li>
              <li><Link to="/sellers">Sell</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blogs">News & Insights</Link></li>
            </ul>
          </div>

          <div className="footerSection">
            <h4>Our Services</h4>
            <ul className="footerLinks">
              <li><Link to="/list">Property Sales</Link></li>
              <li><Link to="/list">Rentals & Leasing</Link></li>
              <li><Link to="/about">Property Management</Link></li>
              <li><Link to="/about">Valuations</Link></li>
              <li><Link to="/about">Development Consulting</Link></li>
            </ul>
          </div>

          <div className="footerSection">
            <h4>Contact Us</h4>
            <div className="contactInfo">
              <div className="contactItem">
                <i className="fas fa-phone"></i>
                <div>
                  <a href="tel:+233265002550">+233 (0) 265 002 550</a>
                  <a href="tel:+233277662211">0277 66 22 11</a>
                </div>
              </div>
              <div className="contactItem">
                <i className="fas fa-envelope"></i>
                <a href="mailto:oarealty2025@gmail.com">oarealty2025@gmail.com</a>
              </div>
              <div className="contactItem">
                <i className="fas fa-map-marker-alt"></i>
                <p>Special Garden Link, Hse No.15<br />GPS: GN 414-111 N</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footerDivider"></div>

        <div className="footerBottom">
          <div className="socialLinks">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="socialIcon" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="socialIcon" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="socialIcon" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} OA Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
