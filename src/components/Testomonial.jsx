import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    img: "img/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    img: "img/testimonial-2.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    img: "img/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    img: "img/testimonial-4.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 1 }
    }
  ],
  appendDots: dots => (
    <div style={{ borderRadius: "0px", padding: "10px" }}>
      <ul style={{ margin: "0px", display: "flex", justifyContent: "center", gap: "8px" }}> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: "16px",
        height: "8px",
        borderRadius: "4px",
        background: "#ddd",
        margin: "0 auto",
        transition: "all 0.4s cubic-bezier(.4,0,.2,1)"
      }}
    ></div>
  )
};

const dotActiveStyle = `
.testimonial-carousel .slick-dots li div {
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
}
.testimonial-carousel .slick-dots li.slick-active div {
  width: 32px !important;
  background: #34AD54 !important;
  border-radius: 6px !important;
}
`;

const Testomonial = () => (
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <style>{dotActiveStyle}</style>
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-4 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
        <h1 className="mb-0">
          What Our Clients Say About Our Digital Services
        </h1>
      </div>
      <Slider {...settings} className="testimonial-carousel">
        {testimonials.map((t, idx) => (
          <div key={idx}>
            <div
              className="testimonial-item my-4"
              style={{
                background: "#e9f7fe",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                minHeight: 250,
                transition: "background 0.3s"
              }}
            >
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5" style={{ borderColor: "#e0e0e0" }}>
                <img
                  className="img-fluid rounded"
                  src={t.img}
                  style={{ width: 60, height: 60, objectFit: "cover" }}
                  alt={t.name}
                />
                <div className="ps-4">
                  <h4 className="mb-1" style={{ color: "#34AD54" }}>{t.name}</h4>
                  <small className="text-uppercase text-secondary">{t.profession}</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5 text-secondary" style={{ fontWeight: 500 }}>
                {t.text}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default Testomonial;