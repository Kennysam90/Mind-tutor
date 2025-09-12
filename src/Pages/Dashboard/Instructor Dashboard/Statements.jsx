import React from 'react'
import Header from '../../../Component/Header'
import TutorSidebar from '../../../Component/TutorSidebar'
import Footer from '../../../Component/Footer'

const Statements = () => {
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
          <h2 className="breadcrumb-title mb-2">Statements</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Statements</li>
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
                <h5 className="mb-1 text-white d-inline-flex align-items-center"><a href="instructor-details.html">Eugene Andre</a><a href="instructor-profile.html" className="link-light fs-16 ms-2"><i className="isax isax-edit-2" /></a></h5>
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
          <div className="statements">
            <h5 className="page-title">Statements</h5>
            <div className="table-top">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="d-flex align-items-center">
                    <div className="mb-3">
                      <div className="dropdown me-3">
                        <a href="javascript:void(0);" className="dropdown-toggle btn d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                          Payment Method
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a href="javascript:void(0);" className="dropdown-item rounded-1">Paypal</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" className="dropdown-item rounded-1">Bank Transfer</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" className="dropdown-item rounded-1">Stripe</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="dropdown me-3">
                        <a href="javascript:void(0);" className="dropdown-toggle btn d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                          Status
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a href="javascript:void(0);" className="dropdown-item rounded-1">Completed</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" className="dropdown-item rounded-1">Pending</a>
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
            </div>
            <div className="table-responsive custom-table">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Order ID</th>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="order"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD01</a></td>
                    <td><a href="course-details.html">Information About UI/UX Design<br /> Degree</a></td>
                    <td>22 Aug 2025</td>
                    <td>$160</td>
                    <td>Paypal</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="order"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD009</a></td>
                    <td><a href="course-details.html">Build Responsive Real World Websites<br /> with Crash Course</a></td>
                    <td>10 Aug 2025</td>
                    <td>$180</td>
                    <td>Bank Transfer</td>
                    <td><span className="badge badge-sm bg-info d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Pending</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="order"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD008</a></td>
                    <td><a href="course-details.html">C# Developers Double Your Coding<br /> with Visual Studio</a></td>
                    <td>26 Jul 2025</td>
                    <td>$200</td>
                    <td>Stripe</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="order"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD007</a></td>
                    <td><a href="course-details.html">Wordpress for Beginners - Master<br /> Wordpress Quickly</a></td>
                    <td>12 Jul 2025</td>
                    <td>$220</td>
                    <td>Paypal</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="order"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD006</a></td>
                    <td><a href="course-details.html">Introduction to Python Programming</a></td>
                    <td>02 Jul 2025</td>
                    <td>$170</td>
                    <td>Stripe</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="order"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD005</a></td>
                    <td><a href="course-details.html">Learn JavaScript and Express to<br /> become a Expert</a></td>
                    <td>25 Jun 2025</td>
                    <td>$150</td>
                    <td>Bank Transfer</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                        <a href="javascript:void(0);" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer />
  {/* /Footer */}
  <div className="modal fade" id="view_invoice">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Invoice</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <div className="modal-body">
          <div className="border-bottom mb-3">
            <div className="row justify-content-between align-items-center flex-wrap row-gap-4">
              <div className="col-md-6">
                <div className="mb-2 invoice-logo-white">
                  <img src="assets/img/logo.svg" className="img-fluid" alt="logo" />
                </div>
                <p className="mb-2">3099 Kennedy Court Framingham, MA 01702</p>
              </div>
              <div className="col-md-6">
                <div className=" text-end mb-3">
                  <h6 className="text-default mb-1 text-secondary fs-16">#OI0010</h6>
                  <p className="mb-1">Created Date : <span className="text-gray-9">Aug 25, 2025</span> </p>
                  <p>Due Date : <span className="text-gray-9">Aug 30, 2025</span> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom mb-3">
            <div className="row g-4">
              <div className="col-lg-5">
                <span className="mb-3 d-flex">From</span>
                <div>
                  <h6 className="mb-2 fs-16">Thomas Lawler</h6>
                  <p className="fs-14 mb-1">2077 Chicago Avenue Orosi, CA 93647</p>
                  <p className="fs-14 mb-1">Email :<a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2f5b4740424e5c434e58434a5d6f4a574e425f434a014c4042">[email&nbsp;protected]</a></p>
                  <p className="fs-14">Phone : +1 987 654 3210</p>
                </div>
              </div>
              <div className="col-lg-5">
                <span className="mb-3 d-flex">To</span>
                <div>
                  <h6 className="mb-2">Ronald Richard</h6>
                  <p className="fs-14 mb-1">3103 Trainer Avenue Peoria, IL 61602</p>
                  <p className="fs-14 mb-1">Email : <a href="javascript:void(0);"><span className="__cf_email__" data-cfemail="a1c0c5d3c492e1c4d9c0ccd1cdc48fc2cecc">[email&nbsp;protected]</span></a></p>
                  <p className="fs-14">Phone : <a href="javascript:void(0);">+1 987 471 6589</a></p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mb-3 text-end">
                  <span className="mb-1 d-block">Payment Status</span>
                  <span className="badge bg-success badge-md d-inline-flex align-items-center fs-10 fw-normal mb-4"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span>
                  <div>
                    <img src="assets/img/icon/qr.svg" className="img-fluid" alt="QR" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="table-responsive">
              <table className="table invoice-table">
                <thead className="thead-light">
                  <tr>
                    <th className="w-50 bg-light-400">Description</th>
                    <th className="text-center bg-light-400">Qty</th>
                    <th className="text-end bg-light-400">Cost</th>
                    <th className="text-end bg-light-400">Discount</th>
                    <th className="text-end bg-light-400">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="text-gray-9">Information About UI/UX Design Degree</p>
                    </td>
                    <td className="text-gray text-center">1</td>
                    <td className="text-gray text-end">$120</td>
                    <td className="text-gray text-end">$0</td>
                    <td className="text-gray text-end">$120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-bottom mb-3 pb-3">
            <div className="row">
              <div className="col-md-6" />
              <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center border-bottom my-2 pb-2 pe-3">
                  <p className="text-gray mb-0">Sub Total</p>
                  <p className="text-gray-9 fw-medium">$120</p>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom my-2 pb-2 pe-3">
                  <p className="mb-0">Discount (0%)</p>
                  <p className="text-gray-9 fs-14 fw-medium">$0</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3 pe-3">
                  <p className="mb-0">VAT (5%)</p>
                  <p className="text-gray-9 fs-14 fw-medium mb-2">$0</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                  <h6 className="fs-16">Total Amount</h6>
                  <h6 className="fs-16">$120</h6>
                </div>
                <p>
                  Amount in Words : Dollar One Hundred Twenty 
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center gy-3">
            <div className="col-lg-9">
              <div className="mb-3">
                <h6 className="mb-1 fs-16">Notes</h6>
                <p>Invoice for course purchase, covering course fee, discounts, and applicable taxes.</p>
              </div>
              <div>
                <h6 className="mb-1 fs-16">Terms and Conditions</h6>
                <p>Full payment grants non-transferable access to the course, subject to the provider’s refund policy. </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-end pe-4 mb-2">
                <img src="assets/img/icons/sign.svg" className="img-fluid" alt="sign" />
              </div>
              <div className="text-end">
                <h6 className="fs-16 pe-3 mb-2">Ted M. Davis</h6>
                <p>Assistant Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default Statements