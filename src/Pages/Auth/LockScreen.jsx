import React from 'react'

const LockScreen = () => {
  return (
    <>
       {/* Main Wrapper */}
<div className="main-wrapper">
  <div className="lock-screen">
    <div className="lock-wrapper">
      <div className="d-flex align-items-center justify-content-center lock-header">
        <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
      </div>
      <div className="topic">
        <h1 className="fs-32 fw-bold mb-3 text-center">Welcome Back</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center mb-4">
        <div className="text-center">
          <div className="user-profile rounded-circle mb-3">
            <img src="assets/img/user/user-02.jpg" alt="img" className="img-fluid rounded-circle" />
          </div>
          <h6 className="mb-0">Ronald Richard</h6>
        </div>
      </div>
      <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-dashboard.html" className="mb-3 pb-3">
        <div className="mb-3 position-relative">
          <label className="form-label">Password <span className="text-danger"> *</span></label>
          <div className="position-relative">
            <input type="password" className="pass-inputa form-control" />
            <span className="isax toggle-passworda isax-eye-slash text-gray-7 fs-14" />
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-secondary btn-lg" type="submit">Sign In<i className="isax isax-arrow-right-3 ms-1" /></button>
        </div>
      </form>
    </div>
  </div>
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default LockScreen