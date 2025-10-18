import "./agentsPage.scss";

function AgentsPage() {
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      experience: "8 years",
      specialization: "Luxury Homes",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@OARealty.com",
      image: "/noavatar.jpg",
      bio: "Sarah specializes in luxury properties and has helped over 200 clients find their dream homes."
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Commercial Real Estate Specialist",
      experience: "12 years",
      specialization: "Commercial Properties",
      phone: "+1 (555) 234-5678",
      email: "michael.chen@OARealty.com",
      image: "/noavatar.jpg",
      bio: "Michael is our go-to expert for commercial real estate with extensive knowledge of business properties."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "First-Time Buyer Specialist",
      experience: "5 years",
      specialization: "First-Time Buyers",
      phone: "+1 (555) 345-6789",
      email: "emily.rodriguez@OARealty.com",
      image: "/noavatar.jpg",
      bio: "Emily helps first-time buyers navigate the real estate market with patience and expertise."
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Investment Property Expert",
      experience: "15 years",
      specialization: "Investment Properties",
      phone: "+1 (555) 456-7890",
      email: "david.thompson@OARealty.com",
      image: "/noavatar.jpg",
      bio: "David has extensive experience in investment properties and rental market analysis."
    }
  ];

  return (
    <div className="agentsPage">
      <div className="container">
        <h1>Our Expert Agents</h1>
        <p className="intro">
          Meet our team of experienced real estate professionals who are dedicated 
          to helping you find the perfect property.
        </p>
        
        <div className="agentsGrid">
          {agents.map(agent => (
            <div key={agent.id} className="agentCard">
              <div className="agentImage">
                <img src={agent.image} alt={agent.name} />
              </div>
              <div className="agentInfo">
                <h3>{agent.name}</h3>
                <p className="title">{agent.title}</p>
                <p className="experience">{agent.experience} experience</p>
                <p className="specialization">Specializes in: {agent.specialization}</p>
                <p className="bio">{agent.bio}</p>
                <div className="contact">
                  <p>📞 {agent.phone}</p>
                  <p>✉️ {agent.email}</p>
                </div>
                <button className="contactBtn">Contact Agent</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgentsPage;