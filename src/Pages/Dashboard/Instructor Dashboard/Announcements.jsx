import React from 'react'
import TutorSidebar from '../../../Component/TutorSidebar'
import Header from '../../../Component/Header'

const Announcements = () => {
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
          <h2 className="breadcrumb-title mb-2">Announcements</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Announcements</li>
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
            <h5 className="fw-bold">Announcements</h5>
            <div>
              <a href="javascript:void(0);" className="btn btn-secondary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_announcement">
                <i className="isax isax-add-circle me-1" />Add Announcement
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="mb-3">
                <div className="dropdown">
                  <a href="javascript:void(0);" className="dropdown-toggle btn rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                    Status
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Published</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Draft</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <th>Date</th>
                  <th>Announcements</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>22 Aug 2025, 05:40 PM </td>
                  <td>
                    <div>
                      <h6 className="mb-1"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_announcement">Welcome to Introduction to Programming</a></h6>
                      <p>Course: Introduction to Programming - Python &amp; Java</p>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" data-bs-toggle="modal" data-bs-target="#edit_announcement" /></a>
                      <a href="javascript:void(0);" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10 Aug 2025, 10:15 AM</td>
                  <td>
                    <div>
                      <h6 className="mb-1"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_announcement">Essay Assignment Due Date Approaching</a></h6>
                      <p>Course: Sketch from A to Z (2024): Become an app designer</p>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-skyblue d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Draft</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" data-bs-toggle="modal" data-bs-target="#edit_announcement" /></a>
                      <a href="javascript:void(0);" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>26 Jul 2025, 01:30 PM</td>
                  <td>
                    <div>
                      <h6 className="mb-1"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_announcement">Final Exam Schedule and Preparation Tips</a></h6>
                      <p>Course: Learn Angular Fundamentals Beginners Guide</p>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" data-bs-toggle="modal" data-bs-target="#edit_announcement" /></a>
                      <a href="javascript:void(0);" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>15 May 2025, 04:00 PM</td>
                  <td>
                    <div>
                      <h6 className="mb-1"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_announcement">New Video Lectures Added</a></h6>
                      <p>Course: Learn JavaScript and Express to become a Expert</p>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#edit_announcement"><i className="isax isax-edit-2" /></a>
                      <a href="javascript:void(0);" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
                      <p><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6b0f190e0a06180706182b0e130a061b070e45080406">[email&nbsp;protected]</a></p>
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
  {/* Add Announcement */}
  <div className="modal fade" id="add_announcement">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Add New Announcement</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-announcements.html">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Course <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>Information About UI/UX Design Degree</option>
                    <option>Wordpress for Beginners - Master Wordpress Quickly</option>
                    <option>Introduction to Python Programming</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Announcement Title <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" placeholder="Enter Description" defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-0">
                  <label className="form-label">Status <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>Published</option>
                    <option>Draft</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-secondary rounded-pill" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Announcement */}
  {/* Edit Announcement */}
  <div className="modal fade" id="edit_announcement">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Edit Announcement</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-announcements.html">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Course <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>Information About UI/UX Design Degree</option>
                    <option>Wordpress for Beginners - Master Wordpress Quickly</option>
                    <option>Introduction to Python Programming</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Announcement Title <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue="Welcome to Introduction to Programming" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" defaultValue={"Enter Description"} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-0">
                  <label className="form-label">Status <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>Published</option>
                    <option>Draft</option>
                  </select>
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
  {/* /Edit Announcement */}
  {/* Announcement Details */}
  <div className="modal fade" id="view_announcement">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Announcement Details</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <h6 className="mb-1">Course</h6>
            <p>Introduction to Programming - Python &amp; Java</p>
          </div>
          <div className="mb-3">
            <h6 className="mb-1">Title</h6>
            <p>Guest Lecture Announcement</p>
          </div>
          <div className="mb-3">
            <h6 className="mb-1">Description</h6>
            <p>I am excited to inform you that we will be having a guest lecture from , an expert . 
              This will be an excellent opportunity to gain insight into and ask any questions you might have. 
              Please make every effort to attend, as participation will count towards.
            </p>
          </div>
          <div className="mb-0">
            <h6 className="mb-1">Added On</h6>
            <p>26 Jul 2025, 01:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Announcement Details */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete Announcements</h4>
            <p className="mb-3">Are you sure you want to delete announcements?</p>
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

export default Announcements