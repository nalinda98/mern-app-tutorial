import React from 'react';

const itinerary = [
  {
    day: 1,
    title: "Arrival in Negombo",
    description: [
      "Arrive at Bandaranaike International Airport (CMB) near Colombo.",
      "Transfer to Negombo, a coastal town known for its fishing industry and beaches.",
      "Relax on the beach and explore the local area."
    ],
    imageAlt: "Negombo Beach",
    imagesrc: "/images/negombo.avif",
  },
  {
    day: 2,
    title: "Pinnawala Elephant Orphanage & Dambulla",
    description: [
      "Visit the Pinnawala Elephant Orphanage to see rescued elephants.",
      "Continue to Dambulla and explore the famous Golden Temple (cave temples).",
      "Overnight stay near Sigiriya or Dambulla."
    ],
    imageAlt: "Pinnawala Elephant Orphanage",
    imagesrc: "/images/pinnawala.jpg",
  },
  {
    day: 3,
    title: "Sigiriya Rock Fortress & Kandy",
    description: [
      "Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage site.",
      "Travel to Kandy, the cultural capital of Sri Lanka.",
      "Visit the Temple of the Tooth Relic in Kandy."
    ],
    imageAlt: "Sigiriya Rock Fortress",
    imagesrc: "/images/seegiriya.webp",
  },
  {
    day: 4,
    title: "Kandy & Departure",
    description: [
      "Explore the Peradeniya Royal Botanical Gardens.",
      "Enjoy a city tour of Kandy or shop for souvenirs.",
      "Transfer to the airport or your next destination."
    ],
    imageAlt: "Temple of the Tooth Relic",
    imagesrc: "/images/kandy.avif",
  },
];

const Tour4Days = () => {
  return (
    <div className="container py-5">
      <style>
        {`
        .itinerary-photo-container {
          transition: box-shadow 0.4s cubic-bezier(.4,2,.6,1), transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        .itinerary-photo-container:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          transform: scale(1.04) rotate(-2deg);
          z-index: 2;
        }
        .itinerary-photo-container img {
          transition: filter 0.4s cubic-bezier(.4,2,.6,1);
        }
        .itinerary-photo-container:hover img {
          filter: brightness(1.08) saturate(1.2);
        }
        `}
      </style>
      <div className="row justify-content-center pb-3">
        <div className="col-md-12 heading-section text-center">
          <span className="subheading">Itinerary</span>
          <h2 className="mb-4">4-Day Sri Lanka Tour</h2>
          <p>
            Discover the highlights of Sri Lanka in just four days, from golden beaches to ancient wonders and cultural treasures.
          </p>
        </div>
      </div>
      {itinerary.map((item) => (
        <div key={item.day} className="mb-5 p-4 shadow rounded bg-white">
          <div className="row align-items-center">
            <div className="col-md-4 mb-3 mb-md-0">
              <div
                className="itinerary-photo-container"
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  background: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative"
                }}
              >
                <img
                  src={item.imagesrc || ""}
                  alt={item.imageAlt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0
                  }}
                />
                {!item.imagesrc && (
                  <span style={{ color: "#aaa", zIndex: 1 }}>Image for {item.title}</span>
                )}
              </div>
            </div>
            <div className="col-md-8">
              <h4>Day {item.day}: {item.title}</h4>
              <ul>
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tour4Days;