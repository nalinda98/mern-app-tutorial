import React from 'react'

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
    title: "Polonnaruwa Ancient City",
    description: [
      "Travel to Polonnaruwa, a UNESCO World Heritage site.",
      "Explore the ancient ruins, royal palaces, and impressive statues.",
      "Enjoy a local lunch and return to Kandy for overnight stay."
    ],
    imageAlt: "Polonnaruwa Ruins",
    imagesrc: "/images/Polonnaruwa.jpg",
  },
  {
    day: 3,
    title: "Trincomalee Beach & City",
    description: [
      "Head to Trincomalee on the east coast.",
      "Relax on the beautiful beaches or visit Koneswaram Temple.",
      "Optional: Go snorkeling or whale watching (seasonal)."
    ],
    imageAlt: "Trincomalee Beach",
    imagesrc: "/images/trinco.webp",
  },
  {
    day: 4,
    title: "Dambulla Cave Temple",
    description: [
      "Travel to Dambulla and explore the famous Golden Temple (cave temples).",
      "Marvel at the ancient Buddhist murals and statues.",
      "Continue to your next destination or return to Kandy."
    ],
    imageAlt: "Dambulla Cave Temple",
    imagesrc: "/images/dambulla.jpg",
  },
  {
    day: 5,
    title: "Yapahuwa Ancient Fortress",
    description: [
      "Visit Yapahuwa, an ancient rock fortress and former capital of medieval Sri Lanka.",
      "Climb the impressive stone staircase and explore the ruins.",
      "Return to Kandy or Colombo for overnight stay."
    ],
    imageAlt: "Yapahuwa Fortress",
    imagesrc: "/images/yapahuwa.JPG",
  },
  {
    day: 6,
    title: "Departure",
    description: [
      "Enjoy some free time for shopping or sightseeing.",
      "Transfer to the airport or your next destination."
    ],
    imageAlt: "Colombo City",
    imagesrc: "/images/colombo.gif",
  },
];

const Tour6Days = () => {
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
          <h2 className="mb-4">6-Day Sri Lanka Tour</h2>
          <p>
            Discover Kandy, Polonnaruwa, Trincomalee, Dambulla, and Yapahuwa on this immersive 6-day journey.
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
                  position: "relative",
                  cursor: "pointer"
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

export default Tour6Days