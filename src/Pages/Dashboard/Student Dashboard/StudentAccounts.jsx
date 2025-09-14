import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'
import StudentTopbar from '../../../Component/StudentTopbar'
import Accounts from '../../../Component/Accounts'

const StudentAccounts = () => {
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
          <h2 className="breadcrumb-title mb-2">Settings</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Settings</li>
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
          <div className="mb-3">
            <h5>Settings</h5>
          </div>						
          <StudentTopbar />
          <Accounts />					
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
                      <p><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3551475054584659584675504d54584559501b565a58">[email&nbsp;protected]</a></p>
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
          <span className="avatar avatar-lg bg-light rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Remove All</h4>
            <p className="mb-3">Are you sure you want to remove all from wishlist?</p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="#" className="btn btn-light rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
              <a href="#" className="btn btn-secondary rounded-pill">Yes, Remove All</a>
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

export default StudentAccounts