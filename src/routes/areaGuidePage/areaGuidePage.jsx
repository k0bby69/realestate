import { useState } from "react";
import Map from "../../components/map/Map";
import "./areaGuidePage.scss";

function AreaGuidePage() {
  const [selectedArea, setSelectedArea] = useState(null);

  const neighborhoods = [
    {
      id: 1,
      name: "Cantonments",
      city: "Accra",
      description: "Prestigious diplomatic area with upscale amenities",
      avgPrice: "$250,000 - $500,000",
      schools: ["Ghana International School", "Lincoln Community School"],
      transport: ["Uber/Bolt available", "15 min to Airport"],
      amenities: ["Embassies", "High-end restaurants", "Fitness centers", "Shopping malls"],
      coordinates: { lat: 5.5755, lng: -0.1817 },
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "East Legon",
      city: "Accra",
      description: "Modern residential area popular with young professionals",
      avgPrice: "$150,000 - $350,000",
      schools: ["SOS Hermann Gmeiner School", "Faith Montessori"],
      transport: ["Trotro stations", "Uber/Bolt", "20 min to Airport"],
      amenities: ["Nightlife", "Restaurants", "Gyms", "Co-working spaces"],
      coordinates: { lat: 5.6338, lng: -0.1519 },
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Airport Residential",
      city: "Accra",
      description: "Secure area close to the airport, ideal for expats",
      avgPrice: "$200,000 - $450,000",
      schools: ["American International School", "British International School"],
      transport: ["5 min to Airport", "Easy highway access"],
      amenities: ["Shopping centers", "Restaurants", "Banks", "Hotels"],
      coordinates: { lat: 5.6037, lng: -0.1870 },
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Kumasi Central",
      city: "Kumasi",
      description: "Heart of Ashanti Region with rich cultural heritage",
      avgPrice: "$80,000 - $200,000",
      schools: ["Prempeh College", "Opoku Ware School"],
      transport: ["Central bus station", "Taxis available"],
      amenities: ["Kejetia Market", "Cultural sites", "Hospitals", "Banks"],
      coordinates: { lat: 6.6885, lng: -1.6244 },
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Tema",
      city: "Greater Accra",
      description: "Industrial city with well-planned residential areas",
      avgPrice: "$100,000 - $250,000",
      schools: ["Tema International School", "Tema Senior High"],
      transport: ["Harbor area", "30 min to Accra CBD"],
      amenities: ["Port facilities", "Shopping areas", "Sports centers"],
      coordinates: { lat: 5.6698, lng: -0.0166 },
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Takoradi",
      city: "Western Region",
      description: "Coastal city with growing real estate opportunities",
      avgPrice: "$70,000 - $180,000",
      schools: ["Fijai Senior High", "St. John's School"],
      transport: ["Seaport access", "Airport nearby"],
      amenities: ["Beaches", "Oil & gas sector", "Markets", "Restaurants"],
      coordinates: { lat: 4.8969, lng: -1.7530 },
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
    }
  ];

  // Create mock property data for map
  const mapItems = neighborhoods.map(area => ({
    id: area.id,
    latitude: area.coordinates.lat,
    longitude: area.coordinates.lng,
    title: area.name,
    bedroom: 3,
    price: parseInt(area.avgPrice.replace(/[^0-9]/g, '').substring(0, 6)),
    images: [area.image]
  }));

  return (
    <div className="areaGuidePage">
      <div className="areaGuideHeader">
        <h1>Neighborhood Guide</h1>
        <p>Explore Ghana's best neighborhoods and find your perfect location</p>
      </div>

      <div className="areaGuideContent">
        <div className="neighborhoodsList">
          {neighborhoods.map((area) => (
            <div 
              key={area.id} 
              className={`neighborhoodCard ${selectedArea?.id === area.id ? 'active' : ''}`}
              onClick={() => setSelectedArea(area)}
            >
              <div className="neighborhoodImage">
                <img src={area.image} alt={area.name} />
                <span className="cityBadge">{area.city}</span>
              </div>
              <div className="neighborhoodInfo">
                <h3>{area.name}</h3>
                <p className="description">{area.description}</p>
                <div className="priceRange">
                  <i className="fas fa-tag"></i>
                  <span>{area.avgPrice}</span>
                </div>

                {selectedArea?.id === area.id && (
                  <div className="detailedInfo">
                    <div className="infoSection">
                      <h4><i className="fas fa-school"></i> Schools Nearby</h4>
                      <ul>
                        {area.schools.map((school, idx) => (
                          <li key={idx}>{school}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="infoSection">
                      <h4><i className="fas fa-bus"></i> Transportation</h4>
                      <ul>
                        {area.transport.map((transport, idx) => (
                          <li key={idx}>{transport}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="infoSection">
                      <h4><i className="fas fa-map-marker-alt"></i> Amenities</h4>
                      <ul>
                        {area.amenities.map((amenity, idx) => (
                          <li key={idx}>{amenity}</li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      className="viewPropertiesBtn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/list?city=${area.city}`;
                      }}
                    >
                      <i className="fas fa-search"></i>
                      View Properties in {area.name}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mapSection">
          <div className="mapWrapper">
            <Map items={mapItems} />
          </div>
          <div className="mapLegend">
            <h4>Interactive Map</h4>
            <p>Click on markers to see property listings in each area</p>
            <div className="legendItems">
              <div className="legendItem">
                <div className="marker accra"></div>
                <span>Accra Region</span>
              </div>
              <div className="legendItem">
                <div className="marker kumasi"></div>
                <span>Kumasi</span>
              </div>
              <div className="legendItem">
                <div className="marker other"></div>
                <span>Other Cities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaGuidePage;
