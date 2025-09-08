import React from "react";

const ContactPart1 = () => {
  return (
    <section className="ftco-section ftco-no-pb contact-section mb-4">
      <div className="container">
        <div className="row d-flex contact-info">
          {contactDetails.map((detail, index) => (
            <div className="col-md-3 d-flex" key={index}>
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className={`fa ${detail.icon}`} />
                </div>
                <h3 className="mb-2">{detail.title}</h3>
                <p>
                  {detail.link ? (
                    <a href={detail.href}>{detail.text}</a>
                  ) : (
                    detail.text
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

const contactDetails = [
  {
    icon: "fa-map-marker",
    title: "Address",
    text: "135 A, Bogahalanda Walawwa, Galagedara",
  },
  {
    icon: "fa-phone",
    title: "Contact Number",
    text: "+94 77 72 84 460",
    href: "tel://+94777284460",
    link: true,
  },
  {
    icon: "fa-paper-plane",
    title: "Email Address",
    text: "info@kandytours.lk",
    href: "mailto:info@kandytours.lk",
    link: true,
  },
  {
    icon: "fa-globe",
    title: "Website",
    text: "kandytours.lk",
    href: "https://kandytours.lk",
    link: true,
  },
];

export default ContactPart1;
