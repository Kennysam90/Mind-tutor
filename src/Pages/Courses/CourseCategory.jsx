import React from 'react'
import Header from '../../Component/Header'

const CourseCategory = () => {
  return (
   <div>
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
            <h2 className="breadcrumb-title mb-2">Course Category 2</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Course Category 2</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    <div className="container">
      <section className="categories-top bg-light border"> 
        <img src="assets/img/course/course-bg-1.svg" alt="img" className="d-none d-lg-flex course-bg" />     
        <img src="assets/img/course/course-bg-2.png" alt="img" className="d-none d-lg-flex course-bg2" />  
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <div className="caetgory-form">
              <h2 className="mb-2">Browse by Categories</h2>
              <p>Take the first step towards achieving your goals with our comprehensive online courses.</p>
              <form className="position-relative">
                <input className="form-control" type="text" placeholder="Search School, Online educational centres, etc" />
                <button type="submit" className="btn btn-primary">Search</button>
              </form>
            </div>
          </div>
        </div>         
      </section>
    </div>
    {/* Course */}
    <section className="course-category-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon1.svg" alt="img" />
                </div>
                <h6 className="mb-1">Management</h6>
                <p>156 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon2.svg" alt="img" />
                </div>
                <h6 className="mb-1">IT &amp; Softwares</h6>
                <p>214 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon3.svg" alt="img" />
                </div>
                <h6 className="mb-1">Marketing</h6>
                <p>174 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="javascript:void(0);">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon4.svg" alt="img" />
                </div>
                <h6 className="mb-1">Finance</h6>
                <p>62 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon5.svg" alt="img" />
                </div>
                <h6 className="mb-1">Productivity</h6>
                <p>126 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon6.svg" alt="img" />
                </div>
                <h6 className="mb-1">Lifestyles</h6>
                <p>214 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon7.svg" alt="img" />
                </div>
                <h6 className="mb-1">Design</h6>
                <p>60Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon8.svg" alt="img" />
                </div>
                <h6 className="mb-1">Business</h6>
                <p>21 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon9.svg" alt="img" />
                </div>
                <h6 className="mb-1">Cyber Security</h6>
                <p>15 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon10.svg" alt="img" />
                </div>
                <h6 className="mb-1">Development</h6>
                <p>21 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon11.svg" alt="img" />
                </div>
                <h6 className="mb-1">Accounting</h6>
                <p>33 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <a href="course-details-2.html">
              <div className="category-item-2">
                <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                  <img src="assets/img/icons/category-icon12.svg" alt="img" />
                </div>
                <h6 className="mb-1">Engineering</h6>
                <p>42 Courses</p>
              </div>
            </a>
          </div>
        </div>
        <a href="#" target="_blank" className="btn btn-primary">Load More</a>
      </div>
    </section>
    {/* /Course */}
    {/* Footer */}
    <footer className="footer">
      <div className="footer-bg">
        <img src="assets/img/bg/footer-bg-01.png" className="footer-bg-1" alt />
        <img src="assets/img/bg/footer-bg-02.png" className="footer-bg-2" alt />
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row row-gap-4">
            <div className="col-lg-4">
              <div className="footer-about">
                <div className="footer-logo">
                  <img src="assets/img/logo.svg" alt />
                </div>
                <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>
                <div className="d-flex align-items-center">
                  <a href="#" className="me-2"><img src="assets/img/icon/appstore.svg" alt /></a>
                  <a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row row-gap-4">
                <div className="col-lg-3">
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">For Instructor</h5>
                    <ul>
                      <li><a href="course-grid.html">Search Mentors</a></li>
                      <li><a href="login.html">Login</a></li>
                      <li><a href="register.html">Register</a></li>
                      <li><a href="course-list.html">Booking</a></li>
                      <li><a href="student-dashboard.html">Students Dashboard</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">For Student</h5>
                    <ul>
                      <li><a href="javascript:void(0);">Appointments</a></li>
                      <li><a href="instructor-message.html">Chat</a></li>
                      <li><a href="login.html">Login</a></li>
                      <li><a href="register.html">Register</a></li>
                      <li><a href="instructor-dashboard.html">Instructor Dashboard</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="footer-widget footer-contact">
                    <h5 className="footer-title">Newsletter</h5>
                    <div className="subscribe-input">
                      <form action="javascript:void(0);">
                        <input type="email" className="form-control" placeholder="Enter your Email Address" />
                        <button type="submit" className="btn btn-primary btn-sm inline-flex align-items-center"><i className="isax isax-send-2 me-1" />Subscribe</button>
                      </form>
                    </div>
                    <div className="footer-contact-info">
                      <div className="footer-address d-flex align-items-center">
                        <img src="assets/img/icon/icon-20.svg" alt="Img" className="img-fluid me-2" />
                        <p> 3556  Beech Street, San Francisco,<br /> California, CA 94108 </p>
                      </div>
                      <div className="footer-address d-flex align-items-center">
                        <img src="assets/img/icon/icon-19.svg" alt="Img" className="img-fluid me-2" />
                        <p><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="95f1e7f0f4f8e6f9f8e6d5f0edf4f8e5f9f0bbf6faf8">[email&nbsp;protected]</a></p>
                      </div>
                      <div className="footer-address d-flex align-items-center">
                        <img src="assets/img/icon/icon-21.svg" alt="Img" className="img-fluid me-2" />
                        <p>+19 123-456-7890</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row row-gap-2">
            <div className="col-md-6">
              <div className="text-center text-md-start">
                <p className="text-white">Copyright © 2025 DreamsLMS. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <ul className="d-flex align-items-center justify-content-center justify-content-md-end footer-link">
                  <li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* /Footer */}
  </div>
  {/* /Main Wrapper */}
</div>

  )
}

export default CourseCategory