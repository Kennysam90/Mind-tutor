import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

const ContactUs = () => {
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
          <h2 className="breadcrumb-title mb-2">Contact Us</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  <section className="contact-sec">
    <div className="container">
      <div className="contact-info">
        <div className="row row-gap-3">
          {/* Address info */}
          <div className="col-lg-4 col-md-6">
            <div className="card card-body border p-sm-4">
              <div className="d-flex align-items-center">
                <div className="contact-icon">
                  <span className="bg-primary fs-24 rounded-3 d-flex justify-content-center align-items-center">
                    <i className="isax isax-location5 text-white" />
                  </span>
                </div>
                <div className="ps-3">
                  <h5 className="mb-1">Address</h5>
                  <address className="mb-0">1364 Still Water Dr, AK 99801.</address>
                </div>
              </div>
            </div>
          </div>
          {/* Phone info */}
          <div className="col-lg-4 col-md-6">
            <div className="card card-body border p-sm-4">
              <div className="d-flex align-items-center">
                <div className="contact-icon">
                  <span className="bg-primary fs-24 rounded-3 d-flex justify-content-center align-items-center">
                    <i className="isax isax-headphone5 text-white" />
                  </span>
                </div>
                <div className="ps-3">
                  <h5 className="mb-1">Phone</h5>
                  <p className="mb-0">
                    <a href="#" className="text-gray-5 text-primary-hover text-decoration-underline mb-0">+1 (907) 789-7623</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Email info */}
          <div className="col-lg-4 col-md-6">
            <div className="card card-body border p-sm-4">
              <div className="d-flex align-items-center">
                <div className="contact-icon">
                  <span className="bg-primary fs-24 rounded-3 d-flex justify-content-center align-items-center">
                    <i className="isax isax-message5 text-white" />
                  </span>
                </div>
                <div className="ps-3">
                  <h5 className="mb-1">E-mail Address</h5>
                  <p className="mb-0">
                    <a href="#" className="text-gray-5 text-primary-hover text-decoration-underline mb-0"><span className="__cf_email__" data-cfemail="99faf6f7edf8faedd9fce1f8f4e9f5fcb7faf6f4">[email&nbsp;protected]</span></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light border rounded-4 p-4 p-sm-5 p-md-6">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-details">
              <div className="section-header">
                <span className="section-badge">
                  Contact Us
                </span>
                <h2>Get in touch with us today</h2>
                <p>Get in touch with us to explore how our LMS solution can enhance your e-learning experience. We're here to help you build a seamless and engaging learning platform!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-0">
              <div className="card-body p-4 p-sm-5 p-md-6">
                <h4 className="mb-3">Send Us Message</h4>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label">Name <span className="ms-1 text-danger">*</span>
                        </label>
                        <input type="text" className="form-control form-control-lg" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label">Email Address <span className="ms-1 text-danger">*</span>
                        </label>
                        <input type="text" className="form-control form-control-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control form-control-lg" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label">Subject</label>
                        <input type="text" className="form-control form-control-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Your Message</label>
                    <textarea className="form-control form-control-lg" rows={4} defaultValue={""} />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-secondary btn-lg">Send Enquiry</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map rounded-4 overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40686.62603646482!2d-74.03208057194338!3d40.71688115980892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1738829223631!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </section>
  {/* Footer */}
  <Footer />
  {/* /Footer */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default ContactUs