import React from 'react'
import Header from '../../../Component/Header'
import TutorSidebar from '../../../Component/TutorSidebar'
import SettingTopbar from '../../../Component/SettingTopbar'
import Footer from '../../../Component/Footer'

const Integrations = () => {
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
          <div className="card">
            <div className="card-body">
              <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-settings.html">
                <div className="d-flex align-items-center justify-content-between border mb-3 p-3 rounded-3">
                  <div className="meet-icon me-3 flex-shrink-0">
                    <img src="assets/img/icons/meet-icon-1.svg" alt="img" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div>
                      <h6 className="mb-1">Zoom Meeting</h6>
                      <p className="small">A virtual platform for real-time video, audio, and screen-sharing collaboration.</p>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0">
                      <input className="form-check-input" type="checkbox" id="checkZoom" defaultChecked />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Client ID <span className="text-danger"> *</span></label>
                      <input type="text" className="form-control" defaultValue />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Client Secret Key <span className="text-danger"> *</span></label>
                      <input type="text" className="form-control" defaultValue />
                    </div>
                  </div>
                </div>
                <hr className="mb-4 mt-1" />
                <div className="d-flex align-items-center justify-content-between border mb-3 p-3 rounded-3">
                  <div className="meet-icon me-3 flex-shrink-0">
                    <img src="assets/img/icons/meet-icon-2.svg" alt="img" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div>
                      <h6 className="mb-1">Google Meet</h6>
                      <p className="small">A video conferencing platform for seamless virtual meetings, collaboration, and screen sharing.</p>
                    </div>
                    <div className="form-check form-switch form-check-md mb-0">
                      <input className="form-check-input" type="checkbox" id="checkGoogle" defaultChecked />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Client ID <span className="text-danger"> *</span></label>
                      <input type="text" className="form-control" defaultValue />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Client Secret Key <span className="text-danger"> *</span></label>
                      <input type="text" className="form-control" defaultValue />
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-secondary">Save Changes</a>
              </form>
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

export default Integrations