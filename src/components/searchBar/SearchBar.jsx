import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const quickSearches = [
    { label: "Homes under $200k", link: "/list?type=buy&minPrice=0&maxPrice=200000" },
    { label: "Luxury Apartments", link: "/list?type=buy&minPrice=500000" },
    { label: "Rental Properties", link: "/list?type=rent" },
    { label: "New Listings", link: "/list?type=buy" },
    { label: "Accra Properties", link: "/list?city=Accra" },
    { label: "Kumasi Homes", link: "/list?city=Kumasi" },
  ];

  return (
    <div className="searchBarWrapper">
      <div className="searchBar">
        <div className="type">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => switchType(type)}
              className={query.type === type ? "active" : ""}
            >
              {type}
            </button>
          ))}
        </div>
        <form>
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            type="number"
            name="minPrice"
            min={0}
            max={10000000}
            placeholder="Min Price"
            onChange={handleChange}
          />
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={10000000}
            placeholder="Max Price"
            onChange={handleChange}
          />
          <Link
            to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          >
            <button>
              <img src="/search.png" alt="" />
            </button>
          </Link>
        </form>
      </div>
      
      <div className="quickSearchLinks">
        <p className="quickSearchLabel">Popular Searches:</p>
        <div className="quickSearchButtons">
          {quickSearches.map((search, index) => (
            <Link key={index} to={search.link} className="quickSearchBtn">
              {search.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
