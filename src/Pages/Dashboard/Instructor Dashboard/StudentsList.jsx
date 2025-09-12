import React from 'react'
import Header from '../../../Component/Header'
import TutorSidebar from '../../../Component/TutorSidebar'
import { Link } from 'react-router-dom'

const StudentsList = () => {
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
          <h2 className="breadcrumb-title mb-2">Students List</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Students List</li>
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
              <Link to="/studentslist" className="active me-2"><i className="isax isax-task" /></Link>
              <Link to="/studentsgrid"><i className="isax isax-element-3" /></Link>
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
          <div className="table-responsive custom-table">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Enroll Date</th>
                  <th>Progress</th>
                  <th>Courses</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="student-details.html" className="text-primary">#STU020</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-01.jpg" alt />
                      </a>
                      <a href="student-details.html"><p className="fs-14">Thompson Hicks</p></a>
                    </div>
                  </td>
                  <td>22 Aug 2025</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: 4, width: 110}}>
                        <div className="progress-bar bg-success" style={{width: '0%'}} />
                      </div>
                      <span className="ms-2">0%</span>
                    </div>
                  </td>
                  <td>10</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-messages-3" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="student-details.html" className="text-primary">#STU019</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-06.jpg" alt />
                      </a>
                      <a href="student-details.html"><p className="fs-14">Jennifer Tovar</p></a>
                    </div>
                  </td>
                  <td>10 Aug 2025</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: 4, width: 110}}>
                        <div className="progress-bar bg-success" style={{width: '15%'}} />
                      </div>
                      <span className="ms-2">15%</span>
                    </div>
                  </td>
                  <td>08</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-messages-3" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="student-details.html" className="text-primary">#STU018</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-09.jpg" alt />
                      </a>
                      <a href="student-details.html"><p className="fs-14">James Schulte</p></a>
                    </div>
                  </td>
                  <td>26 Jul 2025</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: 4, width: 110}}>
                        <div className="progress-bar bg-success" style={{width: '60%'}} />
                      </div>
                      <span className="ms-2">60%</span>
                    </div>
                  </td>
                  <td>12</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-messages-3" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="student-details.html" className="text-primary">#STU017</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-20.jpg" alt />
                      </a>
                      <a href="student-details.html"><p className="fs-14">Kristy Cardona</p></a>
                    </div>
                  </td>
                  <td>12 Jul 2025</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: 4, width: 110}}>
                        <div className="progress-bar bg-success" style={{width: '20%'}} />
                      </div>
                      <span className="ms-2">20%</span>
                    </div>
                  </td>
                  <td>17</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-messages-3" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="student-details.html" className="text-primary">#STU016</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-27.jpg" alt />
                      </a>
                      <a href="student-details.html"><p className="fs-14">William Aragon</p></a>
                    </div>
                  </td>
                  <td>02 Jul 2025</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: 4, width: 110}}>
                        <div className="progress-bar bg-success" style={{width: '10%'}} />
                      </div>
                      <span className="ms-2">10%</span>
                    </div>
                  </td>
                  <td>09</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-messages-3" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="student-details.html" className="text-primary">#STU015</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-30.jpg" alt />
                      </a>
                      <a href="student-details.html"><p className="fs-14">Shirley Lis</p></a>
                    </div>
                  </td>
                  <td>25 Jun 2025</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: 4, width: 110}}>
                        <div className="progress-bar bg-success" style={{width: '80%'}} />
                      </div>
                      <span className="ms-2">80%</span>
                    </div>
                  </td>
                  <td>15</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-messages-3" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="student-details.html" className="text-primary">#STU014</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-17.jpg" alt />
                      </a>
                      <a href="student-details.html"><p className="fs-14">John Brewer</p></a>
                    </div>
                  </td>
                  <td>17 Jun 2025</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: 4, width: 110}}>
                        <div className="progress-bar bg-success" style={{width: '40%'}} />
                      </div>
                      <span className="ms-2">40%</span>
                    </div>
                  </td>
                  <td>13</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-messages-3" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="student-details.html" className="text-primary">#STU013</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-37.jpg" alt />
                      </a>
                      <a href="student-details.html"><p className="fs-14">Doris Hughes</p></a>
                    </div>
                  </td>
                  <td>04 Jun 2025</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: 4, width: 110}}>
                        <div className="progress-bar bg-success" style={{width: '50%'}} />
                      </div>
                      <span className="ms-2">50%</span>
                    </div>
                  </td>
                  <td>17</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-messages-3" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="student-details.html" className="text-primary">#STU012</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-04.jpg" alt />
                      </a>
                      <a href="student-details.html"><p className="fs-14">Sarah Martinez</p></a>
                    </div>
                  </td>
                  <td>20 May 2025</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: 4, width: 110}}>
                        <div className="progress-bar bg-success" style={{width: '20%'}} />
                      </div>
                      <span className="ms-2">20%</span>
                    </div>
                  </td>
                  <td>08</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-messages-3" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="student-details.html" className="text-primary">#STU011</a></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-18.jpg" alt />
                      </a>
                      <a href="student-details.html"><p className="fs-14">Sarah Martinez</p></a>
                    </div>
                  </td>
                  <td>15 May 2025</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: 4, width: 110}}>
                        <div className="progress-bar bg-success" style={{width: '60%'}} />
                      </div>
                      <span className="ms-2">60%</span>
                    </div>
                  </td>
                  <td>10</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-messages-3" /></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /pagination */}
          <div className="row align-items-center mt-4">
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
                      <p><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d7b3a5b2b6baa4bbbaa497b2afb6baa7bbb2f9b4b8ba">[email&nbsp;protected]</a></p>
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
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default StudentsList