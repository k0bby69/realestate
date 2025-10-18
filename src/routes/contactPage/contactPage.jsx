import "./contactPage.scss";
import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contactPage">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="content">
          <div className="contactInfo">
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you're looking to buy, sell, or rent, 
              our team of experts is here to help you every step of the way.
            </p>
            
            <div className="contactDetails">
              <div className="detail">
                <h3>📍 Address</h3>
                <p>123 Real Estate Ave<br />Property City, PC 12345</p>
              </div>
              
              <div className="detail">
                <h3>📞 Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="detail">
                <h3>✉️ Email</h3>
                <p>info@OA Realty.com</p>
              </div>
              
              <div className="detail">
                <h3>🕒 Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                   Saturday: 10:00 AM - 4:00 PM<br />
                   Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="contactForm">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="formGroup">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="formGroup">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="formGroup">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;