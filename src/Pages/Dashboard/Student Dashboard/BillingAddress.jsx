import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'
import StudentTopbar from '../../../Component/StudentTopbar'
import Footer from '../../../Component/Footer'

const BillingAddress = () => {
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
      {/* Profile */}
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
      {/* /Profile */}
      <div className="row">
        {/* Sidebar */}
        <StudentSidebar />
        {/* Sidebar */}
        <div className="col-lg-9">
          <div className="mb-3">
            <h5>Settings</h5>
          </div>													
          <StudentTopbar />
          <div className="card mb-0">
            <div className="card-body">
              <form action="https://dreamslms.dreamstechnologies.com/html/template/student-change-password.html">
                <div className="d-sm-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                  <div className="d-flex align-items-center mb-2 mb-sm-0">
                    <div>
                      <h6 className="mb-1">Home <span className="badge bg-soft-success ms-1 fs-12 fw-normal">Default</span></h6>
                      <p>16 Lake Floyd Circle, Newark, DE 19714</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="#" className="btn btn-light btn-sm border me-2" data-bs-toggle="modal" data-bs-target="#edit_billing"><i className="isax isax-edit-2 me-2" />Edit</a>
                    <a href="#" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash me-1" />Delete</a>
                  </div>
                </div>
                <div className="d-sm-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                  <div className="d-flex align-items-center mb-2 mb-sm-0">
                    <div>
                      <h6 className="mb-1">Work</h6>
                      <p>33 Hart Country Lane, West Point, GA 31833</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="#" className="btn btn-light btn-sm border me-2" data-bs-toggle="modal" data-bs-target="#edit_billing"><i className="isax isax-edit-2 me-2" />Edit</a>
                    <a href="#" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash me-1" />Delete</a>
                  </div>
                </div>
              </form>	
              <div className="mt-4">
                <a href="#" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#add_billing">Add New Address</a>
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
  {/* Add Billing */}
  <div className="modal fade" id="add_billing">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Add Billing Address</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/student-billing-address.html">
          <div className="modal-body pb-0">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Title <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Address <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Country <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>United states of America</option>
                    <option>Canada</option>
                    <option>Germany</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">State <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>California</option>
                    <option>New York</option>
                    <option>Texas</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">City <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>Los Angeles</option>
                    <option>San Diego</option>
                    <option>Fresno</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Postal Code <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-secondary rounded-pill" type="submit">Add Address</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Billing */}
  {/* Edit Billing */}
  <div className="modal fade" id="edit_billing">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Edit Billing Address</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/student-billing-address.html">
          <div className="modal-body pb-0">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Title <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue="Home" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Address <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue="16 Lake Floyd Circle" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Country <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>United states of America</option>
                    <option>Canada</option>
                    <option>Germany</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">State <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>California</option>
                    <option>New York</option>
                    <option>Texas</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">City <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>Los Angeles</option>
                    <option>San Diego</option>
                    <option>Fresno</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Postal Code <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue={90001} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-check form-check-md my-4">
                  <input className="form-check-input" type="checkbox" defaultValue id="defaultaccount" />
                  <label className="form-check-label" htmlFor="defaultaccount">Yes, I'd like to delete my account</label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-secondary rounded-pill" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Billing */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete Address</h4>
            <p className="mb-3">Are you sure you want to delete address?</p>
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

export default BillingAddress