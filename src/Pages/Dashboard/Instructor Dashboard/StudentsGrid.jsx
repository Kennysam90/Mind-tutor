import React from 'react'
import Header from '../../../Component/Header'
import TutorSidebar from '../../../Component/TutorSidebar'
import { Link } from 'react-router-dom'

const StudentsGrid = () => {
  return (
    <>
      {/* Main Wrapper */}
<div className="main-wrapper">
  {/* Header Topbar*/}
  <Header />
  {/* /Header */}
  {/* Breadcrumb */}
  <div className="breadcrumb-bar text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title mb-2">Students Grid</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Students Grid</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  <div className="content">
    <div className="container">
      <div className="instructor-profile">
        <div className="instructor-profile-bg">
          <img src="assets/img/bg/card-bg-01.png" className="instructor-profile-bg-1" alt />
        </div>
        <div className="row align-items-center row-gap-3">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <span className="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative">
                <img src="assets/img/user/user-01.jpg" alt="img" />
                <span className="verify-tick"><i className="isax isax-verify5" /></span>
              </span>
              <div>
                <h5 className="mb-1 text-white d-inline-flex align-items-center">Eugene Andre<a href="instructor-profile.html" className="link-light fs-16 ms-2"><i className="isax isax-edit-2" /></a></h5>
                <p className="text-light">Instructor</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">
              <a href="add-course.html" className="btn btn-white rounded-pill">Add New Course</a>
              <a href="student-dashboard.html" className="btn btn-secondary rounded-pill">Student Dashboard</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Sidebar */}
       <TutorSidebar />
        {/* /Sidebar */}
        <div className="col-lg-9">
          <div className="page-title d-flex align-items-center justify-content-between">
            <h5 className="fw-bold">Students</h5>
            <div className="d-flex align-items-center list-icons">
              <Link to="/studentslist" className="me-2"><i className="isax isax-task" /></Link>
              <Link to="/studentsgrid" className="active"><i className="isax isax-element-3" /></Link>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-md-4">
              <div className="input-icon mb-3">
                <span className="input-icon-addon">
                  <i className="isax isax-search-normal-14" />
                </span>
                <input type="email" className="form-control form-control-md" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <a href="student-details.html"><img src="assets/img/students/student-01.jpg" className="rounded-3" alt /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                    <div>
                      <h5 className="mb-2 fw-bold"><a href="student-details.html">Ronald Richard</a></h5>
                      <span className="text-info d-inline-flex align-items-center"><i className="isax isax-location me-1" /><a href="#" className="text-info text-decoration-underline stu-loc">Newyork</a></span>
                    </div>
                    <a href="#" className="avatar avatar-md avatar-rounded border"><i className="isax isax-messages text-gray-9 fs-14" /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between fs-14">
                    <span className="d-inline-flex align-items-center"><i className="isax isax-calendar-add5 text-primary me-1" />22 Aug 2025</span>
                    <span className="d-inline-flex align-items-center"><i className="isax isax-teacher5 text-secondary me-1" />10 Courses</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <a href="student-details.html"><img src="assets/img/students/student-02.jpg" className="rounded-3" alt /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                    <div>
                      <h5 className="mb-2 fw-bold"><a href="student-details.html">Mona Nancy</a></h5>
                      <span className="text-info d-inline-flex align-items-center"><i className="isax isax-location me-1" /><a href="#" className="text-info text-decoration-underline stu-loc">Los Angels</a></span>
                    </div>
                    <a href="#" className="avatar avatar-md avatar-rounded border"><i className="isax isax-messages text-gray-9 fs-14" /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between fs-14">
                    <span className="d-inline-flex align-items-center"><i className="isax isax-calendar-add5 text-primary me-1" />15 Jul 2025</span>
                    <span className="d-inline-flex align-items-center"><i className="isax isax-teacher5 text-secondary me-1" />08 Courses</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <a href="student-details.html"><img src="assets/img/students/student-03.jpg" className="rounded-3" alt /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                    <div>
                      <h5 className="mb-2 fw-bold"><a href="student-details.html">Patrick Alleman</a></h5>
                      <span className="text-info d-inline-flex align-items-center"><i className="isax isax-location me-1" /><a href="#" className="text-info text-decoration-underline stu-loc">Alabama</a></span>
                    </div>
                    <a href="#" className="avatar avatar-md avatar-rounded border"><i className="isax isax-messages text-gray-9 fs-14" /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between fs-14">
                    <span className="d-inline-flex align-items-center"><i className="isax isax-calendar-add5 text-primary me-1" />18 Jun 2025</span>
                    <span className="d-inline-flex align-items-center"><i className="isax isax-teacher5 text-secondary me-1" />12 Courses</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <a href="student-details.html"><img src="assets/img/students/student-04.jpg" className="rounded-3" alt /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                    <div>
                      <h5 className="mb-2 fw-bold"><a href="student-details.html">Olive Paxson</a></h5>
                      <span className="text-info d-inline-flex align-items-center"><i className="isax isax-location me-1" /><a href="#" className="text-info text-decoration-underline stu-loc">Brisbane</a></span>
                    </div>
                    <a href="#" className="avatar avatar-md avatar-rounded border"><i className="isax isax-messages text-gray-9 fs-14" /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between fs-14">
                    <span className="d-inline-flex align-items-center"><i className="isax isax-calendar-add5 text-primary me-1" />03 May 2025</span>
                    <span className="d-inline-flex align-items-center"><i className="isax isax-teacher5 text-secondary me-1" />07 Courses</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <a href="student-details.html"><img src="assets/img/students/student-05.jpg" className="rounded-3" alt /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                    <div>
                      <h5 className="mb-2 fw-bold"><a href="student-details.html">Chris Thomas</a></h5>
                      <span className="text-info d-inline-flex align-items-center"><i className="isax isax-location me-1" /><a href="#" className="text-info text-decoration-underline stu-loc">Newyork</a></span>
                    </div>
                    <a href="#" className="avatar avatar-md avatar-rounded border"><i className="isax isax-messages text-gray-9 fs-14" /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between fs-14">
                    <span className="d-inline-flex align-items-center"><i className="isax isax-calendar-add5 text-primary me-1" />14 Apr 2025</span>
                    <span className="d-inline-flex align-items-center"><i className="isax isax-teacher5 text-secondary me-1" />04 Courses</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <a href="student-details.html"><img src="assets/img/students/student-06.jpg" className="rounded-3" alt /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                    <div>
                      <h5 className="mb-2 fw-bold"><a href="student-details.html">Joyce Perron</a></h5>
                      <span className="text-info d-inline-flex align-items-center"><i className="isax isax-location me-1" /><a href="#" className="text-info text-decoration-underline stu-loc">Ontoro</a></span>
                    </div>
                    <a href="#" className="avatar avatar-md avatar-rounded border"><i className="isax isax-messages text-gray-9 fs-14" /></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between fs-14">
                    <span className="d-inline-flex align-items-center"><i className="isax isax-calendar-add5 text-primary me-1" />17 Mar 2025</span>
                    <span className="d-inline-flex align-items-center"><i className="isax isax-teacher5 text-secondary me-1" />06 Courses</span>
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
  <footer className="footer">
    <div className="footer-bg">
      <img src="assets/img/bg/footer-bg-01.png" className="footer-bg-1" alt />
      <img src="assets/img/bg/footer-bg-02.png" className="footer-bg-2" alt />
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-lg-4">
            <div className="footer-about">
              <div className="footer-logo">
                <img src="assets/img/logo.svg" alt />
              </div>
              <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>
              <div className="d-flex align-items-center">
                <a href="#" className="me-2"><img src="assets/img/icon/appstore.svg" alt /></a>
                <a href="#"><img src="assets/img/icon/googleplay.svg" alt /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row row-gap-4">
              <div className="col-lg-3">
                <div className="footer-widget footer-menu">
                  <h5 className="footer-title">For Instructor</h5>
                  <ul>
                    <li><a href="course-grid.html">Search Mentors</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="course-list.html">Booking</a></li>
                    <li><a href="student-dashboard.html">Students Dashboard</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-widget footer-menu">
                  <h5 className="footer-title">For Student</h5>
                  <ul>
                    <li><a href="javascript:void(0);">Appointments</a></li>
                    <li><a href="instructor-message.html">Chat</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="instructor-dashboard.html">Instructor Dashboard</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-widget footer-contact">
                  <h5 className="footer-title">Newsletter</h5>
                  <div className="subscribe-input">
                    <form action="javascript:void(0);">
                      <input type="email" className="form-control" placeholder="Enter your Email Address" />
                      <button type="submit" className="btn btn-primary btn-sm inline-flex align-items-center"><i className="isax isax-send-2 me-1" />Subscribe</button>
                    </form>
                  </div>
                  <div className="footer-contact-info">
                    <div className="footer-address d-flex align-items-center">
                      <img src="assets/img/icon/icon-20.svg" alt="Img" className="img-fluid me-2" />
                      <p> 3556  Beech Street, San Francisco,<br /> California, CA 94108 </p>
                    </div>
                    <div className="footer-address d-flex align-items-center">
                      <img src="assets/img/icon/icon-19.svg" alt="Img" className="img-fluid me-2" />
                      <p><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c8acbaada9a5bba4a5bb88adb0a9a5b8a4ade6aba7a5">[email&nbsp;protected]</a></p>
                    </div>
                    <div className="footer-address d-flex align-items-center">
                      <img src="assets/img/icon/icon-21.svg" alt="Img" className="img-fluid me-2" />
                      <p>+19 123-456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row row-gap-2">
          <div className="col-md-6">
            <div className="text-center text-md-start">
              <p className="text-white">Copyright © 2025 DreamsLMS. All rights reserved.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <ul className="d-flex align-items-center justify-content-center justify-content-md-end footer-link">
                <li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* /Footer */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete Course</h4>
            <p className="mb-3">Are you sure you want to delete course?</p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="javascript:void(0);" className="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-secondary rounded-pill">Yes, Remove All</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Modal */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default StudentsGrid