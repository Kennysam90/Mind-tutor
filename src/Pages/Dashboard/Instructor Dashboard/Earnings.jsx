import React from 'react'
import Header from '../../../Component/Header'
import Footer from '../../../Component/Footer'
import TutorSidebar from '../../../Component/TutorSidebar'

const Earnings = () => {
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
          <h2 className="breadcrumb-title mb-2">Earnings</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Earnings</li>
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
            <h5>Earnings</h5>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="earnings-icon bg-success">
                      <i className="isax isax-dollar-circle4" />
                    </span>
                    <div className="ms-3">
                      <h6 className="mb-1">Revenue</h6>
                      <h5 className="fw-bold text-success mb-1">$8420</h5>
                      <p>Earning this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="earnings-icon bg-secondary">
                      <i className="isax isax-star5" />
                    </span>
                    <div className="ms-3">
                      <h6 className="mb-1">Courses Ratings</h6>
                      <h5 className="fw-bold text-secondary mb-1">4.8</h5>
                      <p>Rating this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="earnings-icon bg-info">
                      <i className="isax isax-profile-tick5" />
                    </span>
                    <div className="ms-3">
                      <h6 className="mb-1">Students Enrolled</h6>
                      <h5 className="fw-bold text-info mb-1">12000</h5>
                      <p>New this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header d-flex flex-wrap gap-2 align-items-center justify-content-between">
                  <h5>Earnings by Year</h5>
                  <div className="icon-form mb-0">
                    <span className="form-icon"><i className="isax isax-calendar-1 fs-16" /></span>
                    <input type="text" className="form-control yearpicker" placeholder={2025} />
                  </div>
                </div>
                <div className="card-body">
                  <div id="earnigs_chart" />
                </div>
              </div>										
            </div>
          </div>
          <div className="card mb-0">
            <div className="card-header d-flex flex-wrap gap-2 align-items-center justify-content-between">
              <h5>Earnings</h5>
              <div className="icon-form mb-0">
                <span className="form-icon"><i className="isax isax-calendar-1 fs-16" /></span>
                <input type="text" className="form-control bookingrange" placeholder="01 Jan 2025 - 31 Jan 2025" />
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive custom-table">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Course</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="order"><a href="#">ORD010</a></td>
                      <td>28 Jan 2025</td>
                      <td><a href="course-details.html">Information about UI/UX Design Degree</a></td>
                      <td>$160</td>												
                    </tr>
                    <tr>
                      <td className="order"><a href="#">ORD009</a></td>
                      <td>22 Jan 2025</td>
                      <td><a href="course-details.html">Wordpress for Beginners - Master Wordpress Quickly</a></td>
                      <td>$140</td>												
                    </tr>	
                    <tr>
                      <td className="order"><a href="#">ORD008</a></td>
                      <td>17 Jan 2025</td>
                      <td><a href="course-details.html">Sketch from A to Z (2022): Become an app designer</a></td>
                      <td>$200</td>												
                    </tr>
                    <tr>
                      <td className="order"><a href="#">ORD007</a></td>
                      <td>08 Jan 2025</td>
                      <td><a href="course-details.html">Learn Angular Fundamental From beginning to advance</a></td>
                      <td>$170</td>												
                    </tr>	
                    <tr>
                      <td className="order"><a href="#">ORD006</a></td>
                      <td>03 Jan 2025</td>
                      <td><a href="course-details.html">C# Developers Double Your Coding Speed</a></td>
                      <td>$120</td>												
                    </tr>								
                  </tbody>
                </table>
              </div>
            </div>
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

export default Earnings