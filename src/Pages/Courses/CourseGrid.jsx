import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import { Link } from 'react-router-dom'

const CourseGrid = () => {
  return (
    <>
  {/* Main Wrapper */}
  <div className="main-wrapper">
   <Header />
    {/* Breadcrumb */}
    <div className="breadcrumb-bar text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title mb-2">Course Grid</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Course Grid
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Course */}
    <section className="course-content">
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
                      aria-expanded="false"
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
                      aria-expanded="false"
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
                      aria-expanded="false"
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
                      aria-expanded="false"
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
                      aria-expanded="false"
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
                      aria-expanded="false"
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
                          <Link
                            to="/coursegrid"
                            className="grid-view active"
                          >
                            <i className="feather-grid" />
                          </Link>
                          <Link to="/coursedetail" className="list-view">
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
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="course-item-two course-item mx-0">
                  <div className="course-img">
                    <Link to="/courselist">
                      <img
                        src="assets/img/course/course-01.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                      <div className="badge text-bg-danger">15% off</div>
                      <a
                        href="javascript:void(0);"
                        className="fav-icon ms-auto"
                      >
                        <i className="isax isax-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="d-flex justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <a
                          href="instructor-details.html"
                          className="avatar avatar-sm"
                        >
                          <img
                            src="assets/img/user/user-29.jpg"
                            alt="img"
                            className="img-fluid avatar avatar-sm rounded-circle"
                          />
                        </a>
                        <div className="ms-2">
                          <a
                            href="instructor-details.html"
                            className="link-default fs-14"
                          >
                            Brenda Slaton
                          </a>
                        </div>
                      </div>
                      <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                        Design
                      </span>
                    </div>
                    <h6 className="title mb-2">
                      <Link to="/courselist">
                        Information About UI/UX Design Degree
                      </Link>
                    </h6>
                    <p className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-star text-warning me-2" />
                      4.9 (200 Reviews)
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="text-secondary mb-0">$120</h5>
                      <Link 
                        to="/courselist"
                        className="btn btn-dark btn-sm d-inline-flex align-items-center"
                      >
                        View Course
                        <i className="isax isax-arrow-right-3 ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="course-item-two course-item mx-0">
                  <div className="course-img">
                    <Link to="/courselist">
                      <img
                        src="assets/img/course/course-02.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                      <a
                        href="javascript:void(0);"
                        className="fav-icon ms-auto"
                      >
                        <i className="isax isax-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="d-flex justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <a
                          href="instructor-details.html"
                          className="avatar avatar-sm"
                        >
                          <img
                            src="assets/img/user/user-30.jpg"
                            alt="img"
                            className="img-fluid avatar avatar-sm rounded-circle"
                          />
                        </a>
                        <div className="ms-2">
                          <a
                            href="instructor-details.html"
                            className="link-default fs-14"
                          >
                            Ana Reyes
                          </a>
                        </div>
                      </div>
                      <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                        Wordpress
                      </span>
                    </div>
                    <h6 className="title mb-2">
                      <Link to="/courselist">
                        Wordpress for Beginners - Master Wordpress Quickly
                      </Link>
                    </h6>
                    <p className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-star text-warning me-2" />
                      4.4 (160 Reviews)
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="text-secondary mb-0">$140</h5>
                      <Link 
                        to="/courselist"
                        className="btn btn-dark btn-sm d-inline-flex align-items-center"
                      >
                        View Course
                        <i className="isax isax-arrow-right-3 ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="course-item-two course-item mx-0">
                  <div className="course-img">
                    <Link to="/courselist">
                      <img
                        src="assets/img/course/course-03.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                      <a
                        href="javascript:void(0);"
                        className="fav-icon ms-auto"
                      >
                        <i className="isax isax-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="d-flex justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <a
                          href="instructor-details.html"
                          className="avatar avatar-sm"
                        >
                          <img
                            src="assets/img/user/user-31.jpg"
                            alt="img"
                            className="img-fluid avatar avatar-sm rounded-circle"
                          />
                        </a>
                        <div className="ms-2">
                          <a
                            href="instructor-details.html"
                            className="link-default fs-14"
                          >
                            Andrew Pirtle
                          </a>
                        </div>
                      </div>
                      <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                        Design
                      </span>
                    </div>
                    <h6 className="title mb-2">
                      <Link to="/courselist">
                        Sketch from A to Z (2024): Become an app designer
                      </Link>
                    </h6>
                    <p className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-star text-warning me-2" />
                      4.4 (160 Reviews)
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="text-secondary mb-0">$140</h5>
                      <Link
                         to="/courselist"
                        className="btn btn-dark btn-sm d-inline-flex align-items-center"
                      >
                        View Course
                        <i className="isax isax-arrow-right-3 ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="course-item-two course-item mx-0">
                  <div className="course-img">
                    <Link to="/courselist">
                      <img
                        src="assets/img/course/course-04.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                      <a
                        href="javascript:void(0);"
                        className="fav-icon ms-auto"
                      >
                        <i className="isax isax-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="d-flex justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <a
                          href="instructor-details.html"
                          className="avatar avatar-sm"
                        >
                          <img
                            src="assets/img/user/user-32.jpg"
                            alt="img"
                            className="img-fluid avatar avatar-sm rounded-circle"
                          />
                        </a>
                        <div className="ms-2">
                          <a
                            href="instructor-details.html"
                            className="link-default fs-14"
                          >
                            Christy Garner
                          </a>
                        </div>
                      </div>
                      <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                        Programming
                      </span>
                    </div>
                    <h6 className="title mb-2">
                      <Link to="/courselist">
                        Build Responsive Real World Websites with Crash Course
                      </Link>
                    </h6>
                    <p className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-star text-warning me-2" />
                      4.2 (220 Reviews)
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="text-secondary mb-0">$200</h5>
                      <Link
                         to="/courselist"
                        className="btn btn-dark btn-sm d-inline-flex align-items-center"
                      >
                        View Course
                        <i className="isax isax-arrow-right-3 ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="course-item-two course-item mx-0">
                  <div className="course-img">
                    <Link to="/courselist">
                      <img
                        src="assets/img/course/course-05.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                      <a
                        href="javascript:void(0);"
                        className="fav-icon ms-auto"
                      >
                        <i className="isax isax-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="d-flex justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <a
                          href="instructor-details.html"
                          className="avatar avatar-sm"
                        >
                          <img
                            src="assets/img/user/user-32.jpg"
                            alt="img"
                            className="img-fluid avatar avatar-sm rounded-circle"
                          />
                        </a>
                        <div className="ms-2">
                          <a
                            href="instructor-details.html"
                            className="link-default fs-14"
                          >
                            Justin Gregory
                          </a>
                        </div>
                      </div>
                      <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                        Programming
                      </span>
                    </div>
                    <h6 className="title mb-2">
                      <Link to="/courselist">
                        Learn JavaScript and Express to become a Expert
                      </Link>
                    </h6>
                    <p className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-star text-warning me-2" />
                      4.4 (180 Reviews)
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="text-secondary mb-0">$130</h5>

                      <Link
                         to="/courselist"
                        className="btn btn-dark btn-sm d-inline-flex align-items-center"
                      >
                        View Course
                        <i className="isax isax-arrow-right-3 ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="course-item-two course-item mx-0">
                  <div className="course-img">
                    <Link to="/courselist">
                      <img
                        src="assets/img/course/course-06.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                      <a
                        href="javascript:void(0);"
                        className="fav-icon ms-auto"
                      >
                        <i className="isax isax-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="d-flex justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <a
                          href="instructor-details.html"
                          className="avatar avatar-sm"
                        >
                          <img
                            src="assets/img/user/user-33.jpg"
                            alt="img"
                            className="img-fluid avatar avatar-sm rounded-circle"
                          />
                        </a>
                        <div className="ms-2">
                          <a
                            href="instructor-details.html"
                            className="link-default fs-14"
                          >
                            Carolyn Hines
                          </a>
                        </div>
                      </div>
                      <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                        Programming
                      </span>
                    </div>
                    <h6 className="title mb-2">
                      <Link to="/courselist">
                        Introduction to Python Programming
                      </Link>
                    </h6>
                    <p className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-star text-warning me-2" />
                      4.4 (180 Reviews)
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="text-secondary mb-0">$130</h5>
                      <Link
                        to="/courselist"
                        className="btn btn-dark btn-sm d-inline-flex align-items-center"
                      >
                        View Course
                        <i className="isax isax-arrow-right-3 ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="course-item-two course-item mx-0">
                  <div className="course-img">
                   <Link to="/courselist">
                      <img
                        src="assets/img/course/course-07.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                      <a
                        href="javascript:void(0);"
                        className="fav-icon ms-auto"
                      >
                        <i className="isax isax-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="d-flex justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <a
                          href="instructor-details.html"
                          className="avatar avatar-sm"
                        >
                          <img
                            src="assets/img/user/user-34.jpg"
                            alt="img"
                            className="img-fluid avatar avatar-sm rounded-circle"
                          />
                        </a>
                        <div className="ms-2">
                          <a
                            href="instructor-details.html"
                            className="link-default fs-14"
                          >
                            Rafael Miller
                          </a>
                        </div>
                      </div>
                      <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                        Programming
                      </span>
                    </div>
                    <h6 className="title mb-2">
                      <Link to="/courselist">
                        Build Responsive Websites with HTML5 and CSS3
                      </Link>
                    </h6>
                    <p className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-star text-warning me-2" />
                      4.4 (180 Reviews)
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="text-secondary mb-0">$170</h5>
                      <Link 
                        to="/courselist"
                        className="btn btn-dark btn-sm d-inline-flex align-items-center"
                      >
                        View Course
                        <i className="isax isax-arrow-right-3 ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="course-item-two course-item mx-0">
                  <div className="course-img">
                    <Link to="/courselist">
                      <img
                        src="assets/img/course/course-08.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                      <a
                        href="javascript:void(0);"
                        className="fav-icon ms-auto"
                      >
                        <i className="isax isax-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="d-flex justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <a
                          href="instructor-details.html"
                          className="avatar avatar-sm"
                        >
                          <img
                            src="assets/img/user/user-35.jpg"
                            alt="img"
                            className="img-fluid avatar avatar-sm rounded-circle"
                          />
                        </a>
                        <div className="ms-2">
                          <a
                            href="instructor-details.html"
                            className="link-default fs-14"
                          >
                            Nancy Duarte
                          </a>
                        </div>
                      </div>
                      <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                        Design
                      </span>
                    </div>
                    <h6 className="title mb-2">
                      <Link to="/courselist">
                        Information About Photoshop Design Degree
                      </Link>
                    </h6>
                    <p className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-star text-warning me-2" />
                      4.4 (180 Reviews)
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="text-secondary mb-0">$170</h5>
                      <Link 
                        to="/courselist"
                        className="btn btn-dark btn-sm d-inline-flex align-items-center"
                      >
                        View Course
                        <i className="isax isax-arrow-right-3 ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="course-item-two course-item mx-0">
                  <div className="course-img">
                    <Link to="/courselist">
                      <img
                        src="assets/img/course/course-09.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                      <a
                        href="javascript:void(0);"
                        className="fav-icon ms-auto"
                      >
                        <i className="isax isax-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="d-flex justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <a
                          href="instructor-details.html"
                          className="avatar avatar-sm"
                        >
                          <img
                            src="assets/img/user/user-36.jpg"
                            alt="img"
                            className="img-fluid avatar avatar-sm rounded-circle"
                          />
                        </a>
                        <div className="ms-2">
                          <a
                            href="instructor-details.html"
                            className="link-default fs-14"
                          >
                            James Kagan
                          </a>
                        </div>
                      </div>
                      <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                        Design
                      </span>
                    </div>
                    <h6 className="title mb-2">
                      <Link to="/courselist">
                        C# Developers Double Your Coding with Visual Studio
                      </Link>
                    </h6>
                    <p className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-star text-warning me-2" />
                      4.4 (180 Reviews)
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="text-secondary mb-0">$180</h5>
                      <Link
                         to="/courselist"
                        className="btn btn-dark btn-sm d-inline-flex align-items-center"
                      >
                        View Course
                        <i className="isax isax-arrow-right-3 ms-1" />
                      </Link>
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
  )
}

export default CourseGrid