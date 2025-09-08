import React from 'react';

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kandy",
    description: [
      "Arrive at Bandaranaike International Airport (CMB) near Colombo.",
      "Transfer to Kandy, the cultural capital of Sri Lanka.",
      "Visit the Temple of the Tooth Relic and enjoy a stroll around Kandy Lake."
    ],
    imageAlt: "Temple of the Tooth Relic",
    imagesrc: "/images/kandy.avif",
  },
  {
    day: 2,
    title: "Kandy to Nuwara Eliya",
    description: [
      "Travel to Nuwara Eliya, known as 'Little England' for its cool climate and colonial charm.",
      "Visit tea plantations and a tea factory.",
      "Explore Gregory Lake and the beautiful gardens."
    ],
    imageAlt: "Nuwara Eliya",
    imagesrc: "/images/Nuwara_Eliya.jpg",
  },
  {
    day: 3,
    title: "Nuwara Eliya to Colombo",
    description: [
      "Depart for Colombo, Sri Lanka's bustling commercial capital.",
      "Enjoy a city tour: Galle Face Green, Gangaramaya Temple, Independence Square, and shopping.",
      "Experience Colombo's vibrant nightlife or relax at your hotel."
    ],
    imageAlt: "Colombo City",
    imagesrc: "/images/colombo.gif",
  },
  {
    day: 4,
    title: "Colombo to Bentota",
    description: [
      "Travel to Bentota, a popular beach destination on the southwest coast.",
      "Relax on the golden beaches or enjoy water sports.",
      "Optional: Visit a turtle hatchery or take a boat ride on the Bentota River."
    ],
    imageAlt: "Bentota Beach",
    imagesrc: "/images/Boat-Safari.webp",
  },
  {
    day: 5,
    title: "Departure",
    description: [
      "Enjoy your morning at leisure in Bentota.",
      "Transfer to the airport or your next destination."
    ],
    imageAlt: "Sri Lanka Departure",
    imagesrc: "/images/airline.jpg",
  },
];

const Tour5Days = () => {
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
          <h2 className="mb-4">5-Day Sri Lanka Tour</h2>
          <p>
            Experience the best of Sri Lanka in five days, from the hills of Kandy and Nuwara Eliya to the vibrant city of Colombo and the beaches of Bentota.
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

export default Tour5Days;