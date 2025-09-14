import React from 'react'
import Header from '../../../Component/Header'
import Footer from '../../../Component/Footer'
import SettingTopbar from '../../../Component/SettingTopbar'
import TutorSidebar from '../../../Component/TutorSidebar'

const Withdraw = () => {
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
          <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-withdraw.html">
            <div className="withdraw-method">
              <h5 className="fs-18 mb-3">Select a withdraw method</h5>
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item mb-3" role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Bank Transfer <span>Minimum withdraw $50</span></button>
                </li>
                <li className="nav-item mb-3" role="presentation">
                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Stripe<span>Minimum withdraw $50</span></button>
                </li>
                <li className="nav-item mb-3" role="presentation">
                  <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">PayPal<span>Minimum withdraw $50</span></button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Account Name<span className="text-danger"> *</span></label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Account Number<span className="text-danger"> *</span></label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Bank Name<span className="text-danger"> *</span></label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">IBAN<span className="text-danger"> *</span></label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">BIC / SWIFT<span className="text-danger"> *</span></label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button className="btn btn-secondary" type="submit">Save Withdrawal Account</button>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="mb-3">
                    <label className="form-label">Stripe Email Address<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control mb-1" defaultValue="test@example.com" />
                    <span className="fs-14">We will use this email address to send the money to your Stripe account</span>
                  </div>
                  <button className="btn btn-secondary" type="submit">Save Withdrawal Account</button>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                  <div className="mb-3">
                    <label className="form-label">PayPal Email Address<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control mb-1" defaultValue="test@example.com" />
                    <span className="fs-14">We will use this email address to send the money to your PayPal account</span>
                  </div>
                  <button className="btn btn-secondary" type="submit">Save Withdrawal Account</button>
                </div>
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

export default Withdraw