import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import "./card.scss";

function Card({ item }) {
  // Parse images if it's a JSON string, otherwise use as array
  const images = typeof item.images === 'string' ? JSON.parse(item.images) : item.images;
  const [saved, setSaved] = useState(item.isSaved || false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!currentUser) {
      navigate("/login");
      return;
    }
    
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: item.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  const handleEmailOwner = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!currentUser) {
      navigate("/login");
      return;
    }
    
    // Create email with property details
    const subject = encodeURIComponent(`Inquiry about: ${item.title}`);
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in your property listing:\n` +
      `Property: ${item.title}\n` +
      `Location: ${item.address}\n` +
      `Price: $${item.price}\n\n` +
      `Please contact me to discuss further details.\n\n` +
      `Best regards,\n${currentUser.username}`
    );
    
    window.location.href = `mailto:info@OARealty.com?subject=${subject}&body=${body}`;
  };
  
  return (
    <div className="card">
      <Link to={`/property/${item.id}`} className="imageContainer">
        <img src={images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/property/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon" onClick={handleSave}>
              <img 
                src="/save.png" 
                alt="" 
                style={{ 
                  filter: saved ? 'invert(1) sepia(1) saturate(5) hue-rotate(175deg)' : 'none',
                  cursor: 'pointer'
                }} 
              />
            </div>
            <div className="icon" onClick={handleEmailOwner}>
              <img src="/chat.png" alt="" style={{ cursor: 'pointer' }} title="Email Owner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
