import React from "react";

const members = [
  {
    name: "Anura Bogahalanda",
    role: "Founder & Lead Guide",
    image: "/images/person_1.jpg",
    bio: "Anura has over 15 years of experience guiding travelers across Sri Lanka, sharing his passion for culture and adventure.",
  },
  {
    name: "Sandun Silva",
    role: "Cultural Expert",
    image: "/images/person_2.jpg",
    bio: "Sandun specializes in Sri Lankan history and traditions, making every tour an immersive experience.",
  },
  {
    name: "Sudira Jayasuriya",
    role: "Wildlife Specialist",
    image: "/images/person_3.jpg",
    bio: "Sudira is your go-to for safaris and nature tours, with deep knowledge of Sri Lanka’s national parks.",
  },
  {
    name: "Malihta Fernando",
    role: "Travel Coordinator",
    image: "/images/person_4.jpg",
    bio: "Malihta ensures every trip runs smoothly, handling logistics and custom requests with care.",
  },
];

const Team = () => {
  return (
    <section className="ftco-section ">
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div className="col-md-8 heading-section text-center" data-aos="fade-up">
            <span className="subheading">Meet Our Team</span>
            <h2 className="mb-4">Local Experts & Guides</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {members.map((member, idx) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4 d-flex align-items-stretch" key={idx}>
              <div className="card shadow-sm w-100 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img-top rounded-circle mx-auto mt-4"
                  style={{ width: 120, height: 120, objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1" style={{ color: "#135c63" }}>{member.name}</h5>
                  <p className="card-subtitle mb-2 text-muted">{member.role}</p>
                  <p className="card-text" style={{ fontSize: 15 }}>{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
