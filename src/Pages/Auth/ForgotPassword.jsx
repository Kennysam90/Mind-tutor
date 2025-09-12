import React from 'react'

const ForgotPassword = () => {
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
                <h1 className="fs-32 fw-bold mb-3">Forgot Password</h1>
                <p className="fs-14 fw-normal mb-0">Enter your email to reset your password.</p>
              </div>
              <form action="https://dreamslms.dreamstechnologies.com/html/template/set-password.html" className="mb-3 pb-3">
                <div className="mb-3 position-relative">
                  <label className="form-label">Email<span className="text-danger ms-1">*</span></label>
                  <div className="position-relative">
                    <input type="email" className="form-control form-control-lg" />
                    <span><i className="isax isax-sms input-icon text-gray-7 fs-14" /></span>
                  </div>
                </div>
                <div className="d-grid">
                  <button className="btn btn-secondary btn-lg" type="submit">Submit<i className="isax isax-arrow-right-3 ms-1" /></button>
                </div>
              </form>
              <p className="fs-14 fw-normal d-flex align-items-center justify-content-center">
                Remember Password?<a href="login.html" className="link-2 ms-1"> Sign In</a>
              </p>
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

export default ForgotPassword