import React from "react";

const features = [
  {
    icon: "fa fa-globe",
    text: "Nearly 100% of our clients and international tourists experiencing our service rated us excellent.",
  },
  {
    icon: "fa fa-handshake-o",
    text: "Integrity first is always our working principle, we run the registered travel company in alignment with ethical practices.",
  },
  {
    icon: "fa fa-users",
    text: "We have both on-road and off-road dedicated teams and the staff of regional travelling experts and consultants.",
  },
  {
    icon: "fa fa-camera",
    text: "We offer you tours to expose to first-hand and fascinating experiences, deepen your lifelong understanding.",
  },
  {
    icon: "fa fa-heart-o",
    text: "Choosing our service, you have nothing to worry about safety since our team will go along with you as a close friend and indeed take care of you.",
  },
  {
    icon: "fa fa-usd",
    text: "Our tours often open up with local prices through secure payment methods but the quality may go beyond your expectation. Just make a small deposit to book your tours.",
  },
];

const WhyChoose = () => {
  return (
    <section className="ftco-section bg-light">
      <div className=" " style={{
        width: "98%",
        margin: "0 auto",
      }} >
        <div className="row justify-content-center pb-4">
          <div className="col-md-8 heading-section text-center" data-aos="fade-up">
            <span className="subheading">Why Choose Us</span>
            <h2 className="mb-4">Experience the Best of Sri Lanka</h2>
          </div>
        </div>
        <div className="row text-center">
          {features.map((feature, idx) => (
            <div className="col-12 col-md-6 col-lg-2 d-flex flex-column align-items-center mb-4" key={idx}>
              <div
                className="d-flex align-items-center justify-content-center mb-3"
                style={{ fontSize: 48, color: "#f4a940" }}
              >
                <span className={feature.icon}></span>
              </div>
              <div style={{ fontSize: 16, color: "#333" }}>{feature.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;