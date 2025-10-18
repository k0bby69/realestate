import "./aboutPage.scss";

function AboutPage() {
  const teamMembers = [
    {
      name: "GK Okity",
      role: "Senior Property Adviser/Agent",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "PO Kumesi",
      role: "Field Technician/Agent",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "PK Okity",
      role: "Admin Manager/Agent",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="aboutPage">
      <div className="hero">
        <div className="heroContent">
          <h1>About OA Realty</h1>
          <p>"We will help you find your perfect home"</p>
        </div>
      </div>

      <div className="container">
        {/* About Us Section */}
        <div className="section">
          <div className="textSection">
            <h2>About Us</h2>
            <p className="lead">
              OA Realty is a subsidiary of OA Investment Limited which is a multi-faceted company operating for the past fifteen (15) years in Ghana. Our specialised areas include but not limited to property development, agriculture, import and export of building inputs and general business operations.
            </p>
            <p className="lead">
              Property sector foresees projects spanning from industrial, educational, sporting, residential, warehousing, oil and gas. Agriculture sector saw animal husbandry, poultry farming and cultivation of various crops.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="section bgLight">
          <h2 className="sectionTitle">Our Mission & Vision</h2>
          <div className="missionVision">
            <div className="card">
              <i className="fas fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p>
                As shelter is key to human survival, "we will help you find your perfect home"
              </p>
            </div>
            <div className="card">
              <i className="fas fa-eye"></i>
              <h3>Our Vision</h3>
              <p>
                To be the leading real estate servant within our city, making it easy to sell, buy, rent, lease thereby eliminating abandoned and uncompleted houses.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="section">
          <h2 className="sectionTitle">What We Do</h2>
          <p className="centerText">
            The birth of OA Realty has veered more and expanded into property deals which includes:
          </p>
          <div className="services">
            <div className="serviceCard">
              <i className="fas fa-home"></i>
              <h4>Property Sales</h4>
              <p>Residential and commercial property sales</p>
            </div>
            <div className="serviceCard">
              <i className="fas fa-key"></i>
              <h4>Rentals & Leasing</h4>
              <p>Property rentals and leasing services</p>
            </div>
            <div className="serviceCard">
              <i className="fas fa-tools"></i>
              <h4>Renovation & Fitout</h4>
              <p>Property renovation and fitout solutions</p>
            </div>
            <div className="serviceCard">
              <i className="fas fa-warehouse"></i>
              <h4>Prefab Housing</h4>
              <p>Supply of Prefab Housing and installation</p>
            </div>
            <div className="serviceCard">
              <i className="fas fa-clipboard-list"></i>
              <h4>Property Management</h4>
              <p>Property Management and Advisory Services</p>
            </div>
            <div className="serviceCard">
              <i className="fas fa-map-marked-alt"></i>
              <h4>Land Development</h4>
              <p>Land acquisition and development consulting</p>
            </div>
            <div className="serviceCard">
              <i className="fas fa-chart-line"></i>
              <h4>Valuations</h4>
              <p>Property valuations and free market insights</p>
            </div>
          </div>
        </div>

        {/* Why Choose OA */}
        <div className="section bgLight">
          <h2 className="sectionTitle">Why Choose OA Realty</h2>
          <div className="whyChooseContent">
            <p className="lead">
              At OA, we believe anyone can build a secure financial future through smart real estate investments, and we're here to help you make that happen.
            </p>
            <div className="features">
              <div className="feature">
                <i className="fas fa-user-tie"></i>
                <div>
                  <h4>Personalised Consultations</h4>
                  <p>We offer personalised buy-to-let consultations, matching your needs and budget with exclusive off-market properties.</p>
                </div>
              </div>
              <div className="feature">
                <i className="fas fa-hands-helping"></i>
                <div>
                  <h4>Full-Service Management</h4>
                  <p>We take care of everything, from building, furnishing and letting to managing all the day-to-day tasks.</p>
                </div>
              </div>
              <div className="feature">
                <i className="fas fa-smile"></i>
                <div>
                  <h4>Stress-Free Experience</h4>
                  <p>Ensuring your investment experience is easy and stress-free from start to finish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Guarantee */}
        <div className="section">
          <div className="investmentGuarantee">
            <i className="fas fa-shield-alt"></i>
            <h2>Investment Guarantee</h2>
            <p>
              Our insurance partners are Ready Willing and Able (RWA) to guarantee your cash investment throughout the process, from commitment deposit to final deal closed out, we are your reliable partners.
            </p>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="section bgDark">
          <h2 className="sectionTitle white">Meet the Team</h2>
          <p className="centerText white">
            Our agents are passionate professionals who combine market knowledge with a genuine desire to help. From first-time buyers to seasoned investors, we treat every client like family.
          </p>
          <div className="teamGrid">
            {teamMembers.map((member, index) => (
              <div key={index} className="teamCard">
                <div className="teamImageWrapper">
                  <img src={member.image} alt={member.name} onError={(e) => { e.target.src = '/noavatar.jpg'; }} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="section">
          <div className="ctaSection">
            <h2>Ready to Find Your Perfect Home?</h2>
            <p>Get in touch with our expert team today</p>
            <div className="ctaButtons">
              <a href="tel:+233265002550" className="ctaButton primary">
                <i className="fas fa-phone"></i> Call: +233 (0) 265 002 550
              </a>
              <a href="tel:+233277662211" className="ctaButton primary">
                <i className="fas fa-phone"></i> Call: 0277 66 22 11
              </a>
              <a href="mailto:oarealty2025@gmail.com" className="ctaButton secondary">
                <i className="fas fa-envelope"></i> Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
