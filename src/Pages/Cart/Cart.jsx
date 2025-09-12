import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import { Link } from 'react-router-dom'

const Cart = () => {
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
          <h2 className="breadcrumb-title mb-2">Cart</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Cart */}
  <div className="content">
    <div className="container">
      <div className="cart-cover">
        <div className="cart-items">
          <div>
            <div className="cart-head border-bottom d-flex justify-content-between align-items-center pb-4">
              <h5 className="mb-0">3 Courses</h5>
              <button className="btn btn-sm btn-danger-ghost mb-0"><i className="isax isax-close-circle me-1" />Clear cart</button>
            </div>
            <div className="row row-gap-3 pb-3 mb-3 border-bottom">
              <div className="col-md-12">
                <div className="cart-item mb-0">
                  <div className="row align-items-center row-gap-3">
                    <div className="col-md-3">
                      <div className="cart-img">
                        <a href="course-details.html"><img src="assets/img/course/course-01.jpg" alt="img" className="img-fluid w-100" /></a>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-md-9">
                          <div className="d-flex align-items-center mb-2">
                            <a href="instructor-profile.html" className="avatar avatar-sm rounded-circle me-2">
                              <img src="assets/img/user/user-01.jpg" alt="img" className="img-fluid rounded-circle" />
                            </a>
                            <p className="mb-0"><a href="instructor-profile.html">David Benitez</a></p>
                          </div>
                          <div className="mb-2">
                            <h6 className="fs-18 mb-0"><a href="course-details.html">Information About UI/UX Design Degree</a></h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="star me-2"><i className="fa-solid fa-star" /></span>
                            <p className="mb-0">4.9 (200 Reviews)</p>
                            <span className="mx-2 bg-secondary rounded-circle dot" />
                            <p className="mb-0">Intermediate</p>
                          </div>
                        </div>
                        <div className="col-md-3">														
                          <div className="d-flex align-items-center justify-content-end gap-4 cart-trash">
                            <h5 className="text-secondary">$120</h5>
                            <a href="#" className="trash-btn"><i className="isax isax-trash4" /></a>
                          </div>
                        </div>
                      </div>
                    </div>								
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="cart-item mb-0">
                  <div className="row align-items-center row-gap-3">
                    <div className="col-md-3">
                      <div className="cart-img">
                        <a href="course-details.html"><img src="assets/img/course/course-03.jpg" alt="img" className="img-fluid w-100" /></a>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-md-9">
                          <div className="d-flex align-items-center mb-2">
                            <a href="instructor-profile.html" className="avatar avatar-sm rounded-circle me-2">
                              <img src="assets/img/user/user-08.jpg" alt="img" className="img-fluid rounded-circle" />
                            </a>
                            <p className="mb-0"><a href="instructor-profile.html">Andrew Pirtle</a></p>
                          </div>
                          <div className="mb-2">
                            <h6 className="fs-18 mb-0"><a href="course-details.html">Sketch from A to Z (2024): Become an app designer</a></h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="star me-2"><i className="fa-solid fa-star" /></span>
                            <p className="mb-0">4.6 (170 Reviews)</p>
                            <span className="mx-2 bg-secondary rounded-circle dot" />
                            <p className="mb-0">Basic</p>
                          </div>
                        </div>
                        <div className="col-md-3">														
                          <div className="d-flex align-items-center justify-content-end gap-4 cart-trash">
                            <h5 className="text-secondary">$160</h5>
                            <a href="#" className="trash-btn"><i className="isax isax-trash4" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light border rounded-2 p-3 mb-4">
              <div className="row align-items-center justify-content-between row-gap-3">
                <div className="col-md-6">
                  <h6 className="mb-1">Subtotal</h6>
                  <p className="mb-0">All Courses have a <span className="text-gray-9 fw-medium mx-1">30-day</span>money-back guarantee</p>
                </div>
                <div className="col-md-6 text-end">
                  <h5>$450</h5>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end flex-wrap">
              <Link to="/coursegrid" className="btn continue-shopping-btn rounded-pill me-2">Continue Shopping</Link>
              <Link to="/checkout" className="btn checkout-btn rounded-pill">Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Cart */}
  {/* Footer */}
  <Footer />
  {/* /Footer */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default Cart