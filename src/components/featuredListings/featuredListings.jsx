import { Link } from "react-router-dom";
import "./featuredListings.scss";

function FeaturedListings({ posts = [] }) {
  // Get featured posts (you can modify this logic based on your needs)
  const featuredPosts = posts.slice(0, 3);

  // Default property images if none exist
  const defaultImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop'
  ];

  return (
    <div className="featuredListings">
      <div className="featuredHeader">
        <h2>Featured Properties</h2>
        <p>Discover our hand-picked selection of premium properties</p>
      </div>

      <div className="featuredGrid">
        {featuredPosts.length > 0 ? (
          featuredPosts.map((post, index) => (
            <Link to={`/property/${post.id}`} key={post.id} className="featuredCard">
              <div className="featuredImage">
                <img 
                  src={post.images?.[0] || defaultImages[index] || "/bg.png"} 
                  alt={post.title}
                  onError={(e) => { e.target.src = defaultImages[index] || '/bg.png'; }}
                />
                <div className="featuredBadge">Featured</div>
                {post.property?.type && (
                  <div className="typeBadge">{post.type}</div>
                )}
              </div>
              
              <div className="featuredContent">
                <div className="featuredPrice">
                  ${post.price?.toLocaleString()}
                  {post.type === "rent" && <span>/month</span>}
                </div>
                
                <h3 className="featuredTitle">{post.title}</h3>
                
                <div className="featuredLocation">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{post.address}</span>
                </div>
                
                <div className="featuredDetails">
                  <div className="detail">
                    <i className="fas fa-bed"></i>
                    <span>{post.bedroom} beds</span>
                  </div>
                  <div className="detail">
                    <i className="fas fa-bath"></i>
                    <span>{post.bathroom} baths</span>
                  </div>
                </div>
                
                <button className="viewDetailsBtn">
                  View Details
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </Link>
          ))
        ) : (
          <div className="noFeatured">
            <i className="fas fa-home"></i>
            <p>No featured properties available at the moment</p>
          </div>
        )}
      </div>

      <div className="featuredFooter">
        <Link to="/list" className="viewAllBtn">
          View All Properties
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedListings;
