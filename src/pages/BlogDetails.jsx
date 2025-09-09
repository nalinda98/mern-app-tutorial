import React from "react";
import Header from "../components/Header";

const BlogDetails = () => (
  <>
    <Header title={"Blog Details"} subtitle={"For Your Info"} />
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          {/* Blog Detail Start */}
          <div className="col-lg-8">
            <div className="mb-5">
              <img
                className="img-fluid w-100 rounded mb-5"
                src="img/blog-1.jpg"
                alt=""
              />
              <h1 className="mb-4">
                Diam dolor est labore duo ipsum clita sed et lorem tempor duo
              </h1>
              <p>
                Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus
                rebum et lorem magna kasd, stet amet magna accusam consetetur
                eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.
                Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                aliquyam ut et vero clita. Diam sea sea no sed dolores diam
                nonumy, gubergren sit stet no diam kasd vero.
              </p>
              <p>
                Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
                aliquyam dolores vero stet consetetur elitr takimata rebum
                sanctus. Sit sed accusam stet sit nonumy kasd diam dolores,
                sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo
                sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo
                et, clita lorem sit vero amet amet est dolor elitr, stet et no
                diam sit. Dolor erat justo dolore sit invidunt.
              </p>
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
                voluptua tempor invidunt at est sanctus sanctus. Clita dolores
                sit kasd diam takimata justo diam lorem sed. Magna amet sed
                rebum eos. Clita no magna no dolor erat diam tempor rebum
                consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No
                at tempor sea diam kasd, takimata ea nonumy elitr sadipscing
                gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit
                amet ut ut, voluptua diam dolores at sadipscing stet. Clita
                dolor amet dolor ipsum vero ea ea eos.
              </p>
              <p>
                Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
                aliquyam dolores vero stet consetetur elitr takimata rebum
                sanctus. Sit sed accusam stet sit nonumy kasd diam dolores,
                sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo
                sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo
                et, clita lorem sit vero amet amet est dolor elitr, stet et no
                diam sit. Dolor erat justo dolore sit invidunt.
              </p>
            </div>
            {/* Blog Detail End */}
          </div>
          {/* Blog Detail End */}

          {/* Sidebar Start */}
          <div className="col-lg-4">
            {/* Search Form Start */}
            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Keyword"
                />
                <button className="btn btn-primary px-4">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
            {/* Search Form End */}

            {/* Category Start */}
            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="mb-0">Categories</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                <a
                  className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                  href="#"
                >
                  <i className="bi bi-arrow-right me-2"></i>Web Design
                </a>
                <a
                  className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                  href="#"
                >
                  <i className="bi bi-arrow-right me-2"></i>Web Development
                </a>
                <a
                  className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                  href="#"
                >
                  <i className="bi bi-arrow-right me-2"></i>Web Development
                </a>
                <a
                  className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                  href="#"
                >
                  <i className="bi bi-arrow-right me-2"></i>Keyword Research
                </a>
                <a
                  className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                  href="#"
                >
                  <i className="bi bi-arrow-right me-2"></i>Email Marketing
                </a>
              </div>
            </div>
            {/* Category End */}

            {/* Recent Post Start */}
            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="mb-0">Recent Post</h3>
              </div>
              {[1, 2, 3, 1, 2, 3].map((i, idx) => (
                <div className="d-flex rounded overflow-hidden mb-3" key={idx}>
                  <img
                    className="img-fluid"
                    src={`img/blog-${i}.jpg`}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                    alt=""
                  />
                  <a
                    href=""
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Lorem ipsum dolor sit amet adipis elit
                  </a>
                </div>
              ))}
            </div>
            {/* Recent Post End */}

            {/* Image Start */}
            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
              <img src="img/blog-1.jpg" alt="" className="img-fluid rounded" />
            </div>
            {/* Image End */}

            {/* Tags Start */}
            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="mb-0">Tag Cloud</h3>
              </div>
              <div className="d-flex flex-wrap m-n1">
                {[
                  "Design",
                  "Development",
                  "Marketing",
                  "SEO",
                  "Writing",
                  "Consulting",
                  "Design",
                  "Development",
                  "Marketing",
                  "SEO",
                  "Writing",
                  "Consulting",
                ].map((tag, idx) => (
                  <a href="" className="btn btn-light m-1" key={idx}>
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            {/* Tags End */}

            {/* Plain Text Start */}
            <div className="wow slideInUp" data-wow-delay="0.1s">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="mb-0">Plain Text</h3>
              </div>
              <div className="bg-light text-center" style={{ padding: 30 }}>
                <p>
                  Vero sea et accusam justo dolor accusam lorem consetetur,
                  dolores sit amet sit dolor clita kasd justo, diam accusam no
                  sea ut tempor magna takimata, amet sit et diam dolor ipsum
                  amet diam
                </p>
                <a href="" className="btn btn-primary py-2 px-4">
                  Read More
                </a>
              </div>
            </div>
            {/* Plain Text End */}
          </div>
          {/* Sidebar End */}
        </div>
      </div>
    </div>
  </>
);

export default BlogDetails;
