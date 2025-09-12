import React from 'react'

const OTP = () => {
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
                <h1 className="fs-32 fw-bold mb-3">Email OTP</h1>
                <p className="fs-14 fw-normal mb-0">OTP sent to your Email Address ending&nbsp;******<a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="42262d2702273a232f322e276c212d2f">[email&nbsp;protected]</a></p>
              </div>
              <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-dashboard.html" className="mb-3 pb-3">
                <div className="d-flex align-items-center mb-3">
                  <input type="text" className="form-control otp" maxLength={1} />
                  <input type="text" className="form-control otp" maxLength={1} />
                  <input type="text" className="form-control otp" maxLength={1} />
                  <input type="text" className="form-control otp" maxLength={1} />
                </div>
                <div className="timer-cover d-flex align-items-center justify-content-center">
                  <div className="badge badge-soft-danger rounded-pill d-flex align-items-center"><i className="isax isax-clock me-1" /><span id="otp_timer">09:59</span> <span className="ms-1">s</span></div>
                </div>
                <div className="d-grid">
                  <button className="btn btn-secondary btn-lg w-100" type="submit">Verify &amp; Proceed<i className="isax isax-arrow-right-3 ms-1" /></button>
                </div>
              </form>
              <div className="fs-14 fw-normal d-flex align-items-center justify-content-center">
                Didn’t get the OTP?<a href="javascript:void(0);" className="link-2 ms-1"> Resend OTP</a>
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

export default OTP