import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'
import Footer from '../../../Component/Footer'
import StudentTopbar from '../../../Component/StudentTopbar'

const StudentSettings = () => {
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
          <div className="card">
            <div className="card-body">
              <form action="https://dreamslms.dreamstechnologies.com/html/template/student-settings.html">
                <div className="profile-upload-group">									
                  <div className="d-flex align-items-center">
                    <a href="student-profile.html" className="avatar flex-shrink-0 avatar-xxxl avatar-rounded border me-3"><img src="assets/img/user/user-02.jpg" alt="Img" className="img-fluid" /></a>
                    <div className="profile-upload-head">
                      <h6><a href="student-profile.html">Profile Photo</a></h6>
                      <p className="fs-14 mb-0">PNG or JPG no bigger than 800px width and height</p>
                      <div className="new-employee-field">
                        <div className="d-flex align-items-center mt-2">
                          <div className="image-upload position-relative mb-0 me-2">
                            <input type="file" />
                            <a href="#" className="btn bg-gray-100 btn-sm rounded-pill image-uploads">Upload</a>
                          </div>
                          <div className="img-delete">
                            <a href="#" className="btn btn-secondary btn-sm rounded-pill">Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>											
                </div>
                <div>
                  <div className="edit-profile-info mb-3">
                    <h5 className="mb-1">Personal Details</h5>
                    <p>Edit your personal information</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">First Name <span className="text-danger"> *</span></label>
                        <input type="text" className="form-control" defaultValue="Ronald" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Last Name <span className="text-danger"> *</span></label>
                        <input type="text" className="form-control" defaultValue="Richard" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">User Name <span className="text-danger"> *</span></label>
                        <input type="text" className="form-control" defaultValue="studentdemo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Phone Number <span className="text-danger"> *</span></label>
                        <input type="text" className="form-control" defaultValue="90154-91036" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Gender <span className="text-danger"> *</span></label>
                        <select className="select">
                          <option>Select</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">DOB <span className="text-danger"> *</span></label>
                        <div className="input-icon-end position-relative">
                          <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                          <span className="input-icon-addon">
                            <i className="isax isax-calendar" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Bio <span className="text-danger"> *</span></label>
                        <textarea rows={4} className="form-control" defaultValue={"Hello! I'm Ronald Richard. I'm passionate about developing innovative software solutions, analyzing classic literature. I aspire to become a software developer, work as an editor. In my free time, I enjoy coding, reading, hiking etc."} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button className="btn btn-secondary rounded-pill" type="submit">Update Profile</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card mb-0">
            <div className="card-body">	
              <h5 className="fs-18 mb-3">Delete Account</h5>								
              <h6 className="mb-1">Are you sure you want to delete your account?</h6>
              <p className="mb-3">Refers to the action of permanently removing a user's account and associated data from a system, service and platform.</p>
              <a href="#" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#delete_account">Delete Account</a>	
            </div>
          </div>
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

export default StudentSettings