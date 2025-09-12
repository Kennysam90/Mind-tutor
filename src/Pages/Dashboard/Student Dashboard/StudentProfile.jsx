import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'

const StudentProfile = () => {
  return (
    <>
        {/* Main Wrapper */}
<div className="main-wrapper">
  {/* Header Topbar*/}
  <Header />
  {/* /Header Topbar*/}
  {/* Header */}
  <header className="header-two">
    <div className="container">
      <div className="header-nav">
        <div className="navbar-header">
          <a id="mobile_btn" href="javascript:void(0);">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          <div className="navbar-logo">
            <a className="logo-white header-logo" href="index.html">
              <img src="assets/img/logo.svg" className="logo" alt="Logo" />
            </a>
            <a className="logo-dark header-logo" href="index.html">
              <img src="assets/img/logo-white.svg" className="logo" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="main-menu-wrapper">								
          <div className="menu-header">
            <a href="index.html" className="menu-logo">
              <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
            </a>
            <a id="menu_close" className="menu-close" href="javascript:void(0);">
              <i className="fas fa-times" />
            </a>
          </div>
          <ul className="main-nav">
            <li className="has-submenu megamenu">
              <a href="#">Home <i className="isax isax-add" /></a>
              <ul className="submenu mega-submenu">
                <li>
                  <div className="megamenu-wrapper">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <a href="index.html" className="inner-demo-img"><img src="assets/img/home/home-01.jpg" className="img-fluid " alt="img" /></a>
                          </div>
                          <div className="demo-info">
                            <a href="index.html" className="inner-demo-img">Home 1</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <a href="index-2.html" className="inner-demo-img"><img src="assets/img/home/home-02.jpg" className="img-fluid " alt="img" /></a>
                          </div>
                          <div className="demo-info">
                            <a href="index-2.html" className="inner-demo-img">Home 2</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <a href="index-3.html" className="inner-demo-img"><img src="assets/img/home/home-03.jpg" className="img-fluid " alt="img" /></a>
                          </div>
                          <div className="demo-info">
                            <a href="index-3.html" className="inner-demo-img">Home 3</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <a href="index-4.html" className="inner-demo-img"><img src="assets/img/home/home-04.jpg" className="img-fluid " alt="img" /></a>
                          </div>
                          <div className="demo-info">
                            <a href="index-4.html" className="inner-demo-img">Home 4</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <a href="index-5.html" className="inner-demo-img"><img src="assets/img/home/home-05.jpg" className="img-fluid " alt="img" /></a>
                          </div>
                          <div className="demo-info">
                            <a href="index-5.html" className="inner-demo-img">Home 5</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <a href="index-6.html" className="inner-demo-img"><img src="assets/img/home/home-06.jpg" className="img-fluid " alt="img" /></a>
                          </div>
                          <div className="demo-info">
                            <a href="index-6.html" className="inner-demo-img">Home 6</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#">Courses <i className="isax isax-add" /></a>
              <ul className="submenu">
                <li className="has-submenu">
                  <a href="javascript:void(0);">Courses</a>
                  <ul className="submenu">
                    <li><a href="course-grid.html">Course Grid</a></li>
                    <li><a href="course-list.html">Course List</a></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0);">Course Category</a>
                  <ul className="submenu">
                    <li><a href="course-category.html">Course Category</a></li>
                    <li><a href="course-category-2.html">Course Category 2</a></li>
                    <li><a href="course-category-3.html">Course Category 3</a></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0);">Course Details</a>
                  <ul className="submenu">
                    <li><a href="course-details.html">Course Details</a></li>
                    <li><a href="course-details-2.html">Course Details 2</a></li>
                  </ul>
                </li>										
                <li><a href="course-resume.html">Course Resume</a></li>
                <li><a href="course-watch.html">Course Watch</a></li>
                <li><a href="cart.html">Course Cart</a></li>
                <li><a href="checkout.html">Course Checkout</a></li>
                <li><a href="add-course.html">Add New Course</a></li>
              </ul>
            </li>
            <li className="has-submenu active">
              <a href="javascript:void(0);">Dashboard <i className="isax isax-add" /></a>
              <ul className="submenu">
                <li className="has-submenu">
                  <a href="javascript:void(0);">Instructor Dashboard</a>
                  <ul className="submenu">
                    <li><a href="instructor-dashboard.html">Dashboard</a></li>
                    <li><a href="instructor-profile.html">My Profile</a></li>
                    <li><a href="instructor-course.html">Course</a></li>
                    <li><a href="instructor-announcements.html">Announcements</a></li>
                    <li><a href="instructor-assignment.html">Assignments</a></li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Student</a>
                      <ul className="submenu">
                        <li><a href="students.html">Student Grid</a></li>
                        <li><a href="student-list.html">Student List</a></li>
                        <li><a href="student-details.html">Student Details</a></li>
                      </ul>
                    </li>
                    <li><a href="instructor-quiz.html">Quiz</a></li>
                    <li><a href="instructor-quiz-results.html">Quiz Results</a></li>
                    <li><a href="instructor-certificate.html">Certificates</a></li>
                    <li><a href="instructor-earnings.html">Earning</a></li>
                    <li><a href="instructor-payout.html">Payout</a></li>
                    <li><a href="instructor-statements.html">Statement</a></li>
                    <li><a href="instructor-tickets.html">Support Tickets</a></li>
                    <li><a href="instructor-settings.html">Settings</a></li>
                  </ul>
                </li>
                <li className="has-submenu active">
                  <a href="javascript:void(0);">Student Dashboard</a>
                  <ul className="submenu">
                    <li><a href="student-dashboard.html">Student Dashboard</a></li>
                    <li className="active"><a href="student-profile.html">My Profile</a></li>
                    <li><a href="student-courses.html">Enrolled Courses</a></li>
                    <li><a href="student-certificates.html">My Certificates</a></li>
                    <li><a href="student-wishlist.html">Wishlist</a></li>
                    <li><a href="student-reviews.html">Reviews</a></li>
                    <li><a href="student-quiz.html">My Quiz Attempts</a></li>
                    <li><a href="student-order-history.html">Order History</a></li>
                    <li><a href="student-referral.html">Referrals</a></li>
                    <li><a href="student-messages.html">Messages</a></li>
                    <li><a href="student-tickets.html">Support Ticket</a></li>
                    <li><a href="student-settings.html">Settings</a></li>
                  </ul>
                </li>
              </ul>
            </li>	
            <li className="has-submenu">
              <a href="#">Pages <i className="isax isax-add" /></a>
              <ul className="submenu">
                <li className="has-submenu">
                  <a href="#">Instructors</a>
                  <ul className="submenu">
                    <li><a href="instructor-grid.html">Instructor Grid</a></li>
                    <li><a href="instructor-list.html">Instructor List</a></li>
                    <li><a href="instructor-details.html">Instructor Details</a></li>
                  </ul>
                </li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="contact-us.html">Contact us</a></li>
                <li><a href="notifications.html">Notifications</a></li>
                <li><a href="become-an-instructor.html">Become an Instructor</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li className="has-submenu">
                  <a href="#">Authentication</a>
                  <ul className="submenu">
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="forgot-password.html">Forgot Password</a></li>
                    <li><a href="reset-password.html">Reset Password</a></li>
                    <li><a href="set-password.html">Set Password</a></li>
                    <li><a href="otp.html">OTP</a></li>
                    <li><a href="lock-screen.html">Lock Screen</a></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">Error</a>
                  <ul className="submenu">
                    <li><a href="error-404.html">404 Error</a></li>
                    <li><a href="error-500.html">500 Error</a></li>
                  </ul>
                </li>
                <li><a href="pricing-plan.html">Pricing Plan</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="coming-soon.html">Coming Soon</a></li>
                <li><a href="under-construction.html">Under Construction</a></li>
                <li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                <li><a href="index-rtl.html">RTL</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#">Blog <i className="isax isax-add" /></a>
              <ul className="submenu">
                <li className="has-submenu">
                  <a href="#">Blog Layouts</a>
                  <ul className="submenu">
                    <li><a href="blog-grid.html">Blog 1 Grid</a></li>
                    <li><a href="blog-2-grid.html">Blog 2 Grid</a></li>
                    <li><a href="blog-3-grid.html">Blog 3 Grid</a></li>
                    <li><a href="blog-carousal.html">Blog Carousal</a></li>
                    <li><a href="blog-masonry.html">Blog Mansory</a></li>
                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">Blog Details</a>
                  <ul className="submenu">
                    <li><a href="blog-details.html">Blog Details</a></li>
                    <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                    <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="header-btn d-flex align-items-center">
          <div className="icon-btn me-2">
            <a href="javascript:void(0);" id="dark-mode-toggle" className="theme-toggle activate">
              <i className="isax isax-sun-15" />
            </a>
            <a href="javascript:void(0);" id="light-mode-toggle" className="theme-toggle">
              <i className="isax isax-moon" />
            </a>
          </div>
          <div className="icon-btn me-3">
            <a href="cart.html" className="position-relative">
              <i className="isax isax-shopping-cart5" />
              <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
            </a>
          </div>
          <div className="dropdown profile-dropdown">
            <a href="javascript:void(0);" className="d-flex align-items-center" data-bs-toggle="dropdown">
              <span className="avatar">
                <img src="assets/img/user/user-02.jpg" alt="Img" className="img-fluid rounded-circle" />
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <div className="profile-header d-flex align-items-center">
                <div className="avatar">
                  <img src="assets/img/user/user-02.jpg" alt="Img" className="img-fluid rounded-circle" />
                </div>
                <div>
                  <h6>Ronald Richard</h6>
                  <p><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b8cbcccddcddd6ccdcddd5d7f8ddc0d9d5c8d4dd96dbd7d5">[email&nbsp;protected]</a></p>
                </div>
              </div>
              <ul className="profile-body">
                <li>
                  <a className="dropdown-item d-inline-flex align-items-center rounded fw-medium" href="student-profile.html"><i className="isax isax-security-user me-2" />My Profile</a>
                </li>
                <li>
                  <a className="dropdown-item d-inline-flex align-items-center rounded fw-medium" href="student-quiz.html"><i className="isax isax-award me-2" />Quiz Attempts</a>
                </li>
                <li>
                  <a className="dropdown-item d-inline-flex align-items-center rounded fw-medium2" href="student-order-history.html"><i className="isax isax-shopping-cart me-2" />Order History</a>
                </li>
                <li>
                  <a className="dropdown-item d-inline-flex align-items-center rounded fw-medium" href="student-messages.html"><i className="isax isax-messages-3 me-2" />Messages<span className="message-count">2</span></a>
                </li>
                <li>
                  <a className="dropdown-item d-inline-flex align-items-center rounded fw-medium" href="student-settings.html"><i className="isax isax-setting-2 me-2" />Settings</a>
                </li>										
              </ul>
              <div className="profile-footer">
                <a className="dropdown-item d-inline-flex align-items-center rounded fw-medium" href="login.html"><i className="isax isax-arrow-2 me-2" />Log in as Instructor</a>
                <a href="index.html" className="btn btn-secondary d-inline-flex align-items-center justify-content-center w-100"><i className="isax isax-logout me-2" />Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* /Header */}		   
  {/* Breadcrumb */}
  <div className="breadcrumb-bar text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title mb-2">My Profile</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">My Profile</li>
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
          <div className="page-title d-flex align-items-center justify-content-between">
            <h5 className="fw-bold">My Profile</h5>
            <a href="#" className="edit-profile-icon"><i className="isax isax-edit-2" /></a>
          </div>
          <div className="card mb-0">
            <div className="card-body">
              <h6 className="fs-18 page-title fw-bold">Basic Information</h6>
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>First Name</h6>
                    <span>Ronald</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>Last Name</h6>
                    <span>Richard</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>Registration Date</h6>
                    <span>16 Jan 2024, 11:15 AM</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>User Name</h6>
                    <span>studentdemo</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>Phone Number</h6>
                    <span>90154-91036</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>Email</h6>
                    <span><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bccfc8c9d8d9d2c8d8d9d1d3fcd9c4ddd1ccd0d992dfd3d1">[email&nbsp;protected]</a></span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>Gender</h6>
                    <span>Male</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>DOB</h6>
                    <span>16 Jan 2020</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>Age</h6>
                    <span>24</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div>
                    <h6>Bio</h6>
                    <span>Hello! I'm Ronald Richard. I'm passionate about developing innovative software solutions, analyzing classic literature. I aspire to become a software developer, work as an editor. In my free time, I enjoy coding, reading, hiking etc.
                    </span>
                  </div>
                </div>
              </div>								
            </div>
          </div>
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
                      <p><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="eb8f998e8a8698878698ab8e938a869b878ec5888486">[email&nbsp;protected]</a></p>
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

export default StudentProfile