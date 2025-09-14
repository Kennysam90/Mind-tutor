import React from 'react'

const ComingSoon = () => {
  return (
    <>
        {/* Main Wrapper */}
<div className="main-wrapper">
  <div className="error-box coming-soon-content">
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
    <div className="coming-soon-topic">
      <h3 className="h2 mb-3">We are Coming<span className="text-secondary ms-1"> Soon!!!</span></h3>
      <p>Stay tuned for something amazing</p>
    </div>
    <ul className="coming-soon-timer">
      <li><span className="days">54</span>days</li>
      <li className="seperate-dot" />
      <li><span className="hours">10</span>Hrs</li>
      <li className="seperate-dot" />
      <li><span className="minutes">47</span>Min</li>
      <li className="seperate-dot" />
      <li><span className="seconds">00</span>Sec</li>
    </ul>
    <div className="error-box-img coming-soon-img">
      <img src="assets/img/error/coming-soon.svg" alt="Img" className="img-fluid" />
    </div>
    <form className="mt-5">
      <b>Notify me when the website is launched</b>
      <div className="bg-white border rounded-2 p-2 mt-2 mb-3">
        <div className="input-group">
          <input className="form-control focus-shadow-none border-0 me-1" type="email" placeholder="Enter your email" />
          <button type="button" className="btn btn-secondary rounded-2 mb-0">Notify Me!</button>
        </div>
      </div>
    </form>
    <div className="d-flex align-items-center justify-content-center">
      <a href="javascript:void(0);" className="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center me-2"><i className="fa-brands fa-facebook-f" /></a>
      <a href="javascript:void(0);" className="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center me-2"><i className="fa-brands fa-instagram" /></a>
      <a href="javascript:void(0);" className="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center me-2"><i className="fa-brands fa-x-twitter" /></a>
      <a href="javascript:void(0);" className="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center"><i className="fa-brands fa-linkedin-in" /></a>
    </div>
  </div>
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default ComingSoon