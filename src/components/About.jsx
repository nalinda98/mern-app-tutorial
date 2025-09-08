import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="ftco-section services-section">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
            <div className="w-100" data-aos="fade-left">
              <span className="subheading">Welcome to Sri Lanka</span>
              <h2 className="mb-4">
                It's time to explore the Pearl of the Indian Ocean
              </h2>
              <p>
                Discover the wonders of Sri Lanka — from golden beaches and lush
                rainforests to ancient ruins and sacred temples. A land rich in
                culture, history, and natural beauty.
              </p>
              <p>
                Whether you crave adventure, relaxation, or spiritual
                enlightenment, Sri Lanka offers unforgettable experiences for
                every traveler.
              </p>
              <p>
                <Link to="tours" smooth={true} duration={1000}>
                  {" "}
                  <button className="btn btn-primary py-3 px-4">
                    Search Destination
                  </button>
                </Link>
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              {services.map((service, index) => (
                <div
                  className="col-md-12 col-lg-6 d-flex align-self-stretch"
                  key={index}
                >
                  <div
                    className={`services services-1 ${service.color} d-block img`}
                    style={{ backgroundImage: `url(${service.image})` }}
                    data-aos="fade-up"
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className={service.icon} />
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    image: "/images/services-1.jpg",
    icon: "flaticon-paragliding",
    title: "Adventure Activities",
    text: "Experience surfing in Arugam Bay, hiking in Ella, and wildlife safaris in Yala National Park.",
    color: "color-1",
  },
  {
    image: "/images/services-2.jpg",
    icon: "flaticon-route",
    title: "Custom Travel Plans",
    text: "From coastal getaways to cultural city tours, we tailor your Sri Lankan journey your way.",
    color: "color-2",
  },
  {
    image: "/images/services-3.jpg",
    icon: "flaticon-tour-guide",
    title: "Local Tour Guides",
    text: "Our knowledgeable local guides help you uncover hidden gems and historical landmarks.",
    color: "color-3",
  },
  {
    image: "/images/services-4.jpg",
    icon: "flaticon-map",
    title: "Location Experts",
    text: "Get the best spots to visit across Sri Lanka, including Sigiriya, Galle Fort, and Nuwara Eliya.",
    color: "color-4",
  },
];

export default About;
