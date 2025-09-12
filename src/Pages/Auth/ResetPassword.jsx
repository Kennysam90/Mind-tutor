import React from 'react'

const ResetPassword = () => {
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
              <div className="topic">
                <h1 className="fs-32 fw-bold ">Reset Password</h1>
                <p className="fw-normal fs-14 mb-0">Your new password must be different from previous password</p>
              </div>
              <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-dashboard.html" className="mb-3 pb-3">
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
                    <input type="password" className="pass-inputa form-control" />
                    <span className="isax toggle-passworda isax-eye-slash text-gray-7 fs-14" />
                  </div>
                </div>
                <div className="d-grid">
                  <button className="btn btn-secondary btn-lg" type="submit">Reset Password <i className="isax isax-arrow-right-3 ms-1" /></button>
                </div>
              </form>
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

export default ResetPassword