import React from 'react'
import Header from '../../../Component/Header'
import Footer from '../../../Component/Footer'
import TutorSidebar from '../../../Component/TutorSidebar'

const Profile = () => {
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
          <h2 className="breadcrumb-title mb-2">My Profile</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
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
            <h5 className="fw-bold">My Profile</h5>
            <a href="#" className="edit-profile-icon"><i className="isax isax-edit-2" /></a>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="fs-18 pb-3 border-bottom mb-3">Basic Information</h5>
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>First Name</h6>
                    <span>Eugene</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>Last Name</h6>
                    <span>Andre</span>
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
                    <span>instructordemo</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>Phone Number</h6>
                    <span>89104-71829</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6>Email</h6>
                    <span><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e881869b9c9a9d8b9c879a8c8d8587a88d90898598848dc68b8785">[email&nbsp;protected]</a></span>
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
                    <span>I am a web developer with a vast array of knowledge in
                      many different front end and back end languages, 
                      responsive frameworks, databases, and best code practices.
                    </span>
                  </div>
                </div>
              </div>								
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="fs-18 pb-3 border-bottom mb-3">Education</h5>
              <div className="education-flow">
                <div className="ps-4 pb-3 timeline-flow">
                  <div>
                    <h6 className="mb-1">BCA - Bachelor of Computer Applications</h6>
                    <p>International University - (2004 - 2010)</p>
                  </div>
                </div>
                <div className="ps-4 pb-3 timeline-flow">
                  <div>
                    <h6 className="mb-1">MCA - Master of Computer Application</h6>
                    <p>International University - (2010 - 2012)</p>
                  </div>
                </div>
                <div className="ps-4 pb-0 timeline-flow">
                  <div>
                    <h6 className="mb-1">Design Communication Visual</h6>
                    <p>International University - (2012-2015)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-0">
            <div className="card-body">
              <h5 className="fs-18 pb-3 border-bottom mb-3">Experience</h5>
              <div className="d-flex align-items-center mb-4">
                <span className="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3"><i className="isax isax-briefcase fw-bold" /></span>
                <div>
                  <h6 className="mb-1">Web Design &amp; Development Team Leader</h6>
                  <p>Creative Agency - (2013 - 2016)</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3"><i className="isax isax-briefcase fw-bold" /></span>
                <div>
                  <h6 className="mb-1">Project Manager</h6>
                  <p>CJobcy Technology Pvt.Ltd - (Present)</p>
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

export default Profile