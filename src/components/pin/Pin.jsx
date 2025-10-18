import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  // Parse images if it's a JSON string, otherwise use as array
  const images = typeof item.images === 'string' ? JSON.parse(item.images) : item.images;
  
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/property/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
