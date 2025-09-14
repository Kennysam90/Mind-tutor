import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'
import StudentTopbar from '../../../Component/StudentTopbar'
import Footer from '../../../Component/Footer'

const StudentNotifications = () => {
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
              <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                <h6>Subscriptions</h6>
                <small>Notify me about activity from profile I’m subscribe to</small>
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
                <h6>Recommended Courses</h6>
                <small>Notify me about courses that suits for me</small>
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
                <h6>Reply to my comments</h6>
                <small>Notify me about replies for my comments</small>
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
                <h6>Activity on my comments</h6>
                <small>Notify me about replies for my comments.</small>
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
                <h6>Courses Activity</h6>
                <small>Send me emails about my courses activity and updates I request</small>
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
                <h6>Promotions &amp; Recommendations</h6>
                <small>Send me emails about my courses promotions and recommendations</small>
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
                <input className="form-check-input" type="checkbox" id={6} />
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
                <input className="form-check-input" type="checkbox" id={17} />
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
                <input className="form-check-input" type="checkbox" id={8} />
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
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Remove All</h4>
            <p className="mb-3">Are you sure you want to remove all from wishlist?</p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="#" className="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
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

export default StudentNotifications