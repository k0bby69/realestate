import { useState, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import List from "../../components/list/List";
import "./sellersPage.scss";

function SellersPage() {
  const data = useLoaderData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    location: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        location: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="sellersPage">
      {/* Hero Section */}
      <div className="heroSection">
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <h1>List Your Property With Us</h1>
          <p>Reach thousands of potential buyers through OA Realty's premium platform</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contactSection">
        <div className="contactContainer">
          <div className="contactInfo">
            <h2>Ready to List Your Property?</h2>
            <p className="subtitle">Get in touch with our team to list your property on OA Realty</p>
            
            <div className="benefits">
              <div className="benefit">
                <i className="fas fa-users"></i>
                <div>
                  <h3>Wide Reach</h3>
                  <p>Connect with thousands of active buyers</p>
                </div>
              </div>
              <div className="benefit">
                <i className="fas fa-chart-line"></i>
                <div>
                  <h3>Premium Marketing</h3>
                  <p>Professional photos and detailed listings</p>
                </div>
              </div>
              <div className="benefit">
                <i className="fas fa-headset"></i>
                <div>
                  <h3>Expert Support</h3>
                  <p>Dedicated team to guide you through the process</p>
                </div>
              </div>
              <div className="benefit">
                <i className="fas fa-shield-alt"></i>
                <div>
                  <h3>Secure Process</h3>
                  <p>Safe and transparent transactions</p>
                </div>
              </div>
            </div>

            <div className="contactDetails">
              <h3>Contact Information</h3>
              <div className="detail">
                <i className="fas fa-phone"></i>
                <span>+233 123 456 789</span>
              </div>
              <div className="detail">
                <i className="fas fa-envelope"></i>
                <span>listings@OA Realty.com</span>
              </div>
              <div className="detail">
                <i className="fas fa-map-marker-alt"></i>
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <h2>Get Started Today</h2>
            {submitted ? (
              <div className="successMessage">
                <i className="fas fa-check-circle"></i>
                <h3>Thank You!</h3>
                <p>We've received your information and will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="formGroup">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+233 XXX XXX XXX"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="propertyType">Property Type *</label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select property type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="land">Land</option>
                    <option value="commercial">Commercial Property</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="location">Property Location *</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="City/Region"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us more about your property..."
                  ></textarea>
                </div>

                <button type="submit" className="submitButton">
                  <i className="fas fa-paper-plane"></i>
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Featured Listings Section */}
      <div className="featuredSection">
        <div className="sectionHeader">
          <h2>Featured Properties</h2>
          <p>Explore our current listings for inspiration</p>
        </div>
        
        <div className="listingsContainer">
          <Suspense fallback={<p>Loading properties...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading properties!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.slice(0, 6)} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default SellersPage;
