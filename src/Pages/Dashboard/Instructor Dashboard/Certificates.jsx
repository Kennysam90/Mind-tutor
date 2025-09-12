import React from 'react'
import Header from '../../../Component/Header'
import TutorSidebar from '../../../Component/TutorSidebar'
import Footer from '../../../Component/Footer'

const Certificates = () => {
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
          <h2 className="breadcrumb-title mb-2">Certificates</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Certificates</li>
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
          <div className="certificate">
            <div className="page-title d-flex align-items-center justify-content-between">
              <h5>Certificates</h5>
              <div>
                <a href="#" className="btn btn-secondary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_certificate">
                  <i className="isax isax-add-circle me-1" />Add Certificate
                </a>
              </div>
            </div>
            <div className="p-0">
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="mb-3">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_certificate"><img className="img-fluid rounded" src="assets/img/instructor/certificate-1.jpg" alt="img" /></a>
                      </div>
                      <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                        <h6>Certificate 01</h6>
                        <ul className="edit-delete-icon d-flex align-items-center">
                          <li><a href="#" data-bs-toggle="modal" data-bs-target="#view_certificate"><i className="isax isax-eye" /></a></li>
                          <li><a href="#"><i className="isax isax-edit-2" /></a></li>
                          <li><a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="mb-3">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_certificate"><img className="img-fluid rounded" src="assets/img/instructor/certificate-2.jpg" alt="img" /></a>
                      </div>
                      <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                        <h6>Certificate 02</h6>
                        <ul className="edit-delete-icon d-flex align-items-center">
                          <li><a href="#" data-bs-toggle="modal" data-bs-target="#view_certificate"><i className="isax isax-eye" /></a></li>
                          <li><a href="#"><i className="isax isax-edit-2" /></a></li>
                          <li><a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="mb-3">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_certificate"><img className="img-fluid rounded" src="assets/img/instructor/certificate-3.jpg" alt="img" /></a>
                      </div>
                      <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                        <h6>Certificate 03</h6>
                        <ul className="edit-delete-icon d-flex align-items-center">
                          <li><a href="#" data-bs-toggle="modal" data-bs-target="#view_certificate"><i className="isax isax-eye" /></a></li>
                          <li><a href="#"><i className="isax isax-edit-2" /></a></li>
                          <li><a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="mb-3">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_certificate"><img className="img-fluid rounded" src="assets/img/instructor/certificate-4.jpg" alt="img" /></a>
                      </div>
                      <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                        <h6>Certificate 04</h6>
                        <ul className="edit-delete-icon d-flex align-items-center">
                          <li><a href="#" data-bs-toggle="modal" data-bs-target="#view_certificate"><i className="isax isax-eye" /></a></li>
                          <li><a href="#"><i className="isax isax-edit-2" /></a></li>
                          <li><a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a></li>
                        </ul>
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
  {/* Add Question */}
  <div className="modal fade" id="add_certificate">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Add New Certificate</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-quiz-questions.html">
          <div className="modal-body pb-0">
            <div className="mb-3">
              <label className="form-label">Attachments</label>
              <div className="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">
                <span className="upload-img mb-2"><i className="isax isax-folder5 fs-24" /></span>
                <p className="mb-1 fs-12">Drag and drop your files</p>
                <p className="mb-2 fs-12">Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf</p>
                <input type="file" accept="video/image" />
                <span className="btn btn-secondary rounded-pill"><i className="isax isax-document-upload me-1" />Upload</span>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-light rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-secondary rounded-pill" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Question */}
  <div className="modal fade" id="view_certificate">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5>View Certificate</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <div className="modal-body">
          <div><img src="assets/img/icon/certificate.svg" className="img-fluid" alt /></div>
          <div className="text-end mt-4">
            <a href="#" className="btn btn-secondary rounded-pill"><i className="isax isax-import me-2" />Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-gray-100 rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete Certificate</h4>
            <p className="mb-3">Are you sure you want to delete certificate?</p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="javascript:void(0);" className="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-secondary rounded-pill">Yes, Delete</a>
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

export default Certificates