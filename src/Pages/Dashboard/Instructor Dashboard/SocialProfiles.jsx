import React from 'react'
import Header from '../../../Component/Header'
import TutorSidebar from '../../../Component/TutorSidebar'
import SettingTopbar from '../../../Component/SettingTopbar'
import Footer from '../../../Component/Footer'
import SocialPlan from '../../../Component/SocialPlan'

const SocialProfiles = () => {
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
          <SocialPlan />
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer />
  {/* /Footer */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete_account">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Delete Account</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <h6 className="mb-1">Why Are You Deleting Your Account?</h6>
            <p>We're sorry to see you go! To help us improve, please let us know your reason for deleting your account</p>
          </div>
          <div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="reason" id="Radio-sm-1" />
              <label className="fw-medium form-check-label text-gray-9" htmlFor="Radio-sm-1">
                No longer using the service
              </label>
              <p>I no longer need this service and won’t be using it in the future.</p>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="reason" id="Radio-sm-2" />
              <label className="fw-medium form-check-label text-gray-9" htmlFor="Radio-sm-2">
                Privacy concerns
              </label>
              <p>I am concerned about how my data is handled and want to remove my information.</p>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="reason" id="Radio-sm-3" />
              <label className="fw-medium form-check-label text-gray-9" htmlFor="Radio-sm-3">
                Too many notifications/emails
              </label>
              <p>I’m overwhelmed by the volume of notifications or emails and would like to reduce them.</p>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="reason" id="Radio-sm-4" />
              <label className="fw-medium form-check-label text-gray-9" htmlFor="Radio-sm-4">
                Poor user experience
              </label>
              <p>I’ve had difficulty using the platform, and it didn’t meet my expectations.</p>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="reason" id="Radio-sm-5" />
              <label className="fw-medium form-check-label text-gray-9" htmlFor="Radio-sm-5">
                Other (Please specify)
              </label>
            </div>
            <div>
              <textarea rows={3} className="form-control" defaultValue={""} />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Keep My Account</button>
          <button className="btn btn-secondary rounded-pill" type="button">Delete Account</button>
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

export default SocialProfiles