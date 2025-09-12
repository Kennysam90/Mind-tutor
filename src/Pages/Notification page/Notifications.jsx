import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

const Notifications = () => {
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
          <h2 className="breadcrumb-title mb-2">Notifications</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Notifications</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Notifications */}
  <div className="content">
    <div className="container">
      <div className="notification-content">
        <div className="notification-head">
          <div className="row align-items-center row-gap-3">
            <div className="col-lg-8">
              <h2 className="fs-32 fw-bold">Notifications</h2>
              <p>Improve the way your work, discover a brand new tool and drop the hassle once and for all.</p>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-end">
                <a href="javascript:void(0);" className="btn mark-all-btn btn-light rounded-pill me-2"><i className="isax isax-tick-square me-2" /> Mark All as Read</a>
                <a href="javascript:void(0);" className="btn delete-all-btn btn-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_all_modal"><i className="isax isax-trash me-2" />Delete All</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className>
            <h6 className="fs-18 fw-semibold mb-3">Today</h6>
            <div className="notification-item mb-3">
              <div className="row row-gap-3">
                <div className="col-md-10">
                  <div className="d-flex align-items-center">
                    <a href="student-details.html" className="rounded-circle me-2">
                      <img src="assets/img/user/user-11.jpg" alt="img" className="img-fluid rounded-circle" />
                    </a>
                    <div>
                      <a href="student-details.html" className="text-gray-5 fs-16 mb-0"><span className="name-highlight">Thompson Hicks</span> enroll a new course on Programming</a>
                      <p className="text-gray-5 fs-16 mb-0">05 mins ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                  <a href="javascript:void(0);" className="btn btn-delete-hidden rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash me-1" /> Delete</a>
                </div>
              </div>
            </div>
            <div className="notification-item mb-3">
              <div className="row">
                <div className="col-md-10">
                  <div className="d-flex align-items-center">
                    <a href="student-details.html" className="rounded-circle me-2">
                      <img src="assets/img/user/user-12.jpg" alt="img" className="img-fluid rounded-circle" />
                    </a>
                    <div>
                      <a href="student-details.html" className="text-gray-5 fs-16 mb-0"><span className="name-highlight">Jennifer Tovar</span> has submitted their assignment for UI/UX Course.</a>
                      <p className="text-gray-5 fs-16 mb-0">10 mins ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                  <a href="javascript:void(0);" className="btn btn-delete-hidden rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash me-1" /> Delete</a>
                </div>
              </div>
            </div>
          </div>
          <div className>
            <h6 className="fs-18 fw-semibold mb-3">Yesterday</h6>
            <div className="notification-item mb-3">
              <div className="row">
                <div className="col-md-10">
                  <div className="d-flex align-items-center">
                    <a href="student-details.html" className="rounded-circle me-2">
                      <img src="assets/img/user/user-13.jpg" alt="img" className="img-fluid rounded-circle" />
                    </a>
                    <div>
                      <a href="student-details.html" className="text-gray-5 fs-16 mb-0"><span className="name-highlight">James Schulte </span>has requested feedback for their assignment in WordPress Course</a>
                      <p className="text-gray-5 fs-16 mb-0">20 Dec 2024</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                  <a href="javascript:void(0);" className="btn btn-delete-hidden rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash me-1" /> Delete</a>
                </div>
              </div>
            </div>
            <div className="notification-item mb-3">
              <div className="row">
                <div className="col-md-10">
                  <div className="d-flex align-items-center">
                    <a href="student-details.html" className="rounded-circle me-2">
                      <img src="assets/img/user/user-14.jpg" alt="img" className="img-fluid rounded-circle" />
                    </a>
                    <div>
                      <a href="student-details.html" className="text-gray-5 fs-16 mb-0">You have a new message from <span className="name-highlight">William Aragon</span> regarding HTML Course.</a>
                      <p className="text-gray-5 fs-16 mb-0">05 mins ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                  <a href="javascript:void(0);" className="btn btn-delete-hidden rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash me-1" /> Delete</a>
                </div>
              </div>
            </div>
            <div className="notification-item">
              <div className="row">
                <div className="col-md-10">
                  <div className="d-flex align-items-center">
                    <a href="student-details.html" className="rounded-circle me-2">
                      <img src="assets/img/user/user-15.jpg" alt="img" className="img-fluid rounded-circle" />
                    </a>
                    <div>
                      <a href="student-details.html" className="text-gray-5 fs-16 mb-0"><span className="name-highlight">Shirley Lis</span> has completed Quiz in WordPress Course with a score of 80%</a>
                      <p className="text-gray-5 fs-16 mb-0">05 mins ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                  <a href="javascript:void(0);" className="btn btn-delete-hidden rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash me-1" /> Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Notifications */}
  {/* Footer */}
  <Footer />
  {/* /Footer */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete Notification</h4>
            <p className="mb-3">Are you sure you want to delete notification?</p>
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
  {/* Delete All Modal */}
  <div className="modal fade" id="delete_all_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete All Notifications</h4>
            <p className="mb-3">Are you sure you want to delete all notifications?</p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="javascript:void(0);" className="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-secondary rounded-pill">Yes, Delete All</a>
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

export default Notifications