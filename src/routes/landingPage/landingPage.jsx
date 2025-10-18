import { Link } from "react-router-dom";
import "./landingPage.scss";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="hero">
        <div className="overlay"></div>
        <div className="heroContent">
          <div className="logo">
            <img src="/logo.png" alt="OA Realty" />
            <h1>OA Realty</h1>
          </div>
          <p className="tagline">Your Gateway to Premium Real Estate in Ghana</p>
          <p className="subtitle">Discover your perfect property in Ghana's most desirable locations</p>
        </div>
      </div>

      <div className="navigationGrid">
        <Link to="/list?type=buy" className="navCard buyers">
          <div className="iconWrapper">
            <i className="fas fa-home"></i>
          </div>
          <h2>Buyers</h2>
          <p>Find your dream home from our curated collection of properties</p>
          <span className="arrow">→</span>
        </Link>

        <Link to="/sellers" className="navCard sellers">
          <div className="iconWrapper">
            <i className="fas fa-key"></i>
          </div>
          <h2>Sellers</h2>
          <p>List your property and reach thousands of potential buyers</p>
          <span className="arrow">→</span>
        </Link>

        <Link to="/list" className="navCard luxury">
          <div className="iconWrapper">
            <i className="fas fa-crown"></i>
          </div>
          <h2>Luxury Properties</h2>
          <p>Explore exclusive high-end properties in premium locations</p>
          <span className="arrow">→</span>
        </Link>

        <Link to="/blogs" className="navCard news">
          <div className="iconWrapper">
            <i className="fas fa-newspaper"></i>
          </div>
          <h2>News & Insights</h2>
          <p>Stay updated with the latest real estate trends and tips</p>
          <span className="arrow">→</span>
        </Link>

        <Link to="/about" className="navCard about">
          <div className="iconWrapper">
            <i className="fas fa-info-circle"></i>
          </div>
          <h2>About Us</h2>
          <p>Learn more about OA Realty and our mission</p>
          <span className="arrow">→</span>
        </Link>

        <Link to="/contact" className="navCard contact">
          <div className="iconWrapper">
            <i className="fas fa-phone"></i>
          </div>
          <h2>Contact</h2>
          <p>Get in touch with our expert team</p>
          <span className="arrow">→</span>
        </Link>
      </div>

      <div className="quickAccess">
        <Link to="/home" className="skipButton">
          Enter Main Site
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
