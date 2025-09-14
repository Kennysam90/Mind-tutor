import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>

    <header className="header-two">
      <div className="container">
        <div className="header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span className="bar-icon">
                <i className="isax isax-menu" />
              </span>
            </a>
            <div className="navbar-logo">
              <a className="logo-white header-logo" href="index.html">
                <img src="assets/img/logo-white.svg" className="logo" alt="Logo" />
              </a>
              <a className="logo-dark header-logo" href="index.html">
                <img src="assets/img/logo-white.svg" className="logo" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="main-menu-wrapper">								
            <div className="menu-header">
              <a href="index.html" className="menu-logo">
                <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
              </a>
              <a id="menu_close" className="menu-close" href="javascript:void(0);">
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav">
              <li className="has-submenu megamenu active">
                <Link to="/">Home <i className="fas fa-chevron-down" /></Link>
              </li>
              <li className="has-submenu">
                <a>Courses <i className="fas fa-chevron-down" /></a>
                <ul className="submenu">
                  <li>
                    <Link to="/coursegrid">Courses</Link>
                  </li>									
                  <li><a href="course-resume.html">Course Resume</a></li>
                  <li><a href="course-watch.html">Course Watch</a></li>
                  <li><a href="add-course.html">Add New Course</a></li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">Dashboard <i className="fas fa-chevron-down" /></a>
                <ul className="submenu">
                  <li>
                    <Link to="/instructordashboard">Instructor Dashboard</Link>
                  </li>
                  <li >
                     <Link to="/studentdashboard">Student Dashboard</Link>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">Pages <i className="fas fa-chevron-down" /></a>
                <ul className="submenu">
                  {/* <li className="has-submenu">
                    <a href="#">Instructors</a>
                    <ul className="submenu">
                      <li><a href="instructor-grid.html">Instructor Grid</a></li>
                      <li><a href="instructor-list.html">Instructor List</a></li>
                      <li><a href="instructor-details.html">Instructor Details</a></li>
                    </ul>
                  </li> */}
                  <li><Link to="/aboutus">About Us</Link></li>
                  <li><Link to="/contactus">Contact us</Link></li>
                  <li><Link to="/notifications">Notifications</Link></li>
                  {/* <li><a href="become-an-instructor.html">Become an Instructor</a></li> */}
                  {/* <li><a href="testimonials.html">Testimonials</a></li> */}
                  <li><Link to="/pricingplan">Pricing Plan</Link></li>
                </ul>
              </li>	
              <li className="has-submenu">
                <a href="#">Blog <i className="fas fa-chevron-down" /></a>
                <ul className="submenu">
                  <li
                  >
                    <Link to="/bloggrid">Blog Grid</Link>
                  </li>
                  <li>
                    <Link to="/blogdetails">Blog Details</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="menu-dropdown">
              <div className="cart-item">
                <h6>Cart &amp; Wishlist</h6>                                
                <div className="icon-btn">
                  <Link to="/cart" className="position-relative">
                    <i className="isax isax-shopping-cart5" />
                    <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
                  </Link>
                </div>
              </div>
              <div className="dropdown flag-dropdown mb-2">
                <a href="javascript:void(0);" className="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="assets/img/flags/us-flag.svg" className="me-2" alt="flag" />ENG
                </a>
                <ul className="dropdown-menu p-2 mt-2">
                  <li>
                    <a className="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                      <img src="assets/img/flags/us-flag.svg" className="me-2" alt="flag" />ENG
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                      <img src="assets/img/flags/arab-flag.svg" className="me-2" alt="flag" />ARA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                      <img src="assets/img/flags/france-flag.svg" className="me-2" alt="flag" />FRE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown mb-2">
                <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  USD
                </a>
                <ul className="dropdown-menu p-2 mt-2">
                  <li><a className="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                  <li><a className="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                  <li><a className="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
                </ul>
              </div>
              <div className="dropdown mb-2">
                <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Light
                </a>
                <ul className="dropdown-menu p-2 mt-2">
                  <li><a className="dropdown-item rounded" href="javascript:void(0);">Light</a></li>
                  <li><a className="dropdown-item rounded" href="javascript:void(0);">Dark</a></li>
                </ul>
              </div>
            </div>
            <div className="menu-login">
              <Link to="/login " className="btn btn-primary w-100 mb-2"><i className="isax isax-user me-2" />Sign In</Link>
              <a href="register.html" className="btn btn-secondary w-100"><i className="isax isax-user-edit me-2" />Register</a>
            </div>
          </div>
          <div className="header-btn d-flex align-items-center">							
            <div className="dropdown flag-dropdown icon-btn">
              <a href="javascript:void(0);" className="d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="assets/img/flags/us-flag.svg" alt="flag" />
              </a>
              <ul className="dropdown-menu p-2 mt-2">
                <li>
                  <a className="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                    <img src="assets/img/flags/us-flag.svg" className="me-2" alt="flag" />ENG
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                    <img src="assets/img/flags/arab-flag.svg" className="me-2" alt="flag" />ARA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                    <img src="assets/img/flags/france-flag.svg" className="me-2" alt="flag" />FRE
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown icon-btn">
              <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="isax isax-dollar-circle4" />
              </a>
              <ul className="dropdown-menu p-2 mt-2">
                <li><a className="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                <li><a className="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                <li><a className="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
              </ul>
            </div>
            <div className="icon-btn">
              <a href="javascript:void(0);" id="dark-mode-toggle" className="theme-toggle activate">
                <i className="isax isax-sun-15" />
              </a>
              <a href="javascript:void(0);" id="light-mode-toggle" className="theme-toggle">
                <i className="isax isax-moon" />
              </a>
            </div>
            <div className="icon-btn">
              <Link to="/cart" className="position-relative">
                <i className="isax isax-shopping-cart5" />
                <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
              </Link>
            </div>
            <Link to="/login" className="btn btn-primary d-inline-flex align-items-center me-2">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-secondary me-0">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
	

    </>
  )
}

export default Header