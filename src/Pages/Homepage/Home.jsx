
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
   <>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    	{/* Header */}
<Header />
{/* /Header */}

    {/* banner */}
    <section className="banner-section">
      <img
        className="img-fluid d-none d-lg-flex banner-bg1"
        src="assets/img/bg/bg-15.png"
        alt="img"
      />
      <img
        className="img-fluid d-none d-lg-flex banner-bg2"
        src="assets/img/bg/bg-16.png"
        alt="img"
      />
      <img
        className="img-fluid d-none d-lg-flex banner-bg3"
        src="assets/img/bg/bg-17.png"
        alt="img"
      />
      <img
        className="img-fluid d-none d-lg-flex banner-bg4"
        src="assets/img/bg/bg-18.png"
        alt="img"
      />
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-7">
            <div className="banner-content pe-xxl-5">
              <span className="hero-title">The Leader in Online Learning</span>
              <h1 className="mb-4 text-white">
                Find the Best <span>Courses</span> from the Best{" "}
                <span>Mentors</span> Around the World
              </h1>
              <p className="fs-lg text-center text-md-start pb-2 pb-md-3 mb-4">
                Our specialized online courses are designed to bring the
                classroom experience to you, no matter where you are.
              </p>
              <form
                className="banner-search"
                action="https://dreamslms.dreamstechnologies.com/html/template/course-list.html"
              >
                <div className="dropdown">
                  <a
                    className="hero-dropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Category{" "}
                    <i className="isax isax-arrow-down5 fs-12" />
                  </a>
                  <ul className="dropdown-menu p-1">
                    <li>
                      <a className="dropdown-item" href="#">
                        Design
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Programming
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Marketing
                      </a>
                    </li>
                  </ul>
                </div>
                <input
                  type="text"
                  name="search"
                  className="border-0 form-control p-0"
                  placeholder="Search for Courses, Instructors"
                />
                <button type="submit" className="btn btn-secondary ms-auto">
                  <i className="isax isax-arrow-right-1" />
                </button>
              </form>
              <div className="d-flex align-items-center gap-4 justify-content-lg-between justify-content-center flex-wrap">
                <div className="counter-item">
                  <div className="counter-icon flex-shrink-0">
                    <img src="assets/img/icons/icon-32.svg" alt="img" />
                  </div>
                  <div className="count-content">
                    <h5 className="text-purple">
                      <span className="count-digit">10</span>K
                    </h5>
                    <p>Online Courses</p>
                  </div>
                </div>
                <div className="counter-item">
                  <div className="counter-icon flex-shrink-0">
                    <img src="assets/img/icons/icon-33.svg" alt="img" />
                  </div>
                  <div className="count-content">
                    <h5 className="text-skyblue">
                      <span className="count-digit">6</span>K
                    </h5>
                    <p>Certified Courses</p>
                  </div>
                </div>
                <div className="counter-item">
                  <div className="counter-icon flex-shrink-0">
                    <img src="assets/img/icons/icon-34.svg" alt="img" />
                  </div>
                  <div className="count-content">
                    <h5 className="text-success">
                      <span className="count-digit">2</span>K
                    </h5>
                    <p>Experienced Tutors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="banner-image">
              <div className="swiper swiper-slider-banner">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="course-item-two course-item mb-0">
                      <div className="course-img">
                        <img
                          src="assets/img/course/course-22.jpg"
                          alt="img"
                          className="img-fluid"
                        />
                        <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                          <a href="javascript:void(0);" className="fav-icon">
                            <i className="isax isax-heart" />
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="brand-icon ms-auto"
                          >
                            <img
                              src="assets/img/icons/course-01.svg"
                              alt="img"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="course-content">
                        <div className="d-flex justify-content-between mb-2">
                          <div className="d-flex align-items-center">
                            <a
                              href="javascript:void(0);"
                              className="avatar avatar-sm"
                            >
                              <img
                                src="assets/img/user/user-50.jpg"
                                alt="img"
                                className="img-fluid avatar avatar-sm rounded-circle"
                              />
                            </a>
                            <div className="ms-2">
                              <a
                                href="javascript:void(0);"
                                className="link-default fs-14"
                              >
                                David Benitz
                              </a>
                            </div>
                          </div>
                          <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium">
                            Productivity
                          </span>
                        </div>
                        <h6 className="mb-2">
                          <a href="course-details.html">
                            The Complete Business and Management Course
                          </a>
                        </h6>
                        <p className="d-flex align-items-center mb-3">
                          <i className="ti ti-star-filled text-warning me-2" />
                          5.0 (210 Reviews)
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <h6 className="text-secondary fs-16 fw-semi-bold mb-0">
                            $168
                          </h6>
                          <a
                            href="cart.html"
                            className="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >
                            Add to Cart
                            <i className="isax isax-arrow-right-3 ms-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="course-item course-item-two mb-0">
                      <div className="course-img">
                        <img
                          src="assets/img/course/course-25.jpg"
                          alt="img"
                          className="img-fluid"
                        />
                        <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                          <a href="javascript:void(0);" className="fav-icon">
                            <i className="isax isax-heart" />
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="brand-icon ms-auto"
                          >
                            <img
                              src="assets/img/featured-courses/Clip-path-group.svg"
                              alt="img"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="content-course">
                        <div className="d-flex justify-content-between mb-2">
                          <div className="d-flex align-items-center">
                            <a
                              href="javascript:void(0);"
                              className="avatar avatar-sm"
                            >
                              <img
                                src="assets/img/user/user-20.jpg"
                                alt="img"
                                className="img-fluid avatar avatar-sm rounded-circle"
                              />
                            </a>
                            <div className="ms-2">
                              <a
                                href="javascript:void(0);"
                                className="link-default fs-14"
                              >
                                Edith Dorsey
                              </a>
                            </div>
                          </div>
                          <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium">
                            Lifestyles
                          </span>
                        </div>
                        <h6 className="mb-2">
                          <a href="course-details.html">
                            Build Creative Arts &amp; media Course Completed
                          </a>
                        </h6>
                        <p className="d-flex align-items-center mb-3">
                          <i className="ti ti-star-filled text-warning me-2" />
                          4.9 (178 Reviews)
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <h6 className="text-secondary fs-16 fw-semi-bold mb-0">
                            $190
                          </h6>
                          <a
                            href="cart.html"
                            className="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >
                            Add to Cart
                            <i className="isax isax-arrow-right-3 ms-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="course-item course-item-two mb-0">
                      <div className="course-img">
                        <img
                          src="assets/img/course/course-24.jpg"
                          alt="img"
                          className="img-fluid"
                        />
                        <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                          <a href="javascript:void(0);" className="fav-icon">
                            <i className="isax isax-heart" />
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="brand-icon ms-auto"
                          >
                            <img
                              src="assets/img/featured-courses/react.svg"
                              alt="img"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="content-course">
                        <div className="d-flex justify-content-between mb-2">
                          <div className="d-flex align-items-center">
                            <a
                              href="javascript:void(0);"
                              className="avatar avatar-sm"
                            >
                              <img
                                src="assets/img/user/user-23.jpg"
                                alt="img"
                                className="img-fluid avatar avatar-sm rounded-circle"
                              />
                            </a>
                            <div className="ms-2">
                              <a
                                href="javascript:void(0);"
                                className="link-default fs-14"
                              >
                                Calvin Johnsen
                              </a>
                            </div>
                          </div>
                          <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium">
                            Development
                          </span>
                        </div>
                        <h6 className="mb-2">
                          <a href="course-details.html">
                            Learn &amp; Create ReactJS Tech Fundamentals Apps
                          </a>
                        </h6>
                        <p className="d-flex align-items-center mb-3">
                          <i className="ti ti-star-filled text-warning me-2" />
                          5.0 (154 Reviews)
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <h6 className="text-secondary fs-16 fw-semi-bold mb-0">
                            $147
                          </h6>
                          <a
                            href="cart.html"
                            className="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >
                            Add to Cart
                            <i className="isax isax-arrow-right-3 ms-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* banner */}
    {/* benefits */}
    <section className="benefit-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
            Our Benefits
          </span>
          <h2>Master the Skills to Drive your Career</h2>
          <p>
            The right course, guided by an expert mentor, can provide invaluable
            insights, practical skills.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="position-absolute top-0 end-0 mt-n3 me-n4">
                  <img src="assets/img/shapes/bg-1.png" alt="img" />
                </div>
                <div className="p-4 rounded-pill bg-primary-transparent d-inline-flex">
                  <i className="isax isax-book-1 fs-24" />
                </div>
                <h5 className="mt-3 mb-1">Flexible Learning</h5>
                <p>
                  We believe that high-quality education should be accessible to
                  everyone. Our pricing form in models are designed.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="position-absolute top-0 end-0 mt-n3 me-n4">
                  <img src="assets/img/shapes/bg-2.png" alt="img" />
                </div>
                <div className="p-4 rounded-pill bg-secondary-transparent d-inline-flex">
                  <i className="isax isax-bookmark5 fs-24" />
                </div>
                <h5 className="mt-3 mb-1">Lifetime Access</h5>
                <p>
                  When you enroll in our courses, you’re not just signing up for
                  a temporary learning to experience you’re making.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="position-absolute top-0 end-0 mt-n3 me-n4">
                  <img src="assets/img/shapes/bg-3.png" alt="img" />
                </div>
                <div className="p-4 rounded-pill bg-skyblue-transparent d-inline-flex">
                  <i className="isax isax-chart-26 fs-24" />
                </div>
                <h5 className="mt-3 mb-1">Expert Instruction</h5>
                <p>
                  Our instructors are seasoned professionals with years of
                  experience in their respective fields &amp; Experts advice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* benefits */}
    {/* institutions */}
    <section className="client-section">
      <div className="container">
        <h6 className="fw-medium text-center mb-4">
          Trusted by{" "}
          <span className="text-decoration-underline text-secondary">20+</span>{" "}
          Institutions Around the World
        </h6>
        <div className="institutions-slider lazy slider" style={{display:"flex", gap:"1em"}}>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/01.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/02.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/03.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/04.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/05.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/06.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/07.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/02.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/03.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/04.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/05.svg"
              alt="img"
            />
          </div>
          <div className="institutions-items p-1">
            <img
              className="img-fluid"
              src="assets/img/client/06.svg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
    {/* institutions */}
    {/* top courses */}
    <section className="top-courses-sec">
      <img className="top-courses-bg" src="assets/img/bg/bg-20.png" alt="img" />
      <div className="container" >
        <div className="section-header text-center">
          <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
            Our Categories
          </span>
          <h2>Top Courses &amp; Categories</h2>
          <p>
            The right course, guided by an expert mentor, can provide invaluable
            insights, practical skills
          </p>
        </div>
        <div className="top-courses-slider lazy"  style={{display:"flex", gap:"1em"}}>
          <div>
            <div className="categories-item categories-item-three mb-0">
              <img
                className="mx-auto"
                src="assets/img/category/icons/icon-6.svg"
                alt="img"
              />
              <h6 className="title">
                <a href="course-category.html">Frontend Developer</a>
              </h6>
            </div>
          </div>
          <div>
            <div className="categories-item categories-item-three mb-0">
              <img
                className="mx-auto"
                src="assets/img/category/icons/icon-7.svg"
                alt="img"
              />
              <h6 className="title">
                <a href="course-category.html">Jira Management</a>
              </h6>
            </div>
          </div>
          <div>
            <div className="categories-item categories-item-three mb-0">
              <img
                className="mx-auto"
                src="assets/img/category/icons/icon-8.svg"
                alt="img"
              />
              <h6 className="title">
                <a href="course-category.html">Figma Developer</a>
              </h6>
            </div>
          </div>
          <div>
            <div className="categories-item categories-item-three mb-0">
              <img
                className="mx-auto"
                src="assets/img/category/icons/icon-9.svg"
                alt="img"
              />
              <h6 className="title">
                <a href="course-category.html">Framer Developer</a>
              </h6>
            </div>
          </div>
          <div>
            <div className="categories-item categories-item-three mb-0">
              <img
                className="mx-auto"
                src="assets/img/category/icons/icon-10.svg"
                alt="img"
              />
              <h6 className="title">
                <a href="course-category.html">Vue js Developer</a>
              </h6>
            </div>
          </div>
          <div>
            <div className="categories-item categories-item-three mb-0">
              <img
                className="mx-auto"
                src="assets/img/category/icons/icon-11.svg"
                alt="img"
              />
              <h6 className="title">
                <a href="course-category.html">Shopify Developer</a>
              </h6>
            </div>
          </div>
          <div>
            <div className="categories-item categories-item-three mb-0">
              <img
                className="mx-auto"
                src="assets/img/category/icons/icon-10.svg"
                alt="img"
              />
              <h6 className="title">
                <a href="course-category.html">Vue js Developer</a>
              </h6>
            </div>
          </div>
          <div>
            <div className="categories-item categories-item-three mb-0">
              <img
                className="mx-auto"
                src="assets/img/category/icons/icon-11.svg"
                alt="img"
              />
              <h6 className="title">
                <a href="course-category.html">Shopify Developer</a>
              </h6>
            </div>
          </div>
        </div>
        <a href="course-category.html" className="btn btn-primary btn-md">
          View All Categories
        </a>
      </div>
    </section>
    {/* /top courses */}
    {/* trust */}
    <section className="trust-sec">
      <div className="container">
        <div className="video-showcase">
          <img
            src="assets/img/feature/feature-1.jpg"
            className="img-fluid w-100 rounded-2"
            alt="banner"
          />
          <div className="video-play">
            <a
              href="https://www.youtube.com/embed/1trvO6dqQUI"
              data-fancybox=""
            >
              <i className="isax isax-play5" />
            </a>
          </div>
        </div>
        <div className="trust-content">
          <img
            src="assets/img/bg/bg-19.png"
            alt="img"
            className="w-100 trust-bg"
          />
          <div className="row justify-content-between">
            <div className="col-md-4">
              <h4>
                Trusted by the 15,000+ happy students and online users since
                2000
              </h4>
              <div className="d-flex align-items-center flex-wrap mt-5 gap-2">
                <a href="login.html" className="btn btn-secondary">
                  Enroll as Student
                </a>
                <a href="become-an-instructor.html" className="btn btn-dark">
                  Apply as Tutor
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6">
                  <h4 className="text-white mb-2">9.8/10</h4>
                  <h5 className="text-white mb-2">Course Approval Score</h5>
                  <p className="text-white mb-5">
                    Achieving a complete course approval score is a significant.
                  </p>
                </div>
                <div className="col-md-6">
                  <h4 className="text-white mb-2">13k</h4>
                  <h5 className="text-white mb-2">
                    Satisfied Students Worldwide
                  </h5>
                  <p className="text-white mb-5">
                    Satisfied students worldwide share a common thread of
                    happiness.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center bg-white user-goal p-2">
                <div className="avatar avatar-lg flex-shrink-0">
                  <img
                    className="rounded-pill"
                    src="assets/img/user/user-28.jpg"
                    alt="img"
                  />
                </div>
                <p className="text-gray-9 mb-0">
                  “All courses are incredibly help people to achieve their
                  goals”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /trust */}
    {/* featured course */}
    <section className="featured-courses-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
            Featured Courses
          </span>
          <h2>What’s New in DreamsLMS</h2>
          <p>
            Discover our featured courses, specially curated to help you gain
            in-demand skills
          </p>
        </div>
        <div className="feature-course-slider-2"  style={{display:"flex", gap:"1em"}}>
          <div>
            <div className="course-item">
              <div className="course-img">
                <a href="course-details.html">
                  <img
                    src="assets/img/course/course-36.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </a>
                <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                  <span className="price-badge ms-auto">$500</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="badge badge-md badge-soft-info rounded-pill">
                  UI/UX
                </span>
                <a href="javascript:void(0);" className="fav-icon">
                  <i className="isax isax-heart" />
                </a>
              </div>
              <div className="pb-3 border-bottom mb-3">
                <h5>
                  <a href="course-details.html">
                    Information About UI/UX Design Degree
                  </a>
                </h5>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="course-rating">
                  <span className="course-user">
                    <a href="javascript:void(0);">
                      <img
                        src="assets/img/user/user-06.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </a>
                  </span>
                  <a href="javascript:void(0);">Brenda Slaton</a>
                </div>
                <div className="d-flex">
                  <span className="d-flex align-items-center rating">
                    <i className="fa-solid fa-star text-warning me-2" />
                    5.0
                  </span>
                </div>
              </div>
              <a href="course-details.html" className="btn buy-course-btn">
                Buy Course Now
              </a>
            </div>
          </div>
          <div>
            <div className="course-item">
              <div className="course-img">
                <a href="course-details.html">
                  <img
                    src="assets/img/course/course-37.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </a>
                <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                  <span className="price-badge ms-auto">$300</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger badge-md rounded-pill shadow-none">
                  Productivity
                </span>
                <a href="javascript:void(0);" className="fav-icon">
                  <i className="isax isax-heart" />
                </a>
              </div>
              <div className="pb-3 border-bottom mb-3">
                <h5>
                  <a href="course-details.html">
                    Learn &amp; Create ReactJS Tech Fundamentals Apps
                  </a>
                </h5>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="course-rating">
                  <span className="course-user">
                    <a href="javascript:void(0);">
                      <img
                        src="assets/img/user/user-07.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </a>
                  </span>
                  <a href="javascript:void(0);">David Benitez</a>
                </div>
                <div className="d-flex">
                  <span className="d-flex align-items-center rating">
                    <i className="fa-solid fa-star text-warning me-2" />
                    5.0
                  </span>
                </div>
              </div>
              <a href="course-details.html" className="btn buy-course-btn">
                Buy Course Now
              </a>
            </div>
          </div>
          <div>
            <div className="course-item">
              <div className="course-img">
                <a href="course-details.html">
                  <img
                    src="assets/img/course/course-38.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </a>
                <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                  <span className="price-badge ms-auto">$350</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-purple badge-md rounded-pill shadow-none">
                  Management
                </span>
                <a href="javascript:void(0);" className="fav-icon">
                  <i className="isax isax-heart" />
                </a>
              </div>
              <div className="pb-3 border-bottom mb-3">
                <h5>
                  <a href="course-details.html">
                    The Complete Business and Management Course
                  </a>
                </h5>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="course-rating">
                  <span className="course-user">
                    <a href="javascript:void(0);">
                      <img
                        src="assets/img/user/user-08.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </a>
                  </span>
                  <a href="javascript:void(0);">Calvin Johnsen</a>
                </div>
                <div className="d-flex">
                  <span className="d-flex align-items-center rating">
                    <i className="fa-solid fa-star text-warning me-2" />
                    5.0
                  </span>
                </div>
              </div>
              <a href="course-details.html" className="btn buy-course-btn">
                Buy Course Now
              </a>
            </div>
          </div>
          <div>
            <div className="course-item">
              <div className="course-img">
                <a href="course-details.html">
                  <img
                    src="assets/img/course/course-39.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </a>
                <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                  <span className="price-badge ms-auto">$500</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-success badge-md rounded-pill shadow-none">
                  Art &amp; Media
                </span>
                <a href="javascript:void(0);" className="fav-icon">
                  <i className="isax isax-heart5 text-danger" />
                </a>
              </div>
              <div className="pb-3 border-bottom mb-3">
                <h5>
                  <a href="course-details.html">
                    Build Creative Arts &amp; media Course Completed
                  </a>
                </h5>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="course-rating">
                  <span className="course-user">
                    <a href="javascript:void(0);">
                      <img
                        src="assets/img/user/user-09.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </a>
                  </span>
                  <a href="javascript:void(0);">David Benitez</a>
                </div>
                <div className="d-flex">
                  <span className="d-flex align-items-center rating">
                    <i className="fa-solid fa-star text-warning me-2" />
                    5.0
                  </span>
                </div>
              </div>
              <a href="course-details.html" className="btn buy-course-btn">
                Buy Course Now
              </a>
            </div>
          </div>
          <div>
            <div className="course-item">
              <div className="course-img">
                <a href="course-details-2.html">
                  <img
                    src="assets/img/course/course-37.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </a>
                <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                  <span className="price-badge ms-auto">$300</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger badge-md rounded-pill shadow-none">
                  Productivity
                </span>
                <a href="javascript:void(0);" className="fav-icon">
                  <i className="isax isax-heart" />
                </a>
              </div>
              <div className="pb-3 border-bottom mb-3">
                <h5>
                  <a href="course-details-2.html">
                    Learn &amp; Create ReactJS Tech Fundamentals Apps
                  </a>
                </h5>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="course-rating">
                  <span className="course-user">
                    <a href="javascript:void(0);">
                      <img
                        src="assets/img/user/user-07.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </a>
                  </span>
                  <a href="javascript:void(0);">David Benitez</a>
                </div>
                <div className="d-flex">
                  <span className="d-flex align-items-center rating">
                    <i className="fa-solid fa-star text-warning me-2" />
                    5.0
                  </span>
                </div>
              </div>
              <a href="course-details.html" className="btn buy-course-btn">
                Buy Course Now
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <a href="course-list.html" className="btn btn-primary btn-md">
            View All Courses
          </a>
        </div>
      </div>
    </section>
    {/* /featured course */}
    {/* community-to-learn */}
    <section className="community-to-learn">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-header">
              <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                Advanced Learning
              </span>
              <h2>Creating a community of learners.</h2>
              <p>
                We're dedicated to transforming education by providing a diverse
                range of high-quality courses that cater to learners of all
                levels.
              </p>
            </div>
            <div className="community-item d-flex align-items-center">
              <span className="community-icon-1">
                <i className="isax isax-book-saved5" />
              </span>
              <div>
                <h5 className="mb-2">Learn from anywhere</h5>
                <p className="mb-0">
                  Learning from anywhere has become a transform aspect of modern
                  education, allowing individuals.
                </p>
              </div>
            </div>
            <div className="community-item d-flex align-items-center">
              <span className="community-icon-2">
                <i className="isax isax-bookmark5" />
              </span>
              <div>
                <h5 className="mb-2">Expert Mentors</h5>
                <p className="mb-0">
                  Learning from anywhere has become a transform aspect of modern
                  education, allowing individuals.
                </p>
              </div>
            </div>
            <div className="community-item d-flex align-items-center">
              <span className="community-icon-3">
                <i className="isax isax-chart-26" />
              </span>
              <div>
                <h5 className="mb-2">Learn in demand skills</h5>
                <p className="mb-0">
                  In today's rapidly evolving job market, learning in demand
                  skills is crucial for career advancement.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <a href="login.html" className="btn btn-secondary btn-md">
                Enroll as Student
              </a>
              <a
                href="become-an-instructor.html"
                className="btn btn-dark btn-md"
              >
                Apply as Tutor
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="community-img d-none d-lg-flex">
              <img
                src="assets/img/shapes/shape-5.png"
                alt="img"
                className="img-fluid community-img-01"
              />
              <img
                src="assets/img/shapes/shape-6.png"
                alt="img"
                className="img-fluid community-img-02"
              />
              <img
                src="assets/img/feature/feature-2.jpg"
                alt="img"
                className="img-fluid community-img-03"
              />
              <img
                src="assets/img/feature/feature-3.jpg"
                alt="img"
                className="img-fluid community-img-04"
              />
              <img
                src="assets/img/shapes/shape-7.svg"
                alt="img"
                className="img-fluid community-img-05"
              />
              <div className="community-count p-2">
                <div className="enrolled-list">
                  <div className="avatar-list-stacked mb-2">
                    <span className="avatar avatar-rounded">
                      <img
                        className="border border-white"
                        src="assets/img/user/user-01.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <img
                        className="border border-white"
                        src="assets/img/user/user-03.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <img
                        className="border border-white"
                        src="assets/img/user/user-07.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <img
                        className="border border-white"
                        src="assets/img/user/user-08.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <img src="assets/img/user/user-06.jpg" alt="img" />
                    </span>
                  </div>
                  <p className="mb-0">
                    <span className="text-secondary">35K+</span> Students
                    Enrolled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /community-to-learn */}
    {/* client */}
    <div className="cliets-section-one">
      <div className="brand-slide"  style={{display:"flex", gap:"5em", justifyContent:"center"}}>
        <div>
          <img src="assets/img/client/08.svg" alt="img" />
        </div>
        <div>
          <img src="assets/img/client/09.svg" alt="img" />
        </div>
        <div>
          <img src="assets/img/client/10.svg" alt="img" />
        </div>
        <div>
          <img src="assets/img/client/11.svg" alt="img" />
        </div>
        <div>
          <img src="assets/img/client/12.svg" alt="img" />
        </div>
        <div>
          <img src="assets/img/client/13.svg" alt="img" />
        </div>
        <div>
          <img src="assets/img/client/08.svg" alt="img" />
        </div>
        <div>
          <img src="assets/img/client/09.svg" alt="img" />
        </div>
      </div>
    </div>
    {/* /client */}
    {/* how it works */}
    <div className="how-it-works-sec-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="me-5" >
              <img
                src="assets/img/feature/feature-27.jpg"
                className="img-fluid rounded-5"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="how-it-works-content aos">
              <div className="section-header">
                <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                  How it Works
                </span>
                <h2 className="mb-1">Start your Learning Journey Today!</h2>
                <p>
                  Unlock Your Potential and Achieve Your Dreams with Our
                  Comprehensive Learning Resources!
                </p>
              </div>
              <div className="d-flex align-items-center works-items">
                <span className="count">01</span>
                <div>
                  <h5 className="mb-1">Sign-Up or Register</h5>
                  <p>
                    Once you're on the website's homepage, look for the Sign-Up,
                    Register, or Create Account button.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center works-items">
                <span className="count">02</span>
                <div>
                  <h5 className="mb-1">Complete Your Profile</h5>
                  <p>
                    After verifying your email, you may be asked to complete
                    additional profile information.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center works-items">
                <span className="count">03</span>
                <div>
                  <h5 className="mb-1">Choose Courses or Programs</h5>
                  <p>
                    Depending on the website, after registration, you might be
                    able to browse and choose courses or programs to enroll in.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center works-items mb-0 pb-0 border-0">
                <span className="count">04</span>
                <div>
                  <h5 className="mb-1">Access Your Account</h5>
                  <p>
                    Should have access to the website’s features, such as
                    enrolling in courses, materials, or tracking progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* how it works */}
    {/* featured instructor */}
    <div className="featured-instructor-sec">
      <div className="container">
        <div className="section-header text-center">
          <span className="fw-medium text-light text-decoration-underline mb-2 d-inline-block">
            Featured Instructors
          </span>
          <h2 className="text-white">
            Top Class &amp; Professional Instructors{" "}
          </h2>
          <p className="text-light">
            Empowering Change: Stories from Those Who Took the Leap
          </p>
        </div>
        <div className="featured-instructor-slider lazy" style={{display:"flex", gap:"1em"}}>
          <div
            className="instructor-item instructor-item-three mb-0"
          >
            <div className="instructors-img ">
              <a href="instructor-list.html" tabIndex={0}>
                <img
                  className="img-fluid"
                  alt="Img"
                  src="assets/img/instructor/instructor-09.jpg"
                />
              </a>
              <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                <span className="verify">
                  <img
                    src="assets/img/icons/verify-icon.svg"
                    alt="img"
                    className="img-fluid"
                  />
                </span>
                <a href="javascript:void(0);" className="favourite ms-auto">
                  <i className="isax isax-heart" />
                </a>
              </div>
            </div>
            <div className="instructor-content">
              <div>
                <h3 className="title">
                  <a href="instructor-details.html">Joyce Pence</a>
                </h3>
                <span className="designation">Lead Designer</span>
              </div>
              <p className="rating">
                <i className="fas fa-star me-1" />
                4.8
              </p>
            </div>
          </div>
          <div
            className="instructor-item instructor-item-three mb-0"
          >
            <div className="instructors-img">
              <a href="instructor-list.html" tabIndex={0}>
                <img
                  className="img-fluid"
                  alt="Img"
                  src="assets/img/instructor/instructor-10.jpg"
                />
              </a>
              <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                <span className="verify">
                  <img
                    src="assets/img/icons/verify-icon.svg"
                    alt="img"
                    className="img-fluid"
                  />
                </span>
                <a href="javascript:void(0);" className="favourite ms-auto">
                  <i className="isax isax-heart" />
                </a>
              </div>
            </div>
            <div className="instructor-content">
              <div>
                <h3 className="title">
                  <a href="instructor-details.html">Edith Dorsey</a>
                </h3>
                <span className="designation">Accountant</span>
              </div>
              <p className="rating">
                <i className="fas fa-star me-1" />
                5.0
              </p>
            </div>
          </div>
          <div
            className="instructor-item instructor-item-three mb-0"
          >
            <div className="instructors-img ">
              <a href="instructor-list.html" tabIndex={0}>
                <img
                  className="img-fluid"
                  alt="Img"
                  src="assets/img/instructor/instructor-11.jpg"
                />
              </a>
              <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                <span className="verify">
                  <img
                    src="assets/img/icons/verify-icon.svg"
                    alt="img"
                    className="img-fluid"
                  />
                </span>
                <a href="javascript:void(0);" className="favourite ms-auto">
                  <i className="isax isax-heart" />
                </a>
              </div>
            </div>
            <div className="instructor-content">
              <div>
                <h3 className="title">
                  <a href="instructor-details.html">Ruben Holmes</a>
                </h3>
                <span className="designation">Architect</span>
              </div>
              <p className="rating">
                <i className="fas fa-star me-1" />
                4.8
              </p>
            </div>
          </div>
          <div
            className="instructor-item instructor-item-three mb-0"
          >
            <div className="instructors-img">
              <a href="instructor-list.html" tabIndex={0}>
                <img
                  className="img-fluid"
                  alt="Img"
                  src="assets/img/instructor/instructor-12.jpg"
                />
              </a>
              <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                <span className="verify">
                  <img
                    src="assets/img/icons/verify-icon.svg"
                    alt="img"
                    className="img-fluid"
                  />
                </span>
                <a href="javascript:void(0);" className="favourite ms-auto">
                  <i className="isax isax-heart" />
                </a>
              </div>
            </div>
            <div className="instructor-content">
              <div>
                <h3 className="title">
                  <a href="instructor-details.html">Carol Magner</a>
                </h3>
                <span className="designation">Lead Designer</span>
              </div>
              <p className="rating">
                <i className="fas fa-star me-1" />
                4.5
              </p>
            </div>
          </div>
          <div
            className="instructor-item instructor-item-three mb-0"
          >
            <div className="instructors-img">
              <a href="instructor-list.html" tabIndex={0}>
                <img
                  className="img-fluid"
                  alt="Img"
                  src="assets/img/instructor/instructor-10.jpg"
                />
              </a>
              <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                <span className="verify">
                  <img
                    src="assets/img/icons/verify-icon.svg"
                    alt="img"
                    className="img-fluid"
                  />
                </span>
                <a href="javascript:void(0);" className="favourite ms-auto">
                  <i className="isax isax-heart" />
                </a>
              </div>
            </div>
            <div className="instructor-content">
              <div>
                <h3 className="title">
                  <a href="instructor-details.html">Edith Dorsey</a>
                </h3>
                <span className="designation">Accountant</span>
              </div>
              <p className="rating">
                <i className="fas fa-star me-1" />
                5.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* featured instructor */}
    {/* testimonials */}
    <div className="testimonials-section testimonials-sec-one text-center">
      <div className="container">
        <div className="section-header text-center">
          <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
            Featured Instructors
          </span>
          <h2>Top Class &amp; Professional Instructors</h2>
          <p>Words from Those Who’ve Experienced Real Growth</p>
        </div>
        <div className="testimonials-slider lazy mt-4"  style={{display:"flex", gap:"1em" }} >
          <div>
            <div
              className="testimonials-item rounded-3 bg-white" 
             
               style={{width:"17em" }}
            >
              <div className="position-relative d-inline-flex" >
                <div className="avatar rounded-circle avatar-xxl border border-white border-3">
                  <a href="student-details.html">
                    <img
                      className="img-fluid rounded-circle"
                      src="assets/img/user/user-41.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <i className="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1" />
              </div>
              <h6 className="mb-1">
                <a href="student-details.html">Brenda Slaton</a>
              </h6>
              <p className="designation">Designer</p>
              <p className="mb-3 text-truncate line-clamb-2">
                This mentor helped me understand concepts that I had been
                struggling with for weeks.
              </p>
              <div>
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
              </div>
            </div>
          </div>
          <div>
            <div
              className="testimonials-item rounded-3 bg-white"
               style={{width:"17em" }}
            >
              <div className="position-relative d-inline-flex">
                <div className="avatar rounded-circle avatar-xxl border border-white border-3">
                  <a href="student-details.html">
                    <img
                      className="img-fluid rounded-circle"
                      src="assets/img/user/user-42.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <i className="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1" />
              </div>
              <h6 className="mb-1">
                <a href="student-details.html">Adrian Dennis</a>
              </h6>
              <p className="designation">Developer</p>
              <p className="mb-3 text-truncate line-clamb-2">
                I’ve learned so much from my mentor’s personal experience.
              </p>
              <div>
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
              </div>
            </div>
          </div>
          <div>
            <div
              className="testimonials-item rounded-3 bg-white"
               style={{width:"17em" }}
            >
              <div className="position-relative d-inline-flex">
                <div className="avatar rounded-circle avatar-xxl border border-white border-3">
                  <a href="student-details.html">
                    <img
                      className="img-fluid rounded-circle"
                      src="assets/img/user/user-43.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <i className="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1" />
              </div>
              <h6 className="mb-1">
                <a href="student-details.html">Adrian Coztanza</a>
              </h6>
              <p className="designation">Architect</p>
              <p className="mb-3 text-truncate line-clamb-2">
                The advice was useful, but I wish my mentor had been more
                available for follow-up discussions.
              </p>
              <div>
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
              </div>
            </div>
          </div>
          <div>
            <div className="testimonials-item rounded-3 bg-white"  style={{width:"17em" }}>
              <div className="position-relative d-inline-flex">
                <div className="avatar rounded-circle avatar-xxl border border-white border-3">
                  <a href="student-details.html">
                    <img
                      className="img-fluid rounded-circle"
                      src="assets/img/user/user-43.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <i className="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1" />
              </div>
              <h6 className="mb-1">
                <a href="student-details.html">Adrian Coztanza</a>
              </h6>
              <p className="designation">Architect</p>
              <p className="mb-3 text-truncate line-clamb-2">
                The advice was useful, but I wish my mentor had been more
                available for follow-up discussions.
              </p>
              <div>
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
                <i className="fa-solid fa-star text-warning" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* testimonials */}
    {/* faq */}
    <div className="faq-section faq-banner-bg">
      <img
        src="assets/img/bg/bg-21.svg"
        alt="img"
        className="d-lg-flex d-none faq-bg2"
      />
      <img
        src="assets/img/bg/bg-22.svg"
        alt="img"
        className="d-lg-flex d-none faq-bg3"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-img">
              <img
                className="img-fluid rounded-5"
                src="assets/img/feature/feature-4.jpg"
                alt="img"
              />
              <span>
                <i className="isax isax-message-question5" />
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="section-header">
                <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                  Your Questions are Answered
                </span>
                <h2 className="mb-1">Frequently Asked Questions</h2>
                <p>
                  Explore detailed answers to the most common questions about
                  our platform.
                </p>
              </div>
              <div
                className="accordion accordion-customicon1 accordions-items-seperate"
                id="accordioncustomicon1Example"
              >
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
                      How do I enroll in a course?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1One"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingcustomicon1One"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                        Many websites offer a Certificate of Completion for paid
                        courses. Free courses may or may not include a
                        certificate, depending on the platform’s policies.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingcustomicon1Two">
                    <a
                      href="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Two"
                      aria-expanded="false"
                      aria-controls="collapsecustomicon1One"
                    >
                      How long do I have access to a course?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1Two"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingcustomicon1Two"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                        Many websites offer a Certificate of Completion for paid
                        courses. Free courses may or may not include a
                        certificate, depending on the platform’s policies.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingcustomicon1Three">
                    <a
                      href="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Three"
                      aria-expanded="false"
                      aria-controls="collapsecustomicon1One"
                    >
                      What payment methods are accepted?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1Three"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingcustomicon1Three"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                        Many websites offer a Certificate of Completion for paid
                        courses. Free courses may or may not include a
                        certificate, depending on the platform’s policies.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingcustomicon1Four">
                    <a
                      href="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Four"
                      aria-expanded="false"
                      aria-controls="collapsecustomicon1One"
                    >
                      Will I receive a certificate after completing a course?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1Four"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingcustomicon1Four"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                        Many websites offer a Certificate of Completion for paid
                        courses. Free courses may or may not include a
                        certificate, depending on the platform’s policies.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingcustomicon1Five">
                    <a
                      href="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Five"
                      aria-expanded="false"
                      aria-controls="collapsecustomicon1One"
                    >
                      What is the purpose of this DreamLMS ?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1Five"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingcustomicon1Five"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                        Many websites offer a Certificate of Completion for paid
                        courses. Free courses may or may not include a
                        certificate, depending on the platform’s policies.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingcustomicon1Six">
                    <a
                      href="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Six"
                      aria-expanded="false"
                      aria-controls="collapsecustomicon1One"
                    >
                      What can I do with my certificate?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </a>
                  </h2>
                  <div
                    id="collapsecustomicon1Six"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingcustomicon1Six"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                        Many websites offer a Certificate of Completion for paid
                        courses. Free courses may or may not include a
                        certificate, depending on the platform’s policies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* faq */}
    {/* Latest Blog */}
    <section className="latest-blog-three latest-blog-five">
      <div className="container">
        <div className="section-header text-center">
          <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
            Articles &amp; Updates
          </span>
          <h2>Our&nbsp;Recent Blog &amp; Articles</h2>
          <p>
            Explore curated content to enlighten, entertain and engage global
            readers.
          </p>
        </div>
        <div className="latest-blog-main">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="event-blog-three blog-three-one"
              >
                <div className="blog-img-three">
                  <a href="blog-grid.html">
                    <img
                      className="img-fluid"
                      alt="Img"
                      src="assets/img/blog/blog-35.jpg"
                    />
                  </a>
                </div>
                <div className="latest-blog-content">
                  <div className="event-three-title">
                    <div className="event-span-three d-flex align-items-center">
                      <span className="category">Lifestyle</span>
                      <div className="blog-date">
                        <i className="fa-solid fa-calendar" />
                        <span>09 Aug 2025</span>
                      </div>
                    </div>
                    <a href="blog-grid.html">
                      <h5>Why an LMS is Essential for Modern Education</h5>
                    </a>
                  </div>
                </div>
                <div className="blog-user-top">
                  <a href="#">
                    <img src="assets/img/user/user-01.jpg" alt="" />
                    David Benitez
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="event-blog-three blog-three-one"
                  >
                    <div className="blog-img-three">
                      <a href="blog-details.html">
                        <img
                          className="img-fluid"
                          alt="Img"
                          src="assets/img/blog/blog-36.jpg"
                        />
                      </a>
                    </div>
                    <div className="latest-blog-content">
                      <div className="event-three-title">
                        <div className="event-span-three d-flex align-items-center">
                          <span className="category">Productivity</span>
                          <div className="blog-date">
                            <i className="fa-solid fa-calendar" />{" "}
                            <span>09 Aug 2025</span>
                          </div>
                        </div>
                        <h5>
                          <a href="blog-grid.html">
                            The Impact of LMS on Academic Journey Education
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="blog-user-top">
                      <a href="#">
                        <img src="assets/img/user/user-01.jpg" alt="" />
                        David Benitez
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="event-blog-three blog-three-one"
                  >
                    <div className="blog-img-three">
                      <a href="blog-grid.html">
                        <img
                          className="img-fluid"
                          alt="Img"
                          src="assets/img/blog/blog-38.jpg"
                        />
                      </a>
                    </div>
                    <div className="latest-blog-content">
                      <div className="event-three-title">
                        <div className="event-span-three d-flex align-items-center">
                          <span className="category">Productivity</span>
                          <div className="blog-date">
                            <i className="fa-solid fa-calendar" />
                            <span>09 Aug 2025</span>
                          </div>
                        </div>
                        <h5>
                          <a href="blog-grid.html">
                            Maximizing Academic Success with the Right LMS
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="blog-user-top">
                      <a href="#">
                        <img src="assets/img/user/user-01.jpg" alt="" />
                        David Benitez
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="event-blog-three blog-three-one"
                  >
                    <div className="blog-img-three">
                      <a href="blog-grid.html">
                        <img
                          className="img-fluid"
                          alt="Img"
                          src="assets/img/blog/blog-37.jpg"
                        />
                      </a>
                    </div>
                    <div className="latest-blog-content">
                      <div className="event-three-title">
                        <div className="event-span-three d-flex align-items-center">
                          <span className="category">UI /UX</span>
                          <div className="blog-date">
                            <i className="fa-solid fa-calendar" />
                            <span>09 Aug 2025</span>
                          </div>
                        </div>
                        <h5>
                          <a href="blog-grid.html">
                            Promoting Health &amp; Well being in Schools
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="blog-user-top">
                      <a href="#">
                        <img src="assets/img/user/user-01.jpg" alt="" />
                        David Benitez
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="event-blog-three blog-three-one"
                  >
                    <div className="blog-img-three">
                      <a href="blog-grid.html">
                        <img
                          className="img-fluid"
                          alt="Img"
                          src="assets/img/blog/blog-39.jpg"
                        />
                      </a>
                    </div>
                    <div className="latest-blog-content">
                      <div className="event-three-title">
                        <div className="event-span-three d-flex align-items-center">
                          <span className="category">Development</span>
                          <div className="blog-date">
                            <i className="fa-solid fa-calendar" />
                            <span>09 Aug 2025</span>
                          </div>
                        </div>
                        <h5>
                          <a href="blog-grid.html">
                            How to Build and Run a Pilot Mentoring Program
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="blog-user-top">
                      <a href="#">
                        <img src="assets/img/user/user-01.jpg" alt="" />
                        David Benitez
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            className="btn btn-view-all"
            href="blog-grid.html"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
    {/* /Latest Blog */}
    <Footer />
  </div>
  {/* /Main Wrapper */}
</>


    </>
  )
}

export default Home