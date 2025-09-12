import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

const AboutUs = () => {
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
          <h2 className="breadcrumb-title mb-2">About Us</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* about */}
  <section className="about-section-two pb-0">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="p-3 p-sm-4 position-relative">
            <div className="position-absolute top-0 start-0 z-n1">
              <img src="assets/img/shapes/shape-1.svg" alt="img" />
            </div>
            <div className="position-absolute bottom-0 end-0 z-n1">
              <img src="assets/img/shapes/shape-2.svg" alt="img" />
            </div>
            <div className="position-absolute bottom-0 start-0 mb-md-5 ms-md-n5">
              <img src="assets/img/icons/icon-1.svg" alt="img" />
            </div>
            <img className="img-fluid img-radius" src="assets/img/about/about-2.svg" alt="img" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ps-0 ps-lg-2 pt-4 pt-lg-0 ps-xl-5">
            <div className="section-header">
              <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">About</span>
              <h2>Empowering Learning, Inspiring Growth</h2>
              <p>At DreamsLMS, we make education accessible to all with interactive courses and expert-led content. Learn anytime, anywhere, and achieve your goals seamlessly.</p>
            </div>
            <div className="d-flex align-items-center about-us-banner">
              <div>
                <span className="bg-primary-transparent rounded-3 p-2 about-icon d-flex justify-content-center align-items-center">
                  <i className="isax isax-book-1 fs-24" />
                </span>
              </div>
              <div className="ps-3">
                <h6 className="mb-2">Learn from anywhere</h6>
                <p>Learning from anywhere has become a transform aspect of modern education, allowing individuals.</p>
              </div>
            </div>
            <div className="d-flex align-items-center about-us-banner">
              <div>
                <span className="bg-secondary-transparent rounded-3 p-2 about-icon d-flex justify-content-center align-items-center">
                  <i className="isax isax-bookmark5 fs-24" />
                </span>
              </div>
              <div className="ps-3">
                <h6 className="mb-2">Expert Mentors</h6>
                <p>Expert mentors are invaluable assets in any field, providing seasoned guidance knowledge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about */}
  {/* benefits */}
  <section className="benefit-section">
    <div className="container">
      <div className="section-header text-center">
        <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Our Benefits</span>
        <h2>Master the Skills to Drive your Career</h2>
        <p>The right course, guided by an expert mentor, can provide invaluable insights, practical skills.</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <div className="position-absolute top-0 end-0 mt-n3 me-n4">
                <img src="assets/img/shapes/bg-1.png" alt="img" />
              </div>
              <div className="p-4 rounded-pill bg-primary-transparent d-inline-flex">
                <i className="isax isax-book-1 fs-24" />
              </div>
              <h5 className="mt-3 mb-1">Flexible Learning</h5>
              <p>We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <div className="position-absolute top-0 end-0 mt-n3 me-n4">
                <img src="assets/img/shapes/bg-2.png" alt="img" />
              </div>
              <div className="p-4 rounded-pill bg-secondary-transparent d-inline-flex">
                <i className="isax isax-bookmark5 fs-24" />
              </div>
              <h5 className="mt-3 mb-1">Lifetime Access</h5>
              <p>When you enroll in our courses, you’re not just signing up for a temporary learning to experience you’re making.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <div className="position-absolute top-0 end-0 mt-n3 me-n4">
                <img src="assets/img/shapes/bg-3.png" alt="img" />
              </div>
              <div className="p-4 rounded-pill bg-skyblue-transparent d-inline-flex">
                <i className="isax isax-chart-26 fs-24" />
              </div>
              <h5 className="mt-3 mb-1">Expert Instruction</h5>
              <p>Our instructors are seasoned professionals with years of experience in their respective fields &amp; Experts advice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* benefits */}
  {/* institutions */}
  <section className="client-section">
    <div className="container">
      <h6 className="fw-medium text-center mb-4">Trusted by <span className="text-decoration-underline text-secondary">20+</span> Institutions Around the World</h6>
      <div className="institutions-slider lazy slider">
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/01.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/02.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/03.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/04.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/05.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/06.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/07.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/02.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/03.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/04.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/05.svg" alt="img" />
        </div>
        <div className="institutions-items p-1">
          <img className="img-fluid" src="assets/img/client/06.svg" alt="img" />
        </div>
      </div>
    </div>
  </section>
  {/* institutions */}
  {/* counter */}
  <section className="counter-sec">
    <div className="container">
      <div className="row gy-3">
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 mb-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="counter-icon">
                  <img src="assets/img/icons/counter-icon1.svg" alt="img" />
                </div>
                <div className="count-content">
                  <h4 className="text-info"><span className="count-digit">10</span>K</h4>
                  <p>Online Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 mb-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="counter-icon">
                  <img src="assets/img/icons/counter-icon2.svg" alt="img" />
                </div>
                <div className="count-content">
                  <h4 className="text-warning"><span className="count-digit">200</span>+</h4>
                  <p>Expert Tutors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 mb-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="counter-icon">
                  <img src="assets/img/icons/counter-icon3.svg" alt="img" />
                </div>
                <div className="count-content">
                  <h4 className="text-skyblue"><span className="count-digit">6</span>K+</h4>
                  <p>Certified Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 mb-0">
            <div className="card-body d-flex align-items-center">
              <div className="counter-icon">
                <img src="assets/img/icons/counter-icon4.svg" alt="img" />
              </div>
              <div className="count-content">
                <h4 className="text-lightgreen"><span className="count-digit">60</span>K+</h4>
                <p>Online Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* counter */}
  {/* testimonials */}
  <section className="testimonials-section text-center">
    <div className="container">
      <div className="section-header text-center">
        <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Featured Instructors</span>
        <h2>Top Class &amp; Professional Instructors</h2>
        <p>Words from Those Who’ve Experienced Real Growth.</p>
      </div>
      <div className="testimonials-slider lazy mt-4">
        <div>
          <div className="testimonials-item rounded-3 bg-white">
            <div className="position-relative d-inline-flex mb-2">
              <div className="avatar rounded-circle avatar-xxl border border-white border-3">
                <a href="instructor-details.html"><img className="img-fluid rounded-circle" src="assets/img/user/user-41.jpg" alt="img" /></a>
              </div>
              <i className="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1" />
            </div>
            <h6 className="mb-1"><a href="instructor-details.html">Brenda Slaton</a></h6>
            <p className="fs-14 mb-3">Designer</p>
            <p className="mb-3 text-truncate line-clamb-2">This mentor helped me understand concepts that I had been struggling with for weeks.</p>
            <div>
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
            </div>
          </div>
        </div>
        <div>
          <div className="testimonials-item rounded-3 bg-white">
            <div className="position-relative d-inline-flex mb-2">
              <div className="avatar rounded-circle avatar-xxl border border-white border-3">
                <a href="instructor-details.html"><img className="img-fluid rounded-circle" src="assets/img/user/user-42.jpg" alt="img" /></a>
              </div>
              <i className="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1" />
            </div>
            <h6 className="mb-1"><a href="instructor-details.html">Adrian Dennis</a></h6>
            <p className="fs-14 mb-3">Developer</p>
            <p className="mb-3 text-truncate line-clamb-2">I’ve learned so much from my mentor’s personal experience.</p>
            <div>
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
            </div>
          </div>
        </div>
        <div>
          <div className="testimonials-item rounded-3 bg-white">
            <div className="position-relative d-inline-flex mb-2">
              <div className="avatar rounded-circle avatar-xxl border border-white border-3">
                <a href="instructor-details.html"><img className="img-fluid rounded-circle" src="assets/img/user/user-43.jpg" alt="img" /></a>
              </div>
              <i className="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1" />
            </div>
            <h6 className="mb-1"><a href="instructor-details.html">Adrian Coztanza</a></h6>
            <p className="fs-14 mb-3">Architect</p>
            <p className="mb-3 text-truncate line-clamb-2">The advice was useful, but I wish my mentor had been more available for follow-up discussions.</p>
            <div>
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
            </div>
          </div>  
        </div>  
        <div>
          <div className="testimonials-item rounded-3 bg-white">
            <div className="position-relative d-inline-flex mb-2">
              <div className="avatar rounded-circle avatar-xxl border border-white border-3">
                <a href="instructor-details.html"><img className="img-fluid rounded-circle" src="assets/img/user/user-43.jpg" alt="img" /></a>
              </div>
              <i className="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1" />
            </div>
            <h6 className="mb-1"><a href="instructor-details.html">Adrian Coztanza</a></h6>
            <p className="fs-14 mb-3">Architect</p>
            <p className="mb-3 text-truncate line-clamb-2">The advice was useful, but I wish my mentor had been more available for follow-up discussions.</p>
            <div>
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
              <i className="fa-solid fa-star text-warning" />
            </div>
          </div>  
        </div>  
      </div>
    </div>
  </section>
  {/* testimonials */}
  {/* faq */}
  <section className="faq-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 pe-md-5">
          <div className="position-relative">
            <img className="img-fluid rounded-4" src="assets/img/about/about-1.jpg" alt="img" />
            <div className="bg-warning text-center p-3 rounded-5 position-absolute top-0 end-0 z-index-1 d-none d-sm-block my-3 mx-3">
              <i className="isax isax-message-question5 heading-color fs-46" />
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="section-header">
            <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p>Explore detailed answers to the most common questions about our platform.</p>
          </div>
          <div className="faq-content">
            <div className="accordion accordion-customicon1 accordions-items-seperate" id="accordioncustomicon1Example">
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header" id="headingcustomicon1One">
                  <a href="#" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1One" aria-expanded="true" aria-controls="collapsecustomicon1One">
                    What’s DreamLMS want to give you? <i className="isax isax-add fs-20 fw-semibold ms-1" />
                  </a>
                </h2>
                <div id="collapsecustomicon1One" className="accordion-collapse collapse show" aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example">
                  <div className="accordion-body pt-0">
                    <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.</p>                                     
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-up" data-aos-delay={250}>
                <h2 className="accordion-header" id="headingcustomicon1Two">
                  <a href="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Two" aria-expanded="false" aria-controls="collapsecustomicon1One">
                    Why choose us for your education? <i className="isax isax-add fs-20 fw-semibold ms-1" />
                  </a>
                </h2>
                <div id="collapsecustomicon1Two" className="accordion-collapse collapse" aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">
                  <div className="accordion-body pt-0">
                    <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.</p>                                     
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-up" data-aos-delay={250}>
                <h2 className="accordion-header" id="headingcustomicon1Three">
                  <a href="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Three" aria-expanded="false" aria-controls="collapsecustomicon1One">
                    How We Provide Service For you? <i className="isax isax-add fs-20 fw-semibold ms-1" />
                  </a>
                </h2>
                <div id="collapsecustomicon1Three" className="accordion-collapse collapse" aria-labelledby="headingcustomicon1Three" data-bs-parent="#accordioncustomicon1Example">
                  <div className="accordion-body pt-0">
                    <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.</p>                                     
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-up" data-aos-delay={250}>
                <h2 className="accordion-header" id="headingcustomicon1Four">
                  <a href="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Four" aria-expanded="false" aria-controls="collapsecustomicon1One">
                    Do you have a monthly plan? <i className="isax isax-add fs-20 fw-semibold ms-1" />
                  </a>
                </h2>
                <div id="collapsecustomicon1Four" className="accordion-collapse collapse" aria-labelledby="headingcustomicon1Four" data-bs-parent="#accordioncustomicon1Example">
                  <div className="accordion-body pt-0">
                    <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.</p>                                     
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-up" data-aos-delay={250}>
                <h2 className="accordion-header" id="headingcustomicon1Five">
                  <a href="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Five" aria-expanded="false" aria-controls="collapsecustomicon1One">
                    Are you Affordable For Your Course <i className="isax isax-add fs-20 fw-semibold ms-1" />
                  </a>
                </h2>
                <div id="collapsecustomicon1Five" className="accordion-collapse collapse" aria-labelledby="headingcustomicon1Five" data-bs-parent="#accordioncustomicon1Example">
                  <div className="accordion-body pt-0">
                    <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.</p>                                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* faq */}
  {/* Footer */}
 <Footer />
  {/* /Footer */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default AboutUs