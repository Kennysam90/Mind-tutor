import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'
import Footer from '../../../Component/Footer'

const EnrolledCourses = () => {
  return (
    <>
       {/* Main Wrapper */}
<div className="main-wrapper">
  {/* Header Topbar*/}
  <Header />
  {/* /Header Topbar*/}
  {/* Header */}
  {/* /Header */}
  {/* Breadcrumb */}
  <div className="breadcrumb-bar text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title mb-2">Enrolled Courses</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Enrolled Courses</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  <div className="content">
    <div className="container">
      {/* profile box */}
      <div className="profile-card overflow-hidden bg-blue-gradient2 mb-5 p-5">
        <div className="profile-card-bg">
          <img src="assets/img/bg/card-bg-01.png" className="profile-card-bg-1" alt />
        </div>
        <div className="row align-items-center row-gap-3">
          <div className="col-lg-6">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-xxl avatar-rounded me-3 border border-white border-2 position-relative">
                <img src="assets/img/user/user-02.jpg" alt />
                <span className="verify-tick"><i className="isax isax-verify5" /></span>
              </span>
              <div>
                <h5 className="mb-1 text-white d-inline-flex align-items-center">Ronald Richard<a href="instructor-profile.html" className="link-light fs-16 ms-2"><i className="isax isax-edit-2" /></a></h5>
                <p className="text-light">Student</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center justify-content-lg-end flex-wrap gap-2">
              <a href="become-an-instructor.html" className="btn btn-white rounded-pill me-3">Become an Instructor</a>
              <a href="instructor-dashboard.html" className="btn btn-secondary rounded-pill">Instructor Dashboard</a>
            </div>
          </div>
        </div>
      </div>
      {/* profile box */}
      <div className="row">
        {/* sidebar */}
       <StudentSidebar />
        {/* sidebar */}
        <div className="col-lg-9">
          <div className="page-title d-flex flex-wrap gap-3 align-items-center justify-content-between">
            <h5>Enrolled Courses</h5>
            <div className="tab-list">
              <ul className="nav mb-0 gap-2" role="tablist">
                <li className="nav-item mb-0" role="presentation">
                  <a href="javascript:void(0);" className="active" data-bs-toggle="tab" data-bs-target="#enroll-courses" aria-selected="true" role="tab">Enrolled (09)</a>
                </li>
                <li className="nav-item mb-0" role="presentation">
                  <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#active-courses" aria-selected="false" role="tab" className tabIndex={-1}>Active (06)</a>
                </li>
                <li className="nav-item mb-0" role="presentation">
                  <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#complete-courses" aria-selected="false" role="tab" className tabIndex={-1}>Completed (03)</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade active show" id="enroll-courses" role="tabpanel">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-01.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <div className="badge text-bg-danger">15% off</div>
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-29.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Brenda Slaton</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Design
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Information About UI/UX Design Degree</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.9 (200 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$120</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-02.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-30.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Ana Reyes</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Wordpress
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Wordpress for Beginners - Master Wordpress Quickly</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (160 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$140</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-03.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-31.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Andrew Pirtle</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Design
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Sketch from A to Z (2024): Become an app designer</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (160 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$140</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-04.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-32.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Christy Garner</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Programming
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Build Responsive Real World Websites with Crash Course</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.2 (220 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$200</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-05.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-32.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Justin Gregory</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Programming
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Learn JavaScript and Express to become a Expert</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (180 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$130</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-06.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-33.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Carolyn Hines</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Programming
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Introduction to Python Programming</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (180 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$130</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-07.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-34.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Rafael Miller</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Programming
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Build Responsive Websites with HTML5 and CSS3</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (180 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$170</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-08.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-35.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Nancy Duarte</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Design
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Information About Photoshop Design Degree</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (180 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$170</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-09.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-36.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">James Kagan</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Design
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">C# Developers Double Your Coding with Visual Studio</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (180 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$180</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="active-courses" role="tabpanel">
              <div className="row">								
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-01.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <div className="badge text-bg-danger">15% off</div>
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-29.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Brenda Slaton</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Design
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Information About UI/UX Design Degree</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.9 (200 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$120</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-02.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-30.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Ana Reyes</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Wordpress
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Wordpress for Beginners - Master Wordpress Quickly</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (160 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$140</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-03.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-31.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Andrew Pirtle</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Design
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Sketch from A to Z (2024): Become an app designer</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (160 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$140</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-04.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-32.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Christy Garner</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Programming
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Build Responsive Real World Websites with Crash Course</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.2 (220 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$200</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-05.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-32.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Justin Gregory</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Programming
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Learn JavaScript and Express to become a Expert</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (180 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$130</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-06.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-33.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Carolyn Hines</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Programming
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Introduction to Python Programming</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (180 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$130</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="complete-courses" role="tabpanel">
              <div className="row">								
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-04.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-32.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Christy Garner</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Programming
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Build Responsive Real World Websites with Crash Course</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.2 (220 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$200</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-05.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-32.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Justin Gregory</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Programming
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Learn JavaScript and Express to become a Expert</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (180 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$130</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="course-item-two course-item mx-0">
                    <div className="course-img">
                      <a href="course-details.html">
                        <img src="assets/img/course/course-06.jpg" alt="img" className="img-fluid" />  
                      </a>
                      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                        <a href="javascript:void(0);" className="fav-icon ms-auto"><i className="isax isax-heart" /></a>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <a href="instructor-details.html" className="avatar avatar-sm">
                            <img src="assets/img/user/user-33.jpg" alt="img" className="img-fluid avatar avatar-sm rounded-circle" />
                          </a>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="link-default fs-14">Carolyn Hines</a>
                          </div>
                        </div>
                        <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                          Programming
                        </span>
                      </div>
                      <h6 className="title mb-2"><a href="course-details.html">Introduction to Python Programming</a></h6>
                      <p className="d-flex align-items-center mb-3"><i className="fa-solid fa-star text-warning me-2" />4.4 (180 Reviews)</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-secondary mb-0">$130</h5>
                        <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="isax isax-arrow-right-3 ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /pagination */}
          <div className="row align-items-center mt-2">
            <div className="col-md-2">
              <p className="pagination-text">Page 1 of 2</p>
            </div>
            <div className="col-md-10">
              <ul className="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
                <li className="page-item prev">
                  <a className="page-link" href="javascript:void(0)" tabIndex={-1}><i className="fas fa-angle-left" /></a>
                </li>
                <li className="page-item first-page active">
                  <a className="page-link" href="javascript:void(0)">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0)">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0)">3</a>
                </li>
                <li className="page-item next">
                  <a className="page-link" href="javascript:void(0)"><i className="fas fa-angle-right" /></a>
                </li>
              </ul>
            </div>
          </div>
          {/* /pagination */}
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
 <Footer />
  {/* /Footer */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default EnrolledCourses