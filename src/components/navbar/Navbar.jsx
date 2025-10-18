import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser, demoLogin } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if(currentUser) fetch();

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <nav>
      {/* Main navigation */}
      <div className="mainNav">
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>OA Realty</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/list">Properties</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
            {currentUser.role === "admin" && (
              <Link to="/admin" className="admin">
                <span>Admin</span>
              </Link>
            )}
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
            <button 
              onClick={demoLogin} 
              className="demo-login"
              style={{
                marginLeft: '10px',
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Demo Login
            </button>
          </>
        )}
        <div className="menuIcon">
          <div className="hamburgerIcon" onClick={() => setOpen((prev) => !prev)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={open ? "menu active" : "menu"}>
          <button className="closeBtn" onClick={() => setOpen(false)}>
            ×
          </button>
          <div className="menuHeader">
            <div className="menuLogo">OA Realty</div>
            <div className="menuSubtitle">Navigation Menu</div>
          </div>
          <Link to="/" onClick={handleMenuClose}>Home</Link>
          <Link to="/list" onClick={handleMenuClose}>Properties</Link>
          <Link to="/about" onClick={handleMenuClose}>About</Link>
          <Link to="/contact" onClick={handleMenuClose}>Contact</Link>
          <Link to="/blogs" onClick={handleMenuClose}>Blogs</Link>
          {currentUser?.role === "admin" && (
            <Link to="/admin" onClick={handleMenuClose}>Admin</Link>
          )}
          {!currentUser && (
            <>
              <Link to="/login" onClick={handleMenuClose} className="authBtn">Sign in</Link>
              <Link to="/register" onClick={handleMenuClose} className="authBtn">Sign up</Link>
            </>
          )}
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
