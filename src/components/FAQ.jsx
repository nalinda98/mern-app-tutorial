import React from "react";

const faqs = [
  {
    question: "What are the top adventure activities in Sri Lanka?",
    answer:
      "Popular adventure activities include surfing in Arugam Bay, hiking in Ella, and wildlife safaris in Yala National Park.",
  },
  {
    question: "Can I customize my travel plan in Sri Lanka?",
    answer:
      "Yes! We offer custom travel plans from coastal getaways to cultural city tours, tailored to your preferences.",
  },
  {
    question: "Are local tour guides available?",
    answer:
      "Our knowledgeable local guides help you uncover hidden gems and historical landmarks throughout Sri Lanka.",
  },
  {
    question: "What are the must-visit locations in Sri Lanka?",
    answer:
      "Top spots include Sigiriya, Galle Fort, Nuwara Eliya, and many more beautiful destinations across the island.",
  },
  {
    question: "Is Sri Lanka suitable for relaxation and spiritual travel?",
    answer:
      "Sri Lanka offers golden beaches for relaxation and sacred temples for spiritual enlightenment, making it perfect for all types of travelers.",
  },
];

const FAQ = () => {
  return (
    <section className="ftco-section ">
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div className="col-md-8 heading-section text-center" data-aos="fade-up">
            <span className="subheading">Frequently Asked Questions</span>
            <h2 className="mb-4">Sri Lanka Travel FAQ</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, idx) => (
                <div className="card mb-3" key={idx}>
                  <div className="card-header" id={`heading${idx}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target={`#collapse${idx}`}
                        aria-expanded={idx === 0 ? "true" : "false"}
                        aria-controls={`collapse${idx}`}
                        style={{ color: "#f4a940", fontWeight: 500 }}
                      >
                        {faq.question}
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse${idx}`}
                    className={`collapse${idx === 0 ? " show" : ""}`}
                    aria-labelledby={`heading${idx}`}
                    data-parent="#faqAccordion"
                  >
                    <div className="card-body">{faq.answer}</div>
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

export default FAQ;