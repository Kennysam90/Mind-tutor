import React from 'react'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import { Link } from 'react-router-dom'

const CourseDetail = () => {
  return (
    <>
        <>
  {/* Main Wrapper */}
  <div className="main-wrapper">
  <Header />
    {/* Breadcrumb */}
    <div className="breadcrumb-bar text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title mb-2">Course List</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Course List
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Course */}
    <section className="course-content course-list-content">
      <div className="container">
        <div className="row align-items-baseline">
          <div className="col-lg-3 theiaStickySidebar">
            <div className="filter-clear">
              <div className="clear-filter mb-4 pb-lg-2 d-flex align-items-center justify-content-between">
                <h5>
                  <i className="feather-filter me-2" />
                  Filters
                </h5>
                <a href="javascript:void(0);" className="clear-text">
                  Clear
                </a>
              </div>
              <div className="accordion accordion-customicon1 accordions-items-seperate">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingcustomicon1One">
                    <a
                      href="#"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1One"
                      aria-expanded="true"
                      aria-controls="collapsecustomicon1One"
                    >
                      Categories <i className="fa-solid fa-chevron-down" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1One"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingcustomicon1One"
                    data-bs-parent="#accordioncustomicon1Example"
                    style={{}}
                  >
                    <div className="accordion-body">
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Backend (3)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> CSS (2)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Frontend (2)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> General (2)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="select_specialist"
                            defaultChecked=""
                          />
                          <span className="checkmark" /> IT &amp; Software (2)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Photography (2)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Programming Language
                          (3)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check mb-0">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Technology (2)
                        </label>
                      </div>
                      <Link to="/coursecategory" className="see-more-btn">
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingcustomicon1Two">
                    <a
                      href="#"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Two"
                      aria-expanded="true"
                      aria-controls="collapsecustomicon1Two"
                    >
                      Instructors
                      <i className="fa-solid fa-chevron-down" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1Two"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingcustomicon1Two"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body">
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Keny White (10)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Hinata Hyuga (5)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> John Doe (3)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check mb-0">
                          <input
                            type="checkbox"
                            name="select_specialist"
                            defaultChecked=""
                          />
                          <span className="checkmark" /> Nicole Brown
                        </label>
                      </div>
                      <a href="javascript:void(0);" className="see-more-btn">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingcustomicon1Three">
                    <a
                      href="#"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Three"
                      aria-expanded="true"
                      aria-controls="collapsecustomicon1Three"
                    >
                      Price
                      <i className="fa-solid fa-chevron-down" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1Three"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingcustomicon1Three"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body">
                      <div>
                        <label className="custom_check custom_one">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> All (10)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Free (5)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one mb-0">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Paid (3)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingcustomicon1Four">
                    <a
                      href="#"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Four"
                      aria-expanded="true"
                      aria-controls="collapsecustomicon1Four"
                    >
                      Range
                      <i className="fa-solid fa-chevron-down" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1Four"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingcustomicon1Four"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body">
                      <div className="filter-range">
                        <input type="text" className="input-range" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingcustomicon1Five">
                    <a
                      href="#"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Five"
                      aria-expanded="true"
                      aria-controls="collapsecustomicon1Five"
                    >
                      Level
                      <i className="fa-solid fa-chevron-down" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1Five"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingcustomicon1Five"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body">
                      <div>
                        <label className="custom_check custom_one">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" />
                          Beginner (10)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Intermediate (5)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" />
                          Advanced (21)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one mb-0">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" />
                          Expert (3)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingcustomicon1Six">
                    <a
                      href="#"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Six"
                      aria-expanded="true"
                      aria-controls="collapsecustomicon1Six"
                    >
                      Reviews <i className="fa-solid fa-chevron-down" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1Six"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingcustomicon1Six"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body">
                      <div>
                        <label className="custom_check custom_one">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning" />
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-light" />
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-light me-1" />
                          <i className="fa-solid fa-star text-light" />
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-light me-1" />
                          <i className="fa-solid fa-star text-light me-1" />
                          <i className="fa-solid fa-star text-light" />
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one mb-0">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-light me-1" />
                          <i className="fa-solid fa-star text-light me-1" />
                          <i className="fa-solid fa-star text-light me-1" />
                          <i className="fa-solid fa-star text-light" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            {/* Filter */}
            <div className="showing-list mb-4">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="show-result text-center text-lg-start">
                    <h6 className="fw-medium">Showing 1-9 of 50 results</h6>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="show-filter add-course-info">
                    <form action="#">
                      <div className="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">
                        <div className="view-icons mb-2 mb-sm-0">
                          <Link to="/coursegrid" className="grid-view">
                            <i className="feather-grid" />
                          </Link>
                          <Link
                            to="/coursedetail"
                            className="list-view active"
                          >
                            <i className="isax isax-task" />
                          </Link>
                        </div>
                        <select className="form-select">
                          <option>Newly Published </option>
                          <option>Trending Courses</option>
                          <option>Top Rated</option>
                          <option>Free Courses</option>
                        </select>
                        <div className=" search-group">
                          <i className="isax isax-search-normal-1" />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Filter */}
            <div className="row course-list-wrap">
              <div className="col-12">
                <div className="courses-list-item">
                  <div className="d-md-flex align-items-center">
                    <div className="position-relative overflow-hidden rounded-3 card-image">
                      <Link to="/courselist">
                        <img
                          className="img-fluid rounded-3"
                          src="assets/img/course/course-01.jpg"
                          alt="img"
                        />
                      </Link>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                        <a href="javascript:void(0);" className="like">
                          <i className="isax isax-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                      <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm rounded-circle">
                            <a href="#">
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/img/avatar/avatar1.jpg"
                                alt="img"
                              />
                            </a>
                          </div>
                          <p className="ms-2">
                            <a href="instructor-details.html">David Benitez</a>
                          </p>
                        </div>
                        <span>
                          <a className="tag-btn" href="#">
                            Design
                          </a>
                        </span>
                      </div>
                      <h4 className="mt-3 mb-2">
                        <Link to="/courselist">
                          Information About UI/UX Design Degree
                        </Link>
                      </h4>
                      <div className="d-flex align-items-center">
                        <p className="d-flex align-items-center mb-0">
                          <i className="fa-solid fa-star text-warning me-2" />{" "}
                          4.9 (200 Reviews)
                        </p>
                        <span className="dot" />
                        <p>Intermediate</p>
                      </div>
                      <div className="d-flex justify-content-between mt-3 align-items-center">
                        <h5 className="text-secondary">$120</h5>
                        <Link to="/courselist"
                          className="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >
                          Get Course
                          <i className="fs-8 fas fa-angle-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="courses-list-item">
                  <div className="d-md-flex align-items-center">
                    <div className="position-relative overflow-hidden rounded-3 card-image">
                      <Link to="/courselist">
                        <img
                          className="img-fluid rounded-3"
                          src="assets/img/course/course-02.jpg"
                          alt="img"
                        />
                      </Link>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                        <a href="javascript:void(0);" className="like">
                          <i className="isax isax-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                      <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm rounded-circle">
                            <a href="#">
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/img/avatar/avatar2.jpg"
                                alt="img"
                              />
                            </a>
                          </div>
                          <p className="ms-2">
                            <a href="instructor-details.html">Ana Reyes</a>
                          </p>
                        </div>
                        <span>
                          <a href="#" className="tag-btn">
                            Wordpress
                          </a>
                        </span>
                      </div>
                      <h4 className="mt-3 mb-2">
                        <Link to="/courselist">
                          Wordpress for Beginners - Master Wordpress Quickly
                        </Link>
                      </h4>
                      <div className="d-flex align-items-center">
                        <p className="d-flex align-items-center mb-0">
                          <i className="fa-solid fa-star text-warning me-2" />
                          4.4 (160 Reviews)
                        </p>
                        <span className="dot" />
                        <p>Advanced</p>
                      </div>
                      <div className="d-flex justify-content-between mt-3 align-items-center">
                        <h5 className="text-secondary">$140</h5>
                        <Link to="/courselist"
                          className="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >
                          Get Course
                          <i className="fs-8 fas fa-angle-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="courses-list-item">
                  <div className="d-md-flex align-items-center">
                    <div className="position-relative overflow-hidden rounded-3 card-image">
                      <Link to="/courselist">
                        <img
                          className="img-fluid rounded-3"
                          src="assets/img/course/course-03.jpg"
                          alt="img"
                        />
                      </Link>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                        <a href="javascript:void(0);" className="like">
                          <i className="isax isax-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                      <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm rounded-circle">
                            <a href="#">
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/img/avatar/avatar3.jpg"
                                alt="img"
                              />
                            </a>
                          </div>
                          <p className="ms-2">
                            <a href="instructor-details.html">Andrew Pirtle</a>
                          </p>
                        </div>
                        <span>
                          <a href="#" className="tag-btn">
                            Design
                          </a>
                        </span>
                      </div>
                      <h4 className="mt-3 mb-2">
                        <Link to="/courselist">
                          Sketch from A to Z (2024): Become an app designer
                        </Link>
                      </h4>
                      <div className="d-flex align-items-center">
                        <p className="d-flex align-items-center mb-0">
                          <i className="fa-solid fa-star text-warning me-2" />
                          4.6 (170 Reviews)
                        </p>
                        <span className="dot" />
                        <p>Basic</p>
                      </div>
                      <div className="d-flex justify-content-between mt-3 align-items-center">
                        <h5 className="text-secondary">$160</h5>
                        <Link to="/courselist"
                          className="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >
                          Get Course
                          <i className="fs-8 fas fa-angle-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="courses-list-item">
                  <div className="d-md-flex align-items-center">
                    <div className="position-relative overflow-hidden rounded-3 card-image">
                      <Link to="/courselist">
                        <img
                          className="img-fluid rounded-3"
                          src="assets/img/course/course-04.jpg"
                          alt="img"
                        />
                      </Link>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                        <a href="javascript:void(0);" className="like">
                          <i className="isax isax-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                      <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm rounded-circle">
                            <a href="#">
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/img/avatar/avatar4.jpg"
                                alt="img"
                              />
                            </a>
                          </div>
                          <p className="ms-2">
                            <a href="instructor-details.html">Christy Garner</a>
                          </p>
                        </div>
                        <span>
                          <a href="#" className="tag-btn">
                            Programming
                          </a>
                        </span>
                      </div>
                      <h4 className="mt-3 mb-2">
                        <Link to="/courselist">
                          Build Responsive Real World Websites with Crash Course
                        </Link>
                      </h4>
                      <div className="d-flex align-items-center">
                        <p className="d-flex align-items-center mb-0">
                          <i className="fa-solid fa-star text-warning me-2" />
                          4.2 (220 Reviews)
                        </p>
                        <span className="dot" />
                        <p>Advanced</p>
                      </div>
                      <div className="d-flex justify-content-between mt-3 align-items-center">
                        <h5 className="text-secondary">$200</h5>
                        <Link to="/courselist"
                          className="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >
                          Get Course
                          <i className="fs-8 fas fa-angle-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="courses-list-item">
                  <div className="d-md-flex align-items-center">
                    <div className="position-relative overflow-hidden rounded-3 card-image">
                      <Link to="/courselist">
                        <img
                          className="img-fluid rounded-3"
                          src="assets/img/course/course-05.jpg"
                          alt="img"
                        />
                      </Link>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                        <a href="javascript:void(0);" className="like">
                          <i className="isax isax-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                      <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm rounded-circle">
                            <a href="#">
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/img/avatar/avatar5.jpg"
                                alt="img"
                              />
                            </a>
                          </div>
                          <p className="ms-2">
                            <a href="instructor-details.html">Justin Gregory</a>
                          </p>
                        </div>
                        <span>
                          <a href="#" className="tag-btn">
                            Programming
                          </a>
                        </span>
                      </div>
                      <h4 className="mt-3 mb-2">
                        <Link to="/courselist">
                          Learn JavaScript and Express to become a Expert
                        </Link>
                      </h4>
                      <div className="d-flex align-items-center">
                        <p className="d-flex align-items-center mb-0">
                          <i className="fa-solid fa-star text-warning me-2" />
                          4.4 (180 Reviews)
                        </p>
                        <span className="dot" />
                        <p>Intermediate</p>
                      </div>
                      <div className="d-flex justify-content-between mt-3 align-items-center">
                        <h5 className="text-secondary">$130</h5>
                        <Link to="/courselist"
                          className="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >
                          Get Course
                          <i className="fs-8 fas fa-angle-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="courses-list-item">
                  <div className="d-md-flex align-items-center">
                    <div className="position-relative overflow-hidden rounded-3 card-image">
                      <Link to="/courselist">
                        <img
                          className="img-fluid rounded-3"
                          src="assets/img/course/course-06.jpg"
                          alt="img"
                        />
                      </Link>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                        <a href="javascript:void(0);" className="like">
                          <i className="isax isax-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                      <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm rounded-circle">
                            <a href="#">
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/img/avatar/avatar6.jpg"
                                alt="img"
                              />
                            </a>
                          </div>
                          <p className="ms-2">
                            <a href="instructor-details.html">Carolyn Hines</a>
                          </p>
                        </div>
                        <span>
                          <a href="#" className="tag-btn">
                            Programming
                          </a>
                        </span>
                      </div>
                      <h4 className="mt-3 mb-2">
                        <Link to="/courselist">
                          Introduction to Python Programming
                        </Link>
                      </h4>
                      <div className="d-flex align-items-center">
                        <p className="d-flex align-items-center mb-0">
                          <i className="fa-solid fa-star text-warning me-2" />
                          4.7 (130 Reviews)
                        </p>
                        <span className="dot" />
                        <p>Expert</p>
                      </div>
                      <div className="d-flex justify-content-between mt-3 align-items-center">
                        <h5 className="text-secondary">$150</h5>
                        <Link to="/courselist"
                          className="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >
                          Get Course
                          <i className="fs-8 fas fa-angle-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /pagination */}
            <div className="row align-items-center">
              <div className="col-md-2">
                <p className="pagination-text">Page 1 of 2</p>
              </div>
              <div className="col-md-10">
                <ul className="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
                  <li className="page-item prev">
                    <a
                      className="page-link"
                      href="javascript:void(0)"
                      tabIndex={-1}
                    >
                      <i className="fas fa-angle-left" />
                    </a>
                  </li>
                  <li className="page-item first-page active">
                    <a className="page-link" href="javascript:void(0)">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      3
                    </a>
                  </li>
                  <li className="page-item next">
                    <a className="page-link" href="javascript:void(0)">
                      <i className="fas fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /pagination */}
          </div>
        </div>
      </div>
    </section>
    {/* /Course */}
    {/* Footer */}
    <Footer />
    {/* /Footer */}
  </div>
  {/* /Main Wrapper */}
</>

    </>
  )
}

export default CourseDetail