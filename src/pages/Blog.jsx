import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import blogDetails from "../utils/blogdetails";

const Blog = () => (
  <>
    <Header title={"Blog"} subtitle={"For Your Info"} />
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          {/* Blog list Start */}
          <div className="col-lg-8">
            <div className="row g-5">
              {blogDetails.map((blog, idx) => (
                <div
                  className="col-md-6 wow slideInUp"
                  data-wow-delay={idx % 2 === 0 ? "0.6s" : "0.1s"}
                  key={blog.id}
                >
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src={blog.image}
                        alt={blog.title}
                      />
                      <span
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                      >
                        {blog.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>
                          {blog.author}
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          {blog.date}
                        </small>
                      </div>
                      <h4 className="mb-3">{blog.title}</h4>
                      <p>
                        {blog.content[0].slice(0, 70)}...
                      </p>
                      <Link className="text-uppercase" to={`/blog/${blog.id}`}>
                        Read More <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-12 wow slideInUp" data-wow-delay="0.1s">
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-lg m-0">
                    <li className="page-item disabled">
                      <a
                        className="page-link rounded-0"
                        href="#"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">
                          <i className="bi bi-arrow-left"></i>
                        </span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link rounded-0"
                        href="#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* Blog list End */}

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

export default Blog;
