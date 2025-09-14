import React from 'react'
import Header from '../../../Component/Header'
import TutorSidebar from '../../../Component/TutorSidebar'
import Footer from '../../../Component/Footer'
import SettingTopbar from '../../../Component/SettingTopbar'

const Plans = () => {
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
          <div className="row">
            <div className="col-xl-5">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                    <h5 className="fs-18">Active Plan</h5>
                    <a href="#" className="btn download-btn fs-12">Download PDF</a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom mb-3 py-4">
                    <div>
                      <h6 className="mb-1">Standard Plan</h6>
                      <span className="fs-14">Valid till:&nbsp;May 2025 - Jun 2025</span>
                    </div>
                    <h4>$199</h4>
                  </div>
                  <div className="justify-content-end d-flex row-gap-2 flex-wrap">
                    <button className="btn bg-gray-100 rounded-pill me-1 fs-12" type="button">Cancel Subscription</button>
                    <button className="btn btn-secondary rounded-pill fs-12" data-bs-toggle="modal" data-bs-target="#pricing-plan" type="submit">Update Plan</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="card saved-card-items p-0 mb-3">
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom mb-3 pb-3">
                    <h5 className="fs-18">Saved Cards</h5>
                    <a href="#" className="btn btn-secondary fs-12" data-bs-toggle="modal" data-bs-target="#add_new_card"><i className="isax isax-add-circle me-1" />Add New Card</a>
                  </div>
                  <div className="row row-gap-3">
                    <div className="col-sm-6 px-2">
                      <div className="border rounded p-3">
                        <div className="d-flex align-items-center mb-3">
                          <div className="border p-2 rounded flex-shrink-0 me-2">
                            <img src="assets/img/icons/visa-logo.svg" alt="img" />
                          </div>
                          <div>
                            <h6>Credit Card</h6>
                            <small>Visa •••• 1568</small>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <a href="#" className="btn btn-secondary fs-12">Default</a>
                          <div className="d-flex gap-2">
                            <a href="#" className="fs-14 text-gray-5 action-icon" data-bs-toggle="modal" data-bs-target="#edit_card"><i className="isax isax-edit" /></a>
                            <a href="#" className="fs-14 text-gray-5 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 px-2">
                      <div className="border rounded p-3">
                        <div className="d-flex align-items-center mb-3">
                          <div className="border p-2 rounded flex-shrink-0 me-2">
                            <img src="assets/img/icons/Mastercard.svg" alt="img" />
                          </div>
                          <div>
                            <h6>Debit Card</h6>
                            <small>•••• 1279</small>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <a href="#" className="fs-14 text-secondary text-decoration-underline fw-normal">Set as Default</a>
                          <div className="d-flex gap-2">
                            <a href="#" className="fs-14 text-gray-5 action-icon" data-bs-toggle="modal" data-bs-target="#edit_card"><i className="isax isax-edit" /></a>
                            <a href="#" className="fs-14 text-gray-5 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i className="isax isax-trash" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between p-3">
            <h5 className="fs-18">Transaction History</h5>
            <div className="dropdown">
              <a href="javascript:void(0);" className="dropdown-toggle text-gray-6 btn rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                Status
              </a>
              <ul className="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" className="dropdown-item rounded-1">Paid</a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="dropdown-item rounded-1">Pending</a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="dropdown-item rounded-1">Cancelled</a>
                </li>
              </ul>
            </div>
          </div> 
          <div className="table-responsive custom-table">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Order ID</th>
                  <th>Plan Name</th>
                  <th>Payment Method</th>
                  <th>Subscribed On</th>
                  <th>Last Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#INV1245</a></td>
                  <td><a href="#" className="fw-medium" data-bs-toggle="modal" data-bs-target="#pricing-plan">Standard Plan</a></td>
                  <td>Credit Card</td>
                  <td>11 May 2025</td>
                  <td>14 Jun 2025</td>
                  <td>$199</td>
                  <td><span className="badge badge-sm fs-10 bg-success rounded-pill d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#INV3215</a></td>
                  <td><a href="#" className="fw-medium" data-bs-toggle="modal" data-bs-target="#pricing-plan">Basic Plan</a></td>
                  <td>Debit Card</td>
                  <td>12 Apr 2025</td>
                  <td>14 May 2025</td>
                  <td>$99</td>
                  <td><span className="badge badge-sm bg-skyblue rounded-pill d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Pending</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#INV4581</a></td>
                  <td><a href="#" className="fw-medium" data-bs-toggle="modal" data-bs-target="#pricing-plan">Premium Plan</a></td>
                  <td>Paypal</td>
                  <td>14 Mar 2025</td>
                  <td>14 Apr 2025</td>
                  <td>$299</td>
                  <td><span className="badge badge-sm fs-10 bg-success rounded-pill d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#INV6545</a></td>
                  <td><a href="#" className="fw-medium" data-bs-toggle="modal" data-bs-target="#pricing-plan">Basic Plan</a></td>
                  <td>Debit Card</td>
                  <td>13 Feb 2025</td>
                  <td>13 Mar 2025</td>
                  <td>$99</td>
                  <td><span className="badge badge-sm fs-10 bg-danger rounded-pill d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Cancelled</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#INV6546</a></td>
                  <td><a href="#" className="fw-medium" data-bs-toggle="modal" data-bs-target="#pricing-plan">Basic Plan</a></td>
                  <td>Debit Card</td>
                  <td>12 Feb 2025</td>
                  <td>12 Mar 2025</td>
                  <td>$99</td>
                  <td><span className="badge badge-sm fs-10 bg-danger rounded-pill d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Cancelled</span></td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#INV5769</a></td>
                  <td><a href="#" className="fw-medium" data-bs-toggle="modal" data-bs-target="#pricing-plan">Standard Plan</a></td>
                  <td>Stripe</td>
                  <td>05 Jan 2025</td>
                  <td>05 Feb 2025</td>
                  <td>$199</td>
                  <td><span className="badge badge-sm fs-10 bg-success rounded-pill d-inline-flex align-items-center me-1"><i className="fa-solid fa-circle fs-5 me-1" />Paid</span></td>
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
  {/* pricing plan */}
  <div className="modal fade pricing-modal" id="pricing-plan">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Pricing Plan</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <div className="modal-body">
          <div className="enable-item mb-3 d-flex align-items-center justify-content-center text-gray-9">
            <label className="mb-0 me-2 fs-14">Monthly</label>
            <div className="form-check form-switch check-on m-0">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
            </div>
            <label className="mb-0 ms-2 fs-14">Annualy</label>
          </div>
          <div className="row row-gap-4">
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="pricing-item flex-fill">
                <h5 className="mb-2">Basic</h5>
                <h1 className="mb-2 text-primary"><sup className="me-1">$</sup>99</h1>
                <h6 className="fw-normal">Ideal for individuals or small teams starting with online education.</h6>
                <div className="border-top pt-3 mt-3">
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />10 active courses</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Basic course creation tools</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Student progress tracking</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />1 GB storage</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Email notifications</p>
                  <p className="d-flex align-items-center mb-0"><i className="fa-solid fa-circle fs-5 me-2" />Community support</p>
                </div>
                <a href="#" className="btn btn-secondary w-100 mt-3" data-bs-toggle="modal" data-bs-target="#pricing-plan-two">Choose Plan<i className="isax isax-arrow-right-3 fs-10 ms-1" /></a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="pricing-item flex-fill">
                <h5 className="mb-2">Standard</h5>
                <h1 className="mb-2 text-primary"><sup className="me-1">$</sup>199</h1>
                <h6 className="fw-normal">Ideal for growing institutions that need advanced tools and greater flexibility.</h6>
                <div className="border-top pt-3 mt-3">
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Access to 20 courses</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Custom course certificates</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Basic analytics</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />10 GB storage</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Course scheduling</p>
                  <p className="d-flex align-items-center mb-0"><i className="fa-solid fa-circle fs-5 me-2" />Priority email and chat support</p>
                </div>
                <a href="#" className="btn btn-secondary w-100 mt-3" data-bs-toggle="modal" data-bs-target="#pricing-plan-two">Choose Plan<i className="isax isax-arrow-right-3 fs-10 ms-1" /></a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="pricing-item flex-fill">
                <h5 className="mb-2">Premium</h5>
                <h1 className="mb-2 text-primary"><sup className="me-1">$</sup>299</h1>
                <h6 className="fw-normal">Designed for large-scale learning with robust features and custom branding.</h6>
                <div className="border-top pt-3 mt-3">
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Unlimited courses</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Advanced course creation tools</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Detailed student analytics</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />100 GB storage</p>
                  <p className="d-flex align-items-center mb-2"><i className="fa-solid fa-circle fs-5 me-2" />Integration with third-party tools</p>
                  <p className="d-flex align-items-center mb-0"><i className="fa-solid fa-circle fs-5 me-2" />Completion certificates</p>
                </div>
                <a href="#" className="btn btn-secondary w-100 mt-3" data-bs-toggle="modal" data-bs-target="#pricing-plan-two">Choose Plan<i className="isax isax-arrow-right-3 fs-10 ms-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* pricing plan */}
  {/* pricing plan */}
  <div className="modal fade pricing-modal" id="pricing-plan-two">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Pricing Plan</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <div className="modal-body">
          <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-plans.html">
            <div className="row row-gap-3">
              <div className="col-lg-8">
                <div className="pay-meth">
                  <h5 className="fs-18 mb-3">Payment Method</h5>
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item mb-3" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Debit or Credit Card</button>
                    </li>
                    <li className="nav-item mb-3" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">PayPal</button>
                    </li>
                    <li className="nav-item mb-3" role="presentation">
                      <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Stripe</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Name on Card<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>			
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Card Number<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Expiration Date<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">CVV<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <hr className="mt-2" />
                      <h5 className="fs-18 mb-3">Billing Address</h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Address<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Country<span className="text-danger"> *</span></label>
                            <select className="select">
                              <option>Select</option>
                              <option>USA</option>
                              <option>Canada</option>
                              <option>Germany</option>
                              <option>France</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">State<span className="text-danger"> *</span></label>
                            <select className="select">
                              <option>Select</option>
                              <option>California</option>
                              <option>New York</option>
                              <option>Texas</option>
                              <option>Florida</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">City<span className="text-danger"> *</span></label>
                            <select className="select">
                              <option>Select</option>
                              <option>Los Angeles</option>
                              <option>San Diego</option>
                              <option>Fresno</option>
                              <option>San Francisco</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Postal Code <span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Email Address<span className="text-danger"> *</span></label>
                            <input type="email" className="form-control" />
                          </div>
                        </div>			
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Password<span className="text-danger"> *</span></label>
                            <div className="position-relative">
                              <input type="password" className="pass-input form-control" />
                              <span className="isax toggle-password text-gray-7 fs-14 isax-eye-slash" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-2" />
                      <h5 className="fs-18 mb-3">Billing Address</h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Address<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Country<span className="text-danger"> *</span></label>
                            <select className="select">
                              <option>Select</option>
                              <option>USA</option>
                              <option>Canada</option>
                              <option>Germany</option>
                              <option>France</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">State<span className="text-danger"> *</span></label>
                            <select className="select">
                              <option>Select</option>
                              <option>California</option>
                              <option>New York</option>
                              <option>Texas</option>
                              <option>Florida</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">City<span className="text-danger"> *</span></label>
                            <select className="select">
                              <option>Select</option>
                              <option>Los Angeles</option>
                              <option>San Diego</option>
                              <option>Fresno</option>
                              <option>San Francisco</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Postal Code <span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Email Address<span className="text-danger"> *</span></label>
                            <input type="email" className="form-control" />
                          </div>
                        </div>			
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Password<span className="text-danger"> *</span></label>
                            <div className="position-relative">
                              <input type="password" className="pass-input form-control" />
                              <span className="isax toggle-password text-gray-7 fs-14 isax-eye-slash" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-2" />
                      <h5 className="fs-18 mb-3">Billing Address</h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Address<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Country<span className="text-danger"> *</span></label>
                            <select className="select">
                              <option>Select</option>
                              <option>USA</option>
                              <option>Canada</option>
                              <option>Germany</option>
                              <option>France</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">State<span className="text-danger"> *</span></label>
                            <select className="select">
                              <option>Select</option>
                              <option>California</option>
                              <option>New York</option>
                              <option>Texas</option>
                              <option>Florida</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">City<span className="text-danger"> *</span></label>
                            <select className="select">
                              <option>Select</option>
                              <option>Los Angeles</option>
                              <option>San Diego</option>
                              <option>Fresno</option>
                              <option>San Francisco</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Postal Code <span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <a href="#" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#successful-modal">Proceed to Pay $99.00</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="subscription-details">
                  <h5 className="fs-18 mb-3">Subscription Details</h5>
                  <p className="mb-2">Plan Name: <span className="text-gray-9 float-end fw-medium">Basic</span></p>
                  <p className="mb-2">Plan Amount: <span className="text-gray-9 float-end fw-medium">$99.00</span></p>
                  <p className="mb-2">Tax: <span className="text-gray-9 float-end fw-medium">$0.00</span></p>
                  <p>Total: <span className="text-gray-9 float-end fw-medium">$99.00</span></p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* pricing plan */}
  <div className="modal fade successful-modal" id="successful-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-success rounded-circle mb-3">
            <i className="fa-solid fa-check fs-14 text-white" />											
          </span>
          <div>
            <h5 className="mb-1">Payment Successful</h5>
            <p className="mb-3">Your purchase of the Basic Plan has been completed with reference number <a href="#" className="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#INV1245</a></p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="#" className="btn bg-gray-100 rounded-pill me-2" data-bs-toggle="modal" data-bs-target="#pricing-plan">Back to Plans</a>
              <a href="#" className="btn btn-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#view_invoice">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
                  <p className="fs-14 mb-1">Email :<a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="85f1edeae8e4f6e9e4f2e9e0f7c5e0fde4e8f5e9e0abe6eae8">[email&nbsp;protected]</a></p>
                  <p className="fs-14">Phone : +1 987 654 3210</p>
                </div>
              </div>
              <div className="col-lg-5">
                <span className="mb-3 d-flex">To</span>
                <div>
                  <h6 className="mb-2">Ronald Richard</h6>
                  <p className="fs-14 mb-1">3103 Trainer Avenue Peoria, IL 61602</p>
                  <p className="fs-14 mb-1">Email : <a href="#"><span className="__cf_email__" data-cfemail="e081849285d3a08598818d908c85ce838f8d">[email&nbsp;protected]</span></a></p>
                  <p className="fs-14">Phone : <a href="#">+1 987 471 6589</a></p>
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
                      <p className="text-gray-9 fw-semibold">Basic Plan</p>
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
                <p>Invoice for course purchase, covering course fee.</p>
              </div>
              <div>
                <h6 className="mb-1 fs-16">Terms and Conditions</h6>
                <p>Full payment grants non-transferable access to the course.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-end pe-4 mb-2">
                <img src="assets/img/sign.html" className="img-fluid" alt="sign" />
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
  {/* /View Invoice */}
  {/* add new card */}
  <div className="modal fade" id="add_new_card">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Add New Card</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-plans.html">
          <div className="modal-body pb-0">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Payment Method<span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Select</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Paypal</option>
                    <option>Stripe</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Card Number<span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>	
              <div className="col-md-6">
                <div className="mb-3 add-card-date">
                  <label className="form-label">Expiration Date<span className="text-danger"> *</span></label>
                  <div className="input-icon position-relative calender-input">
                    <span className="input-icon-addon">
                      <i className="isax isax-calendar" />
                    </span>
                    <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">CVV<span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>	
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Name on Card<span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>								
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-secondary rounded-pill" type="submit">Add Card</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* add new card */}
  {/* edit card */}
  <div className="modal fade" id="edit_card">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Edit Card</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-plans.html">
          <div className="modal-body pb-0">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Payment Method<span className="text-danger"> *</span></label>
                  <select className="select">
                    <option>Debit Card</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Paypal</option>
                    <option>Stripe</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Card Number<span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue="9834 7923 4098 1568" />
                </div>
              </div>	
              <div className="col-md-6">
                <div className="mb-3 add-card-date">
                  <label className="form-label">Expiration Date<span className="text-danger"> *</span></label>
                  <div className="input-icon position-relative calender-input">
                    <span className="input-icon-addon">
                      <i className="isax isax-calendar" />
                    </span>
                    <input type="text" className="form-control datetimepicker" placeholder="dd/mm/yyyy" defaultValue="02/25" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">CVV<span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue={725} />
                </div>
              </div>	
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Name on Card<span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue="Eugene Andre" />
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
  {/* edit card */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete Card</h4>
            <p className="mb-3">Are you sure you want to delete card?</p>
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

export default Plans