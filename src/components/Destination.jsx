import React from "react";
import Slider from "react-slick";

const destinations = [
  { name: "Sigiriya", tours: 56, image: "/images/seegiriya.png" },
  { name: "Polonnaruwa", tours: 34, image: "/images/polonnaru.jpg" },
  { name: "Trincomalee", tours: 61, image: "/images/pegion.webp" },
  { name: "Galle", tours: 37, image: "/images/galle-fort-1050x700-1.jpg" },
  { name: "Mirissa", tours: 54, image: "/images/Mirissa.jpg" },
];

const Destination = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    width: "100%",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="ftco-section img ftco-select-destination"
      style={{ backgroundImage: "url(/images/bg_3.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div
            className="col-md-12 heading-section text-center"
            data-aos="fade-up"
          >
            <span className="subheading">Pacific Provide Places</span>
            <h2 className="mb-4">Select Your Destination</h2>
          </div>
        </div>
      </div>

      <div className="w-100 d-flex justify-content-center">
        <div style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
          {/* Slider for destinations */}
          <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
            {destinations.map((place, index) => (
              <div className="item px-2" key={index}>
                <div className="project-destination">
                  <div
                    className="img d-block"
                    style={{
                      backgroundImage: `url(${place.image})`,
                      height: "450px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className="text text-white text-center d-flex align-items-end justify-content-center h-100 p-3 "
                      style={{ background: "rgba(0, 0, 0, 0.5)" }}
                    >
                      <div>
                        <h3 style={{
                          marginTop: "1px",
                        }}>{place.name}</h3>
                        <span>{place.tours} Tours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};



export default Destination;
