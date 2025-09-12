import React from 'react'
import Header from '../../../Component/Header'
import Footer from '../../../Component/Footer'
import { Link } from 'react-router-dom'
import TutorSidebar from '../../../Component/TutorSidebar'

const InstructorDashboard = () => {
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
          <h2 className="breadcrumb-title mb-2">Dashboard</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
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
            <div className="col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="icon-box bg-primary-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="assets/img/icon/graduation.svg" alt />
                    </span>
                    <div>
                      <span className="d-block">Enrolled Courses</span>
                      <h4 className="fs-24 mt-1">12</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="icon-box bg-secondary-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="assets/img/icon/book.svg" alt />
                    </span>
                    <div>
                      <span className="d-block">Active Courses</span>
                      <h4 className="fs-24 mt-1">08</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="icon-box bg-success-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="assets/img/icon/bookmark.svg" alt />
                    </span>
                    <div>
                      <span className="d-block">Completed Courses</span>
                      <h4 className="fs-24 mt-1">06</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="icon-box bg-info-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="assets/img/icon/user-octagon.svg" alt />
                    </span>
                    <div>
                      <span className="d-block">Total Students</span>
                      <h4 className="fs-24 mt-1">17</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="icon-box bg-blue-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="assets/img/icon/book-2.svg" alt />
                    </span>
                    <div>
                      <span className="d-block">Total Courses</span>
                      <h4 className="fs-24 mt-1">11</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="icon-box bg-purple-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="assets/img/icon/money-add.svg" alt />
                    </span>
                    <div>
                      <span className="d-block">Total Earnings</span>
                      <h4 className="fs-24 mt-1">$486</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between border-bottom mb-2 pb-3">
                <h5 className="fw-bold">Earnings by Year</h5> 
                <div className="input-icon position-relative input-range-picker">
                  <span className="input-icon-addon">
                    <i className="isax isax-calendar" />
                  </span>
                  <input type="text" className="form-control date-range bookingrange" placeholder="dd/mm/yyyy - dd/mm/yyyy" />
                </div>
              </div>
              <div id="earnnings_chart" />
            </div>
          </div>
          <h5 className="mb-3 fw-bold">Recently Created Courses</h5>
          <div className="table-responsive custom-table">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Courses</th>
                  <th>Enrolled</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="course-title d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-xl flex-shrink-0 me-2"><img src="assets/img/instructor/instructor-table-01.jpg" alt="Img" /></a>
                      <div>
                        <p className="fw-medium"><a href="course-details.html">Complete HTML, CSS and Javascript<br /> Course</a></p>
                      </div>
                    </div>
                  </td>
                  <td>0</td>
                  <td>Published</td>
                </tr>
                <tr>
                  <td>
                    <div className="course-title d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-xl flex-shrink-0 me-2"><img src="assets/img/instructor/instructor-table-02.jpg" alt="Img" /></a>
                      <div>
                        <p className="fw-medium"><a href="course-details.html">Complete Course on Fullstack Web<br /> Developer</a></p>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>Published</td>
                </tr>
                <tr>
                  <td>
                    <div className="course-title d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-xl flex-shrink-0 me-2"><img src="assets/img/instructor/instructor-table-03.jpg" alt="Img" /></a>
                      <div>
                        <p className="fw-medium"><a href="course-details.html">Data Science Fundamentals and<br /> Advanced Bootcampr</a></p>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>Published</td>
                </tr>
                <tr>
                  <td>
                    <div className="course-title d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-xl flex-shrink-0 me-2"><img src="assets/img/instructor/instructor-table-04.jpg" alt="Img" /></a>
                      <div>
                        <p className="fw-medium"><a href="course-details.html">Master Microservices with Spring Boot<br /> and Spring Cloud</a></p>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td>Published</td>
                </tr>
                <tr>
                  <td>
                    <div className="course-title d-flex align-items-center">
                      <a href="course-details.html" className="avatar avatar-xl flex-shrink-0 me-2"><img src="assets/img/instructor/instructor-table-05.jpg" alt="Img" /></a>
                      <div>
                        <p className="fw-medium"><a href="course-details.html">Information About UI/UX Design<br /> Degree</a></p>
                      </div>
                    </div>
                  </td>
                  <td>0</td>
                  <td>Published</td>
                </tr>
              </tbody>
            </table>
          </div>
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

export default InstructorDashboard