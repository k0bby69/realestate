import { useContext, useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import FeaturedListings from "../../components/featuredListings/featuredListings";
import Testimonials from "../../components/testimonials/testimonials";
import CtaButton from "../../components/ctaButton/ctaButton";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { featuredListings } from "../../lib/mockData";

function HomePage() {
  const {currentUser} = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Use featured listings from mock data
    setPosts(featuredListings);
  }, []);

  return (
    <>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>
              Discover your perfect property in Ghana's most desirable locations. 
              From luxury apartments to family homes, we help you find a place to call home.
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>15+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>500+</h1>
                <h2>Properties Sold</h2>
              </div>
              <div className="box">
                <h1>1000+</h1>
                <h2>Happy Clients</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
      <FeaturedListings posts={posts} />
      
      {/* CTA Section */}
      <div className="ctaSection">
        <div className="ctaContent">
          <h2>Ready to Find Your Dream Property?</h2>
          <p>Let our expert team guide you through every step of the process</p>
          <div className="ctaButtons">
            <CtaButton 
              text="Book a Free Valuation" 
              link="/contact" 
              icon="fas fa-calculator"
              variant="primary"
            />
            <CtaButton 
              text="Contact an Agent" 
              link="/contact" 
              icon="fas fa-user-tie"
              variant="secondary"
            />
            <CtaButton 
              text="Sell Your Property" 
              link="/profile/update" 
              icon="fas fa-home"
              variant="outline"
            />
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
}

export default HomePage;
