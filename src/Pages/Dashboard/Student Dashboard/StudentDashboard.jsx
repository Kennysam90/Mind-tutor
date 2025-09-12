import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'
import Footer from '../../../Component/Footer'

const StudentDashboard = () => {
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
              <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                <h5 className="mb-1 text-white d-inline-flex align-items-center"><a href="student-details.html">Ronald Richard</a><a href="instructor-profile.html" className="link-light fs-16 ms-2"><i className="isax isax-edit-2" /></a></h5>
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
          <div className="card bg-light quiz-ans-card">
            <img src="assets/img/shapes/withdraw-bg1.svg" className="quiz-ans-bg1" alt="img" />
            <img src="assets/img/shapes/withdraw-bg2.svg" className="quiz-ans-bg2" alt="img" />
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div>
                    <h6 className="mb-1">Quiz : Build Responsive Real World </h6>
                    <p>Answered : 15/22</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-end">
                    <a href="student-quiz.html" className="btn btn-primary rounded-pill">Continue Quiz</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="icon-box bg-primary-transparent me-2 me-xxl-3 flex-shrink-0"><img src="assets/img/icon/graduation.svg" alt /></span>
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
                    <span className="icon-box bg-secondary-transparent me-2 me-xxl-3 flex-shrink-0"><img src="assets/img/icon/book.svg" alt /></span>
                    <div>
                      <span className="d-block">Active Courses</span>
                      <h4 className="fs-24 mt-1">03</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="icon-box bg-success-transparent me-2 me-xxl-3 flex-shrink-0"><img src="assets/img/icon/bookmark.svg" alt /></span>
                    <div>
                      <span className="d-block">Completed Courses</span>
                      <h4 className="fs-24 mt-1">10</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mb-3 fs-18">Recently Enrolled Courses</h5>
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
          </div>
          <div>
            <div className="row">
              <div className="col-xl-7">
                <div className="card">
                  <div className="card-body">
                    <h5 className="mb-3 border-bottom pb-3 fs-18">Recent Invoices</h5>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3">
                      <div>
                        <h6 className="mb-1">Build Responsive Real World Websites..</h6>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-sm bg-light border d-inline-flex me-3">#INV001</span>
                          <p className="small">Amount : <span className="heading-color fw-semibold">$200</span></p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge fw-normal bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span>
                        <a href="#" className="action-icon"><i className="isax isax-document-download" /></a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3">
                      <div>
                        <h6 className="mb-1">Wordpress for Beginners</h6>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-sm bg-light border d-inline-flex me-3">#INV002</span>
                          <p className="small">Amount : <span className="heading-color fw-semibold">$310</span></p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge fw-normal bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span>
                        <a href="#" className="action-icon"><i className="isax isax-document-download" /></a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3">
                      <div>
                        <h6 className="mb-1">Information About UI/UX Design Degree</h6>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-sm bg-light border d-inline-flex me-3">#INV003</span>
                          <p className="small">Amount : <span className="heading-color fw-semibold">$270</span></p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge fw-normal bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span>
                        <a href="#" className="action-icon"><i className="isax isax-document-download" /></a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3">
                      <div>
                        <h6 className="mb-1">Sketch from A to Z (2024)</h6>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-sm bg-light border d-inline-flex me-3">#INV004</span>
                          <p className="small">Amount : <span className="heading-color fw-semibold">$180</span></p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge fw-normal bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span>
                        <a href="#" className="action-icon"><i className="isax isax-document-download" /></a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                      <div>
                        <h6 className="mb-1">Become an app designer</h6>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-sm bg-light border d-inline-flex me-3">#INV005</span>
                          <p className="small">Amount : <span className="heading-color fw-semibold">$220</span></p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge fw-normal bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span>
                        <a href="#" className="action-icon"><i className="isax isax-document-download" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="card mb-0">
                  <div className="card-body">
                    <h5 className="mb-3 fs-18 border-bottom pb-3">Latest Quizes</h5>
                    <div className="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2 mb-3">
                      <div>
                        <h6 className="mb-1">Sketch from A to Z (2024)</h6>
                        <div className="d-flex align-items-center">
                          <p>Correct Answer : 15/22</p>
                        </div>
                      </div>
                      <div className="circle-progress flex-shrink-0" data-value={95}>
                        <span className="progress-left">
                          <span className="progress-bar border-success" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar border-success" />
                        </span>
                        <div className="progress-value">95%</div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2 mb-3">
                      <div>
                        <h6 className="mb-1">Build Responsive Real World </h6>
                        <div className="d-flex align-items-center">
                          <p>Correct Answer : 18/22</p>
                        </div>
                      </div>
                      <div className="circle-progress flex-shrink-0" data-value={100}>
                        <span className="progress-left">
                          <span className="progress-bar border-success" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar border-success" />
                        </span>
                        <div className="progress-value">100%</div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2 mb-3">
                      <div>
                        <h6 className="mb-1">UI/UX Design Degree</h6>
                        <div className="d-flex align-items-center">
                          <p>Correct Answer : 25/30</p>
                        </div>
                      </div>
                      <div className="circle-progress flex-shrink-0" data-value={80}>
                        <span className="progress-left">
                          <span className="progress-bar border-success" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar border-success" />
                        </span>
                        <div className="progress-value">80%</div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2 mb-3">
                      <div>
                        <h6 className="mb-1">Build Responsive Real World </h6>
                        <div className="d-flex align-items-center">
                          <p>Correct Answer : 15/20</p>
                        </div>
                      </div>
                      <div className="circle-progress flex-shrink-0" data-value={85}>
                        <span className="progress-left">
                          <span className="progress-bar border-success" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar border-success" />
                        </span>
                        <div className="progress-value">85%</div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2">
                      <div>
                        <h6 className="mb-1">Become an app designer</h6>
                        <div className="d-flex align-items-center">
                          <p>Correct Answer : 12/20</p>
                        </div>
                      </div>
                      <div className="circle-progress flex-shrink-0" data-value={20}>
                        <span className="progress-left">
                          <span className="progress-bar border-danger" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar border-danger" />
                        </span>
                        <div className="progress-value">20%</div>
                      </div>
                    </div>
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
 <Footer />
  {/* /Footer */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default StudentDashboard