import React from 'react'
import Header from '../../../Component/Header'
import TutorSidebar from '../../../Component/TutorSidebar'
import Footer from '../../../Component/Footer'

const Payouts = () => {
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
          <h2 className="breadcrumb-title mb-2">Payouts</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Payouts</li>
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
          <div className="payouts">
            <div className="alert alert-warning alert-dismissible d-flex fade show mb-4">
              <i className="isax isax-information4 flex-shrink-0 me-2" />Your selected payout method was confirmed on Next Payout on 15 Jan, 2025 for "<a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a5d5c4dccad0d1e5c0ddc4c8d5c9c08bc6cac8">[email&nbsp;protected]</a>"
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className="isax isax-close-circle5" /></button>
            </div>
            <div className="row mb-4">
              <div className="col-xl-5">
                <div className="earning-this-month border">
                  <img src="assets/img/shapes/withdraw-bg1.svg" className="earning-bg1" alt="img" />
                  <img src="assets/img/shapes/withdraw-bg2.svg" className="earning-bg2" alt="img" />
                  <div className="flex-shrink-0 earn-img">
                    <img className="img-fluid" src="assets/img/icons/icon-2.svg" alt="img" />
                  </div>
                  <div className="ps-3">
                    <h6 className="mb-2">Earning this month</h6>
                    <h5>$8,420</h5>
                    <p>Update your payout in settings</p>
                  </div>
                  <a href="#" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#withdraw-req">Withdraw</a>
                </div>
              </div>
              <div className="col-xl-7">
                <h6 className="mb-3">Select Payment Gateway for Payout</h6> 
                <div className="payment-method">
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                        <label className="btn bg-white btn-check-label w-100 d-flex justify-content-between align-items-center" htmlFor="btnradio1">
                          <span className="d-flex align-items-center"><span className="check-outer me-2"><i /></span><img src="assets/img/icons/paypal.svg" alt="img" /></span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                        <label className="btn btn-check-label bg-white w-100 d-flex justify-content-between align-items-center" htmlFor="btnradio2">
                          <span className="d-flex align-items-center fs-16 fw-medium"><span className="check-outer me-2"><i /></span>Bank Transfer</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>                           
              </div>
            </div>
            <h5 className="page-title">Payouts</h5>
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
                            <a href="javascript:void(0);" className="dropdown-item rounded-1">Paid</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" className="dropdown-item rounded-1">Pending</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" className="dropdown-item rounded-1">Cancel</a>
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
                    <th>ID</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#" className="text-primary">#1010</a></td>
                    <td>22 Aug 2025</td>
                    <td>$160</td>
                    <td>Paypal</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary">#1009</a></td>
                    <td>10 Aug 2025</td>
                    <td>$180</td>
                    <td>Bank Transfer</td>
                    <td><span className="badge badge-sm bg-info d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Pending</span></td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary">#1008</a></td>
                    <td>26 Jul 2025</td>
                    <td>$200</td>
                    <td>Stripe</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary">#1007</a></td>
                    <td>12 Jul 2025</td>
                    <td>$220</td>
                    <td>Paypal</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary">#1006</a></td>
                    <td>02 Jul 2025</td>
                    <td>$170</td>
                    <td>Stripe</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary">#1005</a></td>
                    <td>25 Jun 2025</td>
                    <td>$150</td>
                    <td>Bank Transfer</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary">#1004</a></td>
                    <td>17 Jun 2025</td>
                    <td>$130</td>
                    <td>Paypal</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary">#1003</a></td>
                    <td>04 Jun 2025</td>
                    <td>$190</td>
                    <td>Bank Transfer</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary">#1002</a></td>
                    <td>20 May 2025</td>
                    <td>$140</td>
                    <td>Paypal</td>
                    <td><span className="badge badge-sm bg-danger d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Cancelled</span></td>
                  </tr>
                  <tr>
                    <td><a href="#" className="text-primary">#1001</a></td>
                    <td>15 May 2025</td>
                    <td>$110</td>
                    <td>Stripe</td>
                    <td><span className="badge badge-sm bg-success d-inline-flex align-items-center"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /pagination */}
            <div className="row align-items-center mt-3">
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
            {/* /pagination */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer />
  {/* /Footer */}
  <div className="modal fade" id="withdraw-req">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Withdrawal Request</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-payout.html">
          <div className="modal-body pb-0">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <p className="mb-2">Withdrawal Balance</p>
                    <h6 className="fs-16">$5340</h6>
                  </div>
                  <div className="col-6">
                    <p className="mb-2">Selected</p>
                    <h6 className="fs-16">PayPal</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Amount<span className="text-danger ms-1">*</span></label>
              <input type="text" className="form-control" defaultValue="$ " />
              <p className="form-info"><i className="isax isax-info-circle" />Minimum withdraw amount is $50</p>
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
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default Payouts