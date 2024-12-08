import React from "react";

export const Contact = () => {
  return (
    <div className="container pt-5 text-center w-50">
      <h2>Contact Us</h2>
      <p className="mt-3">
        We are here to help you with any questions or concerns you may have. Whether you need support, guidance, or just want to learn more about our services, don’t hesitate to get in touch.
      </p>
      <p>
        Our team is dedicated to providing prompt and professional assistance. Feel free to reach out to us anytime, and we’ll ensure your inquiries are handled with care and attention.
      </p>
      <p>
        For your convenience, you can contact us directly through WhatsApp. It's quick, easy, and ensures you receive a response as soon as possible.
      </p>
      <a
        href="https://wa.me/+94769890099"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success mt-3"
      >
        Contact Us on WhatsApp
      </a>
    </div>
  );
};
