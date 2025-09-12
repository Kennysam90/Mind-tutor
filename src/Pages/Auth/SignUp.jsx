import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
       {/* Main Wrapper */}
<div className="main-wrapper">
  <div className="login-content">
    <div className="row">
      {/* Login Banner */}
      <div className="col-lg-6 login-bg d-none d-lg-flex">
        <div className="login-carousel">
          <div>
            <div className="login-carousel-section mb-3">
              <div className="login-banner">
                <img src="assets/img/auth/auth-1.svg" className="img-fluid" alt="Logo" />
              </div>
              <div className="mentor-course text-center">
                <h3 className="mb-2">Welcome to <br />Dreams<span className="text-secondary">LMS</span> Courses.</h3>
                <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="login-carousel-section mb-3">
              <div className="login-banner">
                <img src="assets/img/auth/auth-1.svg" className="img-fluid" alt="Logo" />
              </div>
              <div className="mentor-course text-center">
                <h3 className="mb-2">Welcome to <br />Dreams<span className="text-secondary">LMS</span> Courses.</h3>
                <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="login-carousel-section mb-3">
              <div className="login-banner">
                <img src="assets/img/auth/auth-1.svg" className="img-fluid" alt="Logo" />
              </div>
              <div className="mentor-course text-center">
                <h3 className="mb-2">Welcome to <br />Dreams<span className="text-secondary">LMS</span> Courses.</h3>
                <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Login Banner */}
      <div className="col-lg-6 login-wrap-bg">
        {/* Login */}
        <div className="login-wrapper">
          <div className="loginbox">
            <div className="w-100">
              <div className="d-flex align-items-center justify-content-between login-header">
                <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                <a href="index.html" className="link-1">Back to Home</a>
              </div>
              <h1 className="fs-32 fw-bold topic">Sign up</h1>
              <form action="https://dreamslms.dreamstechnologies.com/html/template/login.html" className="mb-3 pb-3">
                <div className="mb-3 position-relative">
                  <label className="form-label">Full Name<span className="text-danger ms-1">*</span></label>
                  <div className="position-relative">
                    <input type="text" className="form-control form-control-lg" />
                    <span><i className="isax isax-user input-icon text-gray-7 fs-14" /></span>
                  </div>
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Email<span className="text-danger ms-1">*</span></label>
                  <div className="position-relative">
                    <input type="email" className="form-control form-control-lg" />
                    <span><i className="isax isax-sms input-icon text-gray-7 fs-14" /></span>
                  </div>
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">New Password <span className="text-danger"> *</span></label>
                  <div className="position-relative" id="passwordInput">
                    <input type="password" className="pass-inputs form-control form-control-lg" />
                    <span className="isax toggle-passwords isax-eye-slash text-gray-7 fs-14" />
                  </div>
                  <div className="password-strength" id="passwordStrength">
                    <span id="poor" />
                    <span id="weak" />
                    <span id="strong" />
                    <span id="heavy" />
                  </div>
                  <div className="mt-2" id="passwordInfo" />	
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Confirm Password <span className="text-danger"> *</span></label>
                  <div className="position-relative">
                    <input type="password" className="pass-inputa form-control form-control-lg" />
                    <span className="isax toggle-passworda isax-eye-slash text-gray-7 fs-14" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="remember-me d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label mb-0 d-inline-flex remember-me fs-14" htmlFor="flexCheckDefault">
                      I agree with <a href="javascript:void(0);" className="link-2 mx-2">Terms of Service</a> and <a href="javascript:void(0);" className="link-2 mx-2">Privacy Policy</a> 
                    </label>
                  </div>
                </div>
                <div className="d-grid">
                  <button className="btn btn-secondary btn-lg" type="submit">Sign Up <i className="isax isax-arrow-right-3 ms-1" /></button>
                </div>
              </form>
              <div className="d-flex align-items-center justify-content-center or fs-14 mb-3">
                Or
              </div>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <a href="javascript:void(0);" className="btn btn-light me-2"><img src="assets/img/icons/google.svg" alt="img" className="me-2" />Google</a>
                <a href="javascript:void(0);" className="btn btn-light"><img src="assets/img/icons/facebook.svg" alt="img" className="me-2" />Facebook</a>
              </div>
              <div className="fs-14 fw-normal d-flex align-items-center justify-content-center">
                Already you have an account?<Link to="/login" className="link-2 ms-1"> Login</Link>
              </div>
              {/* /Login */}
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

export default SignUp