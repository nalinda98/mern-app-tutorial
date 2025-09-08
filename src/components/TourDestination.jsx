import React from "react";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    id: 1,
    image: "/images/seegiriya.png",
    city: "Seegiriya",
    days: "1/2 Days Tour",
    title: "Ancient Fortress",
    location: "Seegiriya, Sri Lanka",
    features: ["shower", 2, "king-size", 3, "mountains"],
  },
  {
    id: 2,
    image: "/images/polonnaru.jpg",
    city: "Polonnaruwa",
    days: "2 Days Tour",
    title: "Ruins of Polonnaruwa",
    location: "Polonnaruwa, Sri Lanka",
    features: ["shower", 2, "king-size", 3, "mountains"],
  },
  {
    id: 3,
    image: "/images/pegion.webp",
    city: "Trincomalee",
    days: "3 Days Tour",
    title: "Coral Reef Exploration",
    location: "Trincomalee, Sri Lanka",
    features: ["shower", 2, "king-size", 3, "sun-umbrella"],
  },
  {
    id: 4,
    image: "/images/galle-fort-1050x700-1.jpg",
    city: "Galle",
    days: "1/2 Days Tour",
    title: "Explore Galle Fort",
    location: "Galle, Sri Lanka",
    features: ["shower", 2, "king-size", 3, "sun-umbrella"],
  },
  {
    id: 5,
    image: "/images/Mirissa.jpg",
    city: "Mirissa",
    days: "1/2 Days Tour",
    title: "Relax in Beach Paradise",
    location: "Mirissa, Sri Lanka",
    features: ["shower", 2, "king-size", 3, "sun-umbrella"],
  },
  {
    id: 6,
    image: "/images/minneriya-national-park.jpg",
    city: "Minneriya",
    days: "2/3 Days Tour",
    title: "Wildlife Safari Adventure",
    location: "Minneriya, Sri Lanka",
    features: ["shower", 2, "king-size", 3, "mountains"],
  },
  {
    id: 7,
    image: "/images/ballal-ella-train.jpg",
    city: "Ella",
    days: "2/3 Days Tour",
    title: "Scenic Train Journey",
    location: "Ella, Sri Lanka",
    features: ["shower", 2, "king-size", 3, "mountains"],
  },
  {
    id: 8,
    image: "/images/Diyaluma-Falls.jpg",
    city: "Diyaluma",
    days: "1+ Days Tour",
    title: "Falls and Nature",
    location: "Diyaluma, Sri Lanka",
    features: ["shower", 2, "king-size", 3, "mountains"],
  },
  {
    id: 9,
    image: "/images/kandy.jpg",
    city: "Kandy",
    days: "1+ Days Tour",
    title: "Cultural Heritage of Kandy",
    location: "Kandy, Sri Lanka",
    features: ["shower", 2, "king-size", 3, "mountains"],
  },
];

const TourDestination = () => {
  const navigate = useNavigate();
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
          {destinations.map((dest) => (
            <div
              className="col-md-4"
              key={dest.id}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="project-wrap">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${dest.image})`,
                    height: "250px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="price">{dest.city}</span>
                </div>
                <div
                  className="text p-4"
                  style={{
                    background: "#fff",
                    borderRadius: "0 0 16px 16px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                    marginTop: "-10px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <h3>
                    <button
                      className="btn btn-link p-0"
                      style={{ fontSize: "1.1rem" }}
                    >
                      {dest.title}
                    </button>
                  </h3>
                  <div className="mt-3 d-flex justify-content-end">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => navigate(`/contact`)}
                    >
                      Book Now
                    </button>
                  </div>
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
