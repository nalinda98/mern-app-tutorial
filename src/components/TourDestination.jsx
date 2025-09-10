import React from "react";
import { useNavigate } from "react-router-dom";
import destinations from "../utils/destinations";

const TourDestination = () => {
  const navigate = useNavigate();

  // Get last segment from URL hash
  const hash = window.location.hash; // e.g., "#/destinations/negombo"
  const segments = hash.split("/");
  const cityParam = segments[segments.length - 1].toLowerCase().replace(/\s+/g, "");

  // Filter destinations by city (case-insensitive, no spaces)
  const filteredDestinations = destinations.filter(dest =>
    dest.city.toLowerCase().replace(/\s+/g, "") === cityParam
  );

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div
            className="col-md-12 heading-section text-center"
            data-aos="fade-up"
          >
            <span className="subheading">Destination</span>
            <h2 className="mb-4">Tour Destination</h2>
          </div>
        </div>
        <div className="row">
          {(filteredDestinations.length > 0 ? filteredDestinations : destinations).map((dest) => (
            <div className="col-md-4 mb-4" key={dest.id}>
              <div className="card h-100 shadow-sm">
                <div
                  className="card-img-top"
                  style={{
                    backgroundImage: `url(${dest.image})`,
                    height: "180px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "15px",
                      color: "#fff",
                      background: "rgba(0,0,0,0.5)",
                      borderRadius: "4px",
                      padding: "4px 10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span className="me-2">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    {dest.title}
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text" style={{ minHeight: "60px" }}>
                    {dest.description?.length > 100
                      ? dest.description.slice(0, 100) + " ..."
                      : dest.description}
                  </p>
                  <button
                    className="btn btn-success btn-sm float-end"
                    onClick={() => navigate(`/destination/details/${dest.title.replace(/\s+/g, "-")}/${dest.id}`)}
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourDestination;