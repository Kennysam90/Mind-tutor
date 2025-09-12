import React from 'react'
import Header from '../../../Component/Header'
import TutorSidebar from '../../../Component/TutorSidebar'
import Footer from '../../../Component/Footer'

const Tickets = () => {
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
          <h2 className="breadcrumb-title mb-2">Tickets</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Tickets</li>
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
          <div className="tickets">
            <div className="d-flex align-items-center justify-content-between flex-wrap page-title">
              <h5>Support Tickets</h5>
              <a href="#" className="btn btn-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#add_ticket"><i className="isax isax-add-circle me-2 fs-10" />Add Ticket</a>
            </div> 
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <span className="icon-box bg-primary-transparent me-3 flex-shrink-0">
                        <img src="assets/img/icon/graduation.svg" alt />
                      </span>
                      <div>
                        <p className="mb-1">Total Tickets</p>
                        <h4 className="fw-bold">50</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <span className="icon-box bg-secondary-transparent me-3 flex-shrink-0">
                        <img src="assets/img/icon/book.svg" alt />
                      </span>
                      <div>
                        <p className="mb-1">Opened Tickets</p>
                        <h4 className="fw-bold">30</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="student-info">
                  <div className="d-flex align-items-center">
                    <span className="icon-box bg-success-transparent me-3 flex-shrink-0">
                      <img src="assets/img/icon/bookmark.svg" alt />
                    </span>
                    <div>
                      <span className="d-block">Closed Tickets</span>
                      <h4 className="fs-24 mt-1">25</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div className="row align-items-center mb-2">
              <div className="col-md-8">
                <div className="d-flex align-items-center flex-wrap">
                  <div className="mb-3">
                    <div className="dropdown me-3">
                      <a href="javascript:void(0);" className="dropdown-toggle text-gray-6 btn  rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="javascript:void(0);" className="dropdown-item rounded-1">Mailing Issues</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="dropdown-item rounded-1">Language Issues</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="dropdown-item rounded-1">Installation Error</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="dropdown me-3">
                      <a href="javascript:void(0);" className="dropdown-toggle text-gray-6 btn  rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                        Priority
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="javascript:void(0);" className="dropdown-item rounded-1">High</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="dropdown-item rounded-1">Low</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="dropdown-item rounded-1">Medium</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="dropdown">
                      <a href="javascript:void(0);" className="dropdown-toggle text-gray-6 btn  rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                        Status
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="javascript:void(0);" className="dropdown-item rounded-1">Opened</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="dropdown-item rounded-1">Inprogress</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="dropdown-item rounded-1">Closed</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-icon mb-3">
                  <span className="input-icon-addon">
                    <i className="isax isax-search-normal-14" />
                  </span>
                  <input type="email" className="form-control form-control-md" placeholder="Search" />
                </div>
              </div>
            </div>  
            <div className="table-responsive custom-table">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Ticket ID</th>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Priority</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">#TIC010</a></td>
                    <td>22 Aug 2025</td>
                    <td>Issue with Course Notification Emails</td>
                    <td><span className="badge badge-sm bg-soft-danger d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />High</span></td>
                    <td>Mailing Issues</td>
                    <td><span className="badge badge-sm bg-purple d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Opened</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i className="isax isax-eye" /></a>
                        <a href="#" className="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i className="isax isax-edit-2" /></a>
                        <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">#TIC009</a></td>
                    <td>10 Aug 2025</td>
                    <td>I have a problem</td>
                    <td><span className="badge badge-sm bg-soft-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Low</span></td>
                    <td>Language Issues</td>
                    <td><span className="badge badge-sm bg-warning d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Inprogress</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i className="isax isax-eye" /></a>
                        <a href="#" className="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i className="isax isax-edit-2" /></a>
                        <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">#TIC008</a></td>
                    <td>26 Jul 2025</td>
                    <td>Account Activation mail not received</td>
                    <td><span className="badge badge-sm bg-soft-danger d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />High</span></td>
                    <td>Mailing Issues</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Closed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i className="isax isax-eye" /></a>
                        <a href="#" className="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i className="isax isax-edit-2" /></a>
                        <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">#TIC007</a></td>
                    <td>12 Jul 2025</td>
                    <td>&nbsp;Enabling SSH service</td>
                    <td><span className="badge badge-sm bg-soft-skyblue d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />High</span></td>
                    <td>Installation Error</td>
                    <td><span className="badge badge-sm bg-purple d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Opened</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i className="isax isax-eye" /></a>
                        <a href="#" className="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i className="isax isax-edit-2" /></a>
                        <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">#TIC006</a></td>
                    <td>02 Jul 2025</td>
                    <td>Payment Processed but not showed</td>
                    <td><span className="badge badge-sm bg-soft-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Low</span></td>
                    <td>Payment Issues</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Closed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i className="isax isax-eye" /></a>
                        <a href="#" className="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i className="isax isax-edit-2" /></a>
                        <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">#TIC005</a></td>
                    <td>25 Jun 2025</td>
                    <td>&nbsp;when will start the order</td>
                    <td><span className="badge badge-sm bg-soft-danger d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />High</span></td>
                    <td>Demo Problem</td>
                    <td><span className="badge badge-sm bg-warning d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Inprogress</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i className="isax isax-eye" /></a>
                        <a href="#" className="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i className="isax isax-edit-2" /></a>
                        <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">#TIC004</a></td>
                    <td>17 Jun 2025</td>
                    <td>Slow speed while Course Download</td>
                    <td><span className="badge badge-sm bg-soft-danger d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />High</span></td>
                    <td>Server Issues</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Closed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i className="isax isax-eye" /></a>
                        <a href="#" className="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i className="isax isax-edit-2" /></a>
                        <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">#TIC003</a></td>
                    <td>04 Jun 2025</td>
                    <td>Unable to access the course </td>
                    <td><span className="badge badge-sm bg-soft-skyblue d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Medium</span></td>
                    <td>Demo Problem</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Closed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i className="isax isax-eye" /></a>
                        <a href="#" className="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i className="isax isax-edit-2" /></a>
                        <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">#TIC002</a></td>
                    <td>20 May 2025</td>
                    <td> Assignment Upload Error files</td>
                    <td><span className="badge badge-sm bg-soft-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Low</span></td>
                    <td>File Error</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Closed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i className="isax isax-eye" /></a>
                        <a href="#" className="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i className="isax isax-edit-2" /></a>
                        <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">#TIC001</a></td>
                    <td>15 May 2025</td>
                    <td>Account Recovery Assistance Need</td>
                    <td><span className="badge badge-sm bg-soft-danger d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />High</span></td>
                    <td>Recovery Issues</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Closed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i className="isax isax-eye" /></a>
                        <a href="#" className="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i className="isax isax-edit-2" /></a>
                        <a href="#" className="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row align-items-center mt-4">
              <div className="col-md-2">
                <p className="pagination-text">Page 1 of 2</p>
              </div>
              <div className="col-md-10">
                <ul className="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
                  <li className="page-item prev">
                    <a className="page-link" href="javascript:void(0)" tabIndex={-1}><i className="fas fa-angle-left" /></a>
                  </li>
                  <li className="page-item first-page active">
                    <a className="page-link" href="javascript:void(0)">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">3</a>
                  </li>
                  <li className="page-item next">
                    <a className="page-link" href="javascript:void(0)"><i className="fas fa-angle-right" /></a>
                  </li>
                </ul>
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
  {/* Add Ticket */}
  <div className="modal fade" id="add_ticket">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Add Ticket</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/student-tickets.html">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Ticket Title <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Category <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>Mailing Issues</option>
                    <option>Language Issues</option>
                    <option>Installation Error</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Priority <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>High</option>
                    <option>Low</option>
                    <option>Medium</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <div className="summernote"><p>Enter Ticket Detail</p></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Attachments</label>
                  <div className="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">
                    <span className="upload-img mb-2"><i className="isax isax-folder5 fs-24" /></span>
                    <p className="mb-1 text-gray-9 fw-medium">Drag and drop your files</p>
                    <p className="mb-2 fs-12">Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf</p>
                    <input type="file" accept="video/image" />
                    <span className="btn mt-2 btn-secondary rounded-pill"><i className="isax isax-document-upload me-1" />Upload</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-secondary rounded-pill" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Ticket */}
  {/* Edit Ticket */}
  <div className="modal fade" id="edit_ticket">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Edit Ticket</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/student-tickets.html">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Ticket Title <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue="Issue with Course Notification Emails" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Category <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>Mailing Issues</option>
                    <option>Language Issues</option>
                    <option>Installation Error</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Priority <span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option selected>High</option>
                    <option>Low</option>
                    <option>Medium</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <div className="summernote"><p>Enter Ticket Detail</p></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Attachments</label>
                  <div className="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">
                    <span className="upload-img mb-2"><i className="isax isax-folder5 fs-24" /></span>
                    <p className="mb-1 text-gray-9 fw-medium">Drag and drop your files</p>
                    <p className="mb-2 fs-12">Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf</p>
                    <input type="file" accept="video/image" />
                    <span className="btn mt-2 btn-secondary rounded-pill"><i className="isax isax-document-upload me-1" />Upload</span>
                  </div>
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
  {/* /Edit Ticket */}
  {/* Ticket Details */}
  <div className="modal fade" id="ticket_details">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="d-inline-flex align-items-center">Ticket Details <span className="text-primary fs-14 ms-2">#TIC010</span></h5>
          <div className="d-flex align-items-center justify-content-end">
            <span className="badge badge-sm bg-purple d-inline-flex align-items-center me-2"><i className="fa-solid fa-circle fs-5 me-1" />Opened</span>
            <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="isax isax-close-circle5" />
            </button>
          </div>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-3">
                <h6 className="mb-1">Category</h6>
                <p>Mailing Issues</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <h6 className="mb-1">Date</h6>
                <p>26 Jul 2025</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <h6 className="mb-1">Priority</h6>
                <span className="badge bg-soft-danger badge-sm d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />High</span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <h6 className="mb-1">Subject</h6>
                <p>Issue with Course Notification Emails</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div>
                <h6 className="mb-1">Description</h6>
                <p>I am not receiving important emails from the LMS platform, such as course notifications, 
                  enrollment confirmations, or assignment updates. Additionally, some 
                  students have reported that they are not receiving emails about live classes or announcements.
                  This issue is affecting communication and timely updates for both instructors and students. 
                  Please investigate and resolve this issue as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Ticket Details */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete Ticket</h4>
            <p className="mb-3">Are you sure you want to delete ticket?</p>
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

export default Tickets