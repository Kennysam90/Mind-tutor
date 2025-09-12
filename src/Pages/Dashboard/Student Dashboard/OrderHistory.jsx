import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'
import Footer from '../../../Component/Footer'

const OrderHistory = () => {
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
          <h2 className="breadcrumb-title mb-2">Order History</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Order History</li>
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
          <div className="page-title d-flex align-items-center justify-content-between">
            <h5>Order History</h5>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="mb-3">
                <div className="dropdown">
                  <a href="javascript:void(0);" className="dropdown-toggle btn rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                    Status
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
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
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD010</a></td>
                  <td>22 Aug 2025</td>
                  <td>$160</td>
                  <td><span className="badge bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD009</a></td>
                  <td>10 Aug 2025</td>
                  <td>$180</td>
                  <td><span className="badge bg-info d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Pending</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD008</a></td>
                  <td>26 Jul 2025</td>
                  <td>$200</td>
                  <td><span className="badge bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD007</a></td>
                  <td>12 Jul 2025</td>
                  <td>$220</td>
                  <td><span className="badge bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD006</a></td>
                  <td>02 Jul 2025</td>
                  <td>$170</td>
                  <td><span className="badge bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#ORD005</a></td>
                  <td>25 Jun 2025</td>
                  <td>$150</td>
                  <td><span className="badge bg-success d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
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
  {/* Footer */}
  <Footer />
  {/* /Footer */}
  {/* View Invoice */}
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
                  <p className="fs-14 mb-1">Email :<a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c6b2aea9aba7b5aaa7b1aaa3b486a3bea7abb6aaa3e8a5a9ab">[email&nbsp;protected]</a></p>
                  <p className="fs-14">Phone : +1 987 654 3210</p>
                </div>
              </div>
              <div className="col-lg-5">
                <span className="mb-3 d-flex">To</span>
                <div>
                  <h6 className="mb-2">Ronald Richard</h6>
                  <p className="fs-14 mb-1">3103 Trainer Avenue Peoria, IL 61602</p>
                  <p className="fs-14 mb-1">Email : <a href="#"><span className="__cf_email__" data-cfemail="c4a5a0b6a1f784a1bca5a9b4a8a1eaa7aba9">[email&nbsp;protected]</span></a></p>
                  <p className="fs-14">Phone : <a href="#">+1 987 471 6589</a></p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mb-3 text-end">
                  <span className="mb-1 d-block">Payment Status</span>
                  <span className="badge bg-success badge-sm d-inline-flex align-items-center fs-10 fw-normal mb-4"><i className="fa-solid fa-circle fs-5 me-1" />Completed</span>
                  <div>
                    <img src="assets/img/icon/qr.svg" className="img-fluid" alt="QR" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="table-responsive custom-table rounded-0">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th className="w-50">Description</th>
                    <th className="text-center">Qty</th>
                    <th className="text-end">Cost</th>
                    <th className="text-end">Discount</th>
                    <th className="text-end">Total</th>
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
                <h6 className="mb-1 fs-15">Notes</h6>
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
                <h6 className="fs-15 pe-3 mb-2">Ted M. Davis</h6>
                <p>Assistant Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /View Invoice */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default OrderHistory