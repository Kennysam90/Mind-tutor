import React from 'react'
import TutorSidebar from '../../../Component/TutorSidebar'
import Header from '../../../Component/Header'

const InstructorCourses = () => {
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
          <h2 className="breadcrumb-title mb-2">Courses</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Courses</li>
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
          <div className="row">
            <div className="col-xxl col-lg-4 col-md-6">
              <div className="card bg-success">
                <div className="card-body">
                  <h6 className="fw-medium mb-1 text-white">Active Courses</h6>
                  <h4 className="fw-bold text-white">45</h4>
                </div>
              </div>
            </div>
            <div className="col-xxl col-lg-4 col-md-6">
              <div className="card bg-secondary">
                <div className="card-body">
                  <h6 className="fw-medium mb-1 text-white">Pending Courses</h6>
                  <h4 className="fw-bold text-white">21</h4>
                </div>
              </div>
            </div>
            <div className="col-xxl col-lg-4 col-md-6">
              <div className="card bg-info">
                <div className="card-body">
                  <h6 className="fw-medium mb-1 text-white">Draft Courses</h6>
                  <h4 className="fw-bold text-white">15</h4>
                </div>
              </div>
            </div>
            <div className="col-xxl col-lg-4 col-md-6">
              <div className="card bg-skyblue">
                <div className="card-body">
                  <h6 className="fw-medium mb-1 text-white">Free Courses</h6>
                  <h4 className="fw-bold text-white">16</h4>
                </div>
              </div>
            </div>
            <div className="col-xxl col-lg-4 col-md-6">
              <div className="card bg-purple">
                <div className="card-body">
                  <h6 className="fw-medium mb-1 text-white">Paid Courses</h6>
                  <h4 className="fw-bold text-white">21</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="page-title d-flex align-items-center justify-content-between">
            <h5 className="fw-bold">Courses</h5>
            <div className="d-flex align-items-center list-icons">
              <a href="instructor-course.html" className="active me-2"><i className="isax isax-task" /></a>
              <a href="instructor-course-grid.html"><i className="isax isax-element-3" /></a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="mb-3">
                <div className="dropdown">
                  <a href="javascript:void(0);" className="dropdown-toggle text-gray-6 btn  rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                    Status
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Published</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item rounded-1">Pending</a>
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
                  <th>Course Name</th>
                  <th>Students</th>
                  <th>Price</th>
                  <th>Ratings</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-lg me-2 flex-shrink-0"><img className="img-fluid object-fit-cover" src="assets/img/course/course-01.jpg" alt /></a>
                      <div>
                        <h6 className="fw-medium mb-2"><a href="course-details.html">Information About UI/UX Design Degree</a></h6>
                        <div className="d-flex align-items-center">
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-video-circle me-1 text-gray-9 fw-bold" />11 Lessons</span>
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-message-question me-1 text-gray-9 fw-bold" />2 Quizzes</span>
                          <span className="d-inline-flex fs-12 align-items-center"><i className="isax isax-clock me-1 text-gray-9 fw-bold" />03:15:00 Hours</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>600</td>
                  <td>$160</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star fs-12 filled text-warning me-1" />
                      <span>4.5 (300)</span>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-lg me-2"><img className="img-fluid object-fit-cover" src="assets/img/course/course-02.jpg" alt /></a>
                      <div>
                        <h6 className="fw-medium mb-2"><a href="course-details.html">Wordpress for Beginners - Master Wordpress Quickly</a></h6>
                        <div className="d-flex align-items-center">
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-video-circle me-1 text-gray-9 fw-bold" />11 Lessons</span>
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-message-question me-1 text-gray-9 fw-bold" />2 Quizzes</span>
                          <span className="d-inline-flex fs-12 align-items-center"><i className="isax isax-clock me-1 text-gray-9 fw-bold" />03:15:00 Hours</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>500</td>
                  <td>$180</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star fs-12 filled text-warning me-1" />
                      <span>4.2 (430)</span>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-skyblue d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Pending</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-lg me-2"><img className="img-fluid object-fit-cover" src="assets/img/course/course-03.jpg" alt /></a>
                      <div>
                        <h6 className="fw-medium mb-2"><a href="course-details.html">Sketch from A to Z (2024): Become an app designer</a></h6>
                        <div className="d-flex align-items-center">
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-video-circle me-1 text-gray-9 fw-bold" />11 Lessons</span>
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-message-question me-1 text-gray-9 fw-bold" />2 Quizzes</span>
                          <span className="d-inline-flex fs-12 align-items-center"><i className="isax isax-clock me-1 text-gray-9 fw-bold" />03:15:00 Hours</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>300</td>
                  <td>$200</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star fs-12 filled text-warning me-1" />
                      <span>4.7 (140)</span>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-info d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Draft</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-lg me-2"><img className="img-fluid object-fit-cover" src="assets/img/course/course-04.jpg" alt /></a>
                      <div>
                        <h6 className="fw-medium mb-2"><a href="course-details.html">Build Responsive Real World Websites with Crash Course</a></h6>
                        <div className="d-flex align-items-center">
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-video-circle me-1 text-gray-9 fw-bold" />11 Lessons</span>
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-message-question me-1 text-gray-9 fw-bold" />2 Quizzes</span>
                          <span className="d-inline-flex fs-12 align-items-center"><i className="isax isax-clock me-1 text-gray-9 fw-bold" />03:15:00 Hours</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>400</td>
                  <td>$220</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star fs-12 filled text-warning me-1" />
                      <span>4.4 (260)</span>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-lg me-2"><img className="img-fluid object-fit-cover" src="assets/img/course/course-05.jpg" alt /></a>
                      <div>
                        <h6 className="fw-medium mb-2"><a href="course-details.html">Learn JavaScript and Express to become a Expert</a></h6>
                        <div className="d-flex align-items-center">
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-video-circle me-1 text-gray-9 fw-bold" />11 Lessons</span>
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-message-question me-1 text-gray-9 fw-bold" />2 Quizzes</span>
                          <span className="d-inline-flex fs-12 align-items-center"><i className="isax isax-clock me-1 text-gray-9 fw-bold" />03:15:00 Hours</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>700</td>
                  <td>$170</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star fs-12 filled text-warning me-1" />
                      <span>4.8 (180)</span>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-lg me-2"><img className="img-fluid object-fit-cover" src="assets/img/course/course-06.jpg" alt /></a>
                      <div>
                        <h6 className="fw-medium mb-2"><a href="course-details.html">Introduction to Python Programming</a></h6>
                        <div className="d-flex align-items-center">
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-video-circle me-1 text-gray-9 fw-bold" />11 Lessons</span>
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-message-question me-1 text-gray-9 fw-bold" />2 Quizzes</span>
                          <span className="d-inline-flex fs-12 align-items-center"><i className="isax isax-clock me-1 text-gray-9 fw-bold" />03:15:00 Hours</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>450</td>
                  <td>$150</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star fs-12 filled text-warning me-1" />
                      <span>4.8 (180)</span>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-lg me-2"><img className="img-fluid object-fit-cover" src="assets/img/course/course-07.jpg" alt /></a>
                      <div>
                        <h6 className="fw-medium mb-2"><a href="course-details.html">Build Responsive Websites with HTML5 and CSS3</a></h6>
                        <div className="d-flex align-items-center">
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-video-circle me-1 text-gray-9 fw-bold" />11 Lessons</span>
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-message-question me-1 text-gray-9 fw-bold" />2 Quizzes</span>
                          <span className="d-inline-flex fs-12 align-items-center"><i className="isax isax-clock me-1 text-gray-9 fw-bold" />03:15:00 Hours</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>620</td>
                  <td>$130</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star fs-12 filled text-warning me-1" />
                      <span>4.9 (510)</span>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-lg me-2"><img className="img-fluid object-fit-cover" src="assets/img/course/course-08.jpg" alt /></a>
                      <div>
                        <h6 className="fw-medium mb-2"><a href="course-details.html">Information About Photoshop Design Degree</a></h6>
                        <div className="d-flex align-items-center">
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-video-circle me-1 text-gray-9 fw-bold" />11 Lessons</span>
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-message-question me-1 text-gray-9 fw-bold" />2 Quizzes</span>
                          <span className="d-inline-flex fs-12 align-items-center"><i className="isax isax-clock me-1 text-gray-9 fw-bold" />03:15:00 Hours</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>550</td>
                  <td>$190</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star fs-12 filled text-warning me-1" />
                      <span>4.6 (400)</span>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-lg me-2"><img className="img-fluid object-fit-cover" src="assets/img/course/course-09.jpg" alt /></a>
                      <div>
                        <h6 className="fw-medium mb-2"><a href="course-details.html">C# Developers Double Your Coding with Visual Studio</a></h6>
                        <div className="d-flex align-items-center">
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-video-circle me-1 text-gray-9 fw-bold" />11 Lessons</span>
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-message-question me-1 text-gray-9 fw-bold" />2 Quizzes</span>
                          <span className="d-inline-flex fs-12 align-items-center"><i className="isax isax-clock me-1 text-gray-9 fw-bold" />03:15:00 Hours</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>240</td>
                  <td>$140</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star fs-12 filled text-warning me-1" />
                      <span>4.1 (180)</span>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-lg me-2"><img className="img-fluid object-fit-cover" src="assets/img/course/course-01.jpg" alt /></a>
                      <div>
                        <h6 className="fw-medium mb-2"><a href="course-details.html">Complete HTML, CSS and Javascript Course</a></h6>
                        <div className="d-flex align-items-center">
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-video-circle me-1 text-gray-9 fw-bold" />11 Lessons</span>
                          <span className="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end"><i className="isax isax-message-question me-1 text-gray-9 fw-bold" />2 Quizzes</span>
                          <span className="d-inline-flex fs-12 align-items-center"><i className="isax isax-clock me-1 text-gray-9 fw-bold" />03:15:00 Hours</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>380</td>
                  <td>$110</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star fs-12 filled text-warning me-1" />
                      <span>4.3 (200)</span>
                    </div>
                  </td>
                  <td><span className="badge badge-sm bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Published</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon"><i className="isax isax-edit-2" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /pagination */}
          <div className="row align-items-center mt-4">
            <div className="col-md-2">
              <p className="fs-14 fw-500 text-center text-md-start">Page 1 of 2</p>
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

export default InstructorCourses