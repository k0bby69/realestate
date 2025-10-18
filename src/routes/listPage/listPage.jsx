import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import List from "../../components/list/List";
import Map from "../../components/map/Map";
import FeaturedListings from "../../components/featuredListings/featuredListings";
import CtaButton from "../../components/ctaButton/ctaButton";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useState } from "react";

function ListPage() {
  const data = useLoaderData();
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* Alert CTA Banner */}
      {showBanner && (
        <div className="alertBanner">
          <div className="alertContent">
            <div className="alertText">
              <i className="fas fa-bell"></i>
              <span>Don't miss out on new listings! Register for property alerts and be the first to know.</span>
            </div>
            <div className="alertActions">
              <CtaButton 
                text="Register for Alerts" 
                link="/register" 
                icon="fas fa-envelope"
                variant="white"
              />
              <button 
                className="closeBtn" 
                onClick={() => setShowBanner(false)}
                aria-label="Close banner"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="listPage">
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(postResponse) => (
                  <>
                    <FeaturedListings posts={postResponse.data} />
                    <List posts={postResponse.data} />
                  </>
                )}
              </Await>
            </Suspense>
          </div>
        </div>
        <div className="mapContainer">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <Map items={postResponse.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default ListPage;
