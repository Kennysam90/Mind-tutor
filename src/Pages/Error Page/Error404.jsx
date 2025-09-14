import React from 'react'

const Error404 = () => {
  return (
    <>
      {/* Main Wrapper */}
<div className="main-wrapper">
  <div className="error-box">
    <img src="assets/img/error/img-01.svg" alt="img" className="img-fluid bg-01" />
    <img src="assets/img/error/img-02.svg" alt="img" className="img-fluid bg-02" />
    <img src="assets/img/error/img-03.svg" alt="img" className="img-fluid bg-03" />
    <img src="assets/img/error/img-04.svg" alt="img" className="img-fluid bg-04" />
    <img src="assets/img/error/img-05.svg" alt="img" className="img-fluid bg-05" />
    <img src="assets/img/error/img-06.svg" alt="img" className="img-fluid bg-06" />
    <div className="error-logo">
      <a href="index.html">
        <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
      </a>
    </div>
    <div className="error-box-img">
      <img src="assets/img/error/error-01.svg" alt="Img" className="img-fluid" />
    </div>
    <h3 className="h2 mb-3"> Oh No! Error <span className="text-secondary ms-1">404</span></h3>
    <p className="h4 font-weight-normal">This page you requested counld not found. May the force be with you!</p>
    <a href="index.html" className="btn back-to-home-btn"><i className="isax isax-arrow-left-2 me-1" /> Back to Home</a>
  </div>
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default Error404