import React from 'react'
import TutorSidebar from '../../../Component/TutorSidebar'
import SettingTopbar from '../../../Component/SettingTopbar'
import Footer from '../../../Component/Footer'
import Header from '../../../Component/Header'

const InstructorNotifications = () => {
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
          <div className="mb-3">
            <h5>Settings</h5>
          </div>							
          <SettingTopbar />
          <form>
            {/* Title */}
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
              <h5 className="fs-18 mb-0">General Notifications</h5>
              <button className="btn btn-sm btn-dark" type="button">Toggle all</button>
            </div>
            {/* Item */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Content */}
              <div>
                <h6>Student Questions</h6>
                <small>Notify me when a student asks a question in the Q&amp;A section</small>
              </div>
              {/* Switch */}
              <div className="form-check form-switch form-check-md mb-0 ms-3">
                <input className="form-check-input" type="checkbox" id="checkPrivacy1" defaultChecked />
              </div>
            </div>
            {/* Item */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Content */}
              <div>
                <h6>Feedback Received</h6>
                <small>Notify me when receive feedback from students</small>
              </div>
              {/* Switch */}
              <div className="form-check form-switch form-check-md mb-0 ms-3">
                <input className="form-check-input" type="checkbox" id={7} defaultChecked />
              </div>
            </div>
            {/* Item */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Content */}
              <div>
                <h6>Quiz/Exam Results Submission</h6>
                <small>Notify me when quiz or exam results are submitted</small>
              </div>
              {/* Switch */}
              <div className="form-check form-switch form-check-md mb-0 ms-3">
                <input className="form-check-input" type="checkbox" id={4} />
              </div>
            </div>
            {/* Item */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Content */}
              <div>
                <h6>Forum Activity</h6>
                <small>Notify me about new posts or replies in course discussion forums.</small>
              </div>
              {/* Switch */}
              <div className="form-check form-switch form-check-md mb-0 ms-3">
                <input className="form-check-input" type="checkbox" id={5} />
              </div>
            </div>
          </form>
          <div className="text-center my-5" />
          <form>
            {/* Title */}
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
              <h5 className="fs-18 mb-0">Email Notifications</h5>
              <button className="btn btn-sm btn-dark" type="button">Toggle all</button>
            </div>
            {/* Item */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Content */}
              <div>
                <h6>Course Enrolment</h6>
                <small>Send me emails when a new student enrolls the course</small>
              </div>
              {/* Switch */}
              <div className="form-check form-switch form-check-md mb-0 ms-3">
                <input className="form-check-input" type="checkbox" id="checkPrivacy6" defaultChecked />
              </div>
            </div>
            {/* Item */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Content */}
              <div>
                <h6>Assignment Submission</h6>
                <small>Send me email whenever an assignment is submitted by a student</small>
              </div>
              {/* Switch */}
              <div className="form-check form-switch form-check-md mb-0 ms-3">
                <input className="form-check-input" type="checkbox" id="checkPrivacy7" defaultChecked />
              </div>
            </div>
            {/* Item */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Content */}
              <div>
                <h6>Course Comments</h6>
                <small>Get notified about comments on your posts and replies to your comments.</small>
              </div>
              {/* Switch */}
              <div className="form-check form-switch form-check-md mb-0 ms-3">
                <input className="form-check-input" type="checkbox" id={8} />
              </div>
            </div>
            {/* Item */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Content */}
              <div>
                <h6>Course Reminders</h6>
                <small>Receive booking assistance reminders to stay updated on your scheduled sessions.</small>
              </div>
              {/* Switch */}
              <div className="form-check form-switch form-check-md mb-0 ms-3">
                <input className="form-check-input" type="checkbox" id={9} />
              </div>
            </div>
            {/* Item */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Content */}
              <div>
                <h6>System Updates</h6>
                <small>Send me emails about updates to the LMS platform </small>
              </div>
              {/* Switch */}
              <div className="form-check form-switch form-check-md mb-0 ms-3">
                <input className="form-check-input" type="checkbox" id={17} />
              </div>
            </div>
          </form>
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

export default InstructorNotifications