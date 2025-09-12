import React from 'react'
import Header from '../../../Component/Header'
import TutorSidebar from '../../../Component/TutorSidebar'

const Quiz = () => {
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
          <h2 className="breadcrumb-title mb-2">Quiz</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Quiz</li>
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
            <h5 className="fw-bold">Quiz</h5>
            <div>
              <a href="#" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#add_quiz">Add Quiz</a>
            </div>
          </div>
          <div className="border rounded-2 p-3 mb-3">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div>
                  <h6 className="mb-2"><a href="instructor-quiz-questions.html">Information About UI/UX Design Degree</a></h6>
                  <div className="question-info d-flex align-items-center">
                    <p className="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i className="isax isax-message-question5 text-primary-soft me-2" />25 Questions</p>
                    <p className="d-flex align-items-center fs-14 mb-0"><i className="isax isax-clock5 text-secondary-soft me-2" />30 Minutes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                  <a href="instructor-quiz-results.html" className="text-info text-decoration-underline fs-12 fw-medium me-3">View Results</a>
                  <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#edit_quiz"><i className="isax isax-edit-2" /></a>
                  <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-2 p-3 mb-3">
            <div className="row align-items-center gy-3">
              <div className="col-md-8">
                <div>
                  <h6 className="mb-2"><a href="instructor-quiz-questions.html">Learn JavaScript and Express to become a Expert</a></h6>
                  <div className="question-info d-flex align-items-center">
                    <p className="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i className="isax isax-message-question5 text-primary-soft me-2" />15 Questions</p>
                    <p className="d-flex align-items-center fs-14 mb-0"><i className="isax isax-clock5 text-secondary-soft me-2" />25 Minutes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                  <a href="instructor-quiz-results.html" className="text-info text-decoration-underline fs-12 fw-medium me-3">View Results</a>
                  <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#edit_quiz"><i className="isax isax-edit-2" /></a>
                  <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-2 p-3 mb-3">
            <div className="row align-items-center gy-3">
              <div className="col-md-8">
                <div>
                  <h6 className="mb-2"><a href="instructor-quiz-questions.html">Introduction to Python Programming</a></h6>
                  <div className="question-info d-flex align-items-center">
                    <p className="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i className="isax isax-message-question5 text-primary-soft me-2" />22 Questions</p>
                    <p className="d-flex align-items-center fs-14 mb-0"><i className="isax isax-clock5 text-secondary-soft me-2" />15 Minutes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                  <a href="instructor-quiz-results.html" className="text-info text-decoration-underline fs-12 fw-medium me-3">View Results</a>
                  <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#edit_quiz"><i className="isax isax-edit-2" /></a>
                  <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-2 p-3 mb-3">
            <div className="row align-items-center gy-3">
              <div className="col-md-8">
                <div>
                  <h6 className="mb-2"><a href="instructor-quiz-questions.html">Build Responsive Websites with HTML5 and CSS3</a></h6>
                  <div className="question-info d-flex align-items-center">
                    <p className="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i className="isax isax-message-question5 text-primary-soft me-2" />30 Questions</p>
                    <p className="d-flex align-items-center fs-14 mb-0"><i className="isax isax-clock5 text-secondary-soft me-2" />50 Minutes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                  <a href="instructor-quiz-results.html" className="text-info text-decoration-underline fs-12 fw-medium me-3">View Results</a>
                  <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                  <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-trash" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-2 p-3 mb-3 mb-0">
            <div className="row align-items-center gy-3">
              <div className="col-md-8">
                <div>
                  <h6 className="mb-2"><a href="instructor-quiz-questions.html">Information About Photoshop Design Degree</a></h6>
                  <div className="question-info d-flex align-items-center">
                    <p className="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i className="isax isax-message-question5 text-primary-soft me-2" />20 Questions</p>
                    <p className="d-flex align-items-center fs-14 mb-0"><i className="isax isax-clock5 text-secondary-soft me-2" />20 Minutes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                  <a href="instructor-quiz-results.html" className="text-info text-decoration-underline fs-12 fw-medium me-3">View Results</a>
                  <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#edit_quiz"><i className="isax isax-edit-2" /></a>
                  <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
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
                      <p><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bcd8ced9ddd1cfd0d1cffcd9c4ddd1ccd0d992dfd3d1">[email&nbsp;protected]</a></p>
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
  {/* Add Question */}
  <div className="modal fade" id="add_quiz">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Add New Quiz</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-quiz-questions.html">
          <div className="modal-body pb-0">
            <div className="mb-3">
              <label className="form-label">Course <span className="text-danger"> *</span></label>
              <select className="select">
                <option>Select</option>
                <option>Information About UI/UX Design Degree</option>
                <option>Learn JavaScript and Express to become a Expert</option>
                <option>Introduction to Python Programming</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Quiz Title <span className="text-danger"> *</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">No of Questions <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Total Marks <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Pass Mark <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Duration <span className="text-danger"> *</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control timepicker" placeholder="dd/mm/yyyy" defaultValue="02-05-2024" />
                    <span className="input-icon-addon">
                      <i className="isax isax-clock" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-secondary rounded-pill" type="submit">Add Quiz</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Question */}
  {/* Edit Question */}
  <div className="modal fade" id="edit_quiz">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Edit Quiz</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-quiz-questions.html">
          <div className="modal-body pb-0">
            <div className="mb-3">
              <label className="form-label">Course <span className="text-danger"> *</span></label>
              <select className="select">
                <option>Select</option>
                <option selected>Information About UI/UX Design Degree</option>
                <option>Learn JavaScript and Express to become a Expert</option>
                <option>Introduction to Python Programming</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Quiz Title <span className="text-danger"> *</span></label>
              <input type="text" className="form-control" defaultValue="Information About UI/UX Design Degree" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">No of Questions <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue={10} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Total Marks <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue={100} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Pass Mark <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue={50} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Duration <span className="text-danger"> *</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control timepicker" placeholder="dd/mm/yyyy" defaultValue="02-05-2024" />
                    <span className="input-icon-addon">
                      <i className="isax isax-clock" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-secondary rounded-pill" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Question */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete Quiz</h4>
            <p className="mb-3">Are you sure you want to delete Quiz?</p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="javascript:void(0);" className="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-secondary rounded-pill">Yes, Delete</a>
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

export default Quiz