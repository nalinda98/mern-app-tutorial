import React from 'react';

const itinerary = [
  {
    day: 1,
    title: "Arrival in Negombo",
    description: [
      "Arrive at Bandaranaike International Airport (CMB) near Colombo.",
      "Transfer to Negombo, a coastal town known for its fishing industry and beaches.",
      "Enjoy the beach and relax after your journey."
    ],
    imageAlt: "Negombo Beach",
    imagesrc: "/images/negombo.avif",
  },
  {
    day: 2,
    title: "Dambulla and Sigiriya",
    description: [
      "Travel to Sigiriya, stopping at Dambulla to visit the famous Golden Temple (cave temples).",
      "Climb Sigiriya Rock Fortress, an ancient palace and fortress with stunning views.",
      "Consider an optional sunrise hike up Pidurangala Rock for panoramic views of Sigiriya."
    ],
    imageAlt: "Sigiriya Rock Fortress",
    imagesrc: "/images/seegiriya.webp",
  },
  {
    day: 3,
    title: "Polonnaruwa and Minneriya National Park",
    description: [
      "Explore the ancient city of Polonnaruwa, a UNESCO World Heritage site.",
      "Take an afternoon safari in Minneriya National Park (or Udawalawe National Park for a closer alternative) to see elephants and other wildlife."
    ],
    imageAlt: "Polonnaruwa Ruins",
    imagesrc: "/images/Polonnaruwa.jpg",
  },
  {
    day: 4,
    title: "Kandy",
    description: [
      "Travel to Kandy, the cultural capital of Sri Lanka.",
      "Visit the Temple of the Tooth Relic, a sacred Buddhist temple.",
      "Explore the Peradeniya Royal Botanical Gardens."
    ],
    imageAlt: "Temple of the Tooth Relic",
    imagesrc: "/images/kandy.avif",
  },
  {
    day: 5,
    title: "Train to Ella",
    description: [
      "Enjoy a scenic train ride from Kandy to Ella, considered one of the most beautiful train journeys in the world.",
      "The train journey can also be taken from Nanu Oya (near Nuwara Eliya).",
      "Alternatively, drive directly to Ella from Kandy, stopping at Ramboda Falls."
    ],
    imageAlt: "Train to Ella",
    imagesrc: "/images/ellatrain.jpg",
  },
  {
    day: 6,
    title: "Ella",
    description: [
      "Hike to Little Adam's Peak for stunning views.",
      "Visit the Nine Arch Bridge and Ravana Falls.",
      "Consider a Sri Lankan cookery class."
    ],
    imageAlt: "Nine Arch Bridge",
    imagesrc: "/images/ella.jpg",
  },
  {
    day: 7,
    title: "Yala/Udawalawe National Park",
    description: [
      "Choose between Yala National Park (known for leopards) or Udawalawe National Park (known for elephants) for a safari.",
      "Enjoy an afternoon or full-day safari."
    ],
    imageAlt: "Yala National Park Safari",
    imagesrc: "/images/yala.jpg",
  },
  {
    day: 8,
    title: "Beach Time (Mirissa/Hiriketiya)",
    description: [
      "Travel to the south coast and choose either Mirissa or Hiriketiya for beach time.",
      "Relax on the beach, swim, or try surfing."
    ],
    imageAlt: "Mirissa Beach",
    imagesrc: "/images/mirissa.webp",
  },
  {
    day: 9,
    title: "Beach Time (Mirissa/Hiriketiya)",
    description: [
      "Enjoy more beach time or explore the local area.",
      "Consider whale watching in Mirissa (seasonal)."
    ],
    imageAlt: "Hiriketiya Beach",
    imagesrc: "/images/hiriketiya.jpeg",
  },
  {
    day: 10,
    title: "Departure",
    description: [
      "Travel back to Colombo or your departure airport.",
      "Consider a stop at Galle Fort on the way if time allows."
    ],
    imageAlt: "Galle Fort",
    imagesrc: "/images/galle.jpg",
  },
];

const Tour10Days = () => {
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
          <h2 className="mb-4">10-Day Sri Lanka Tour</h2>
          <p>
            Explore our carefully crafted 10-day journey through Sri Lanka’s most iconic destinations and experiences.
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

export default Tour10Days;