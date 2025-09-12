import React from 'react'
import Header from '../../Component/Header'

const CourseList = () => {
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
                <h2 className="breadcrumb-title mb-2">Course Detail</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Course Detail</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Course detail */}
        <section className="course-details-two">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card bg-light">
                  <div className="card-body d-lg-flex align-items-center">
                    <div className="position-relative">
                      <a href="https://www.youtube.com/embed/1trvO6dqQUI" id="openVideoBtn" target="_blank">
                        <img className="img-fluid rounded-2" src="assets/img/course/video-bg.jpg" alt="img" />
                        <div className="play-icon">
                          <i className="ti ti-player-play-filled fs-28" />
                        </div>
                      </a>
                    </div>
                    <div id="videoModal">
                      <div className="modal-content1">
                        <span className="close-btn" id="closeModal">×</span>
                        <iframe id="youtubeIframe" allowFullScreen />
                      </div>
                    </div>
                    <div className="w-100 ps-lg-4">
                      <h3 className="mb-2">The Complete Web Developer Course 2.0</h3>
                      <p className="fs-14 mb-3">Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python</p>
                      <div className="d-flex align-items-center gap-2 gap-sm-3 gap-xl-4 flex-wrap my-3 my-sm-0">
                        <p className="fw-medium d-flex align-items-center mb-0"><img className="me-2" src="assets/img/icons/book.svg" alt="img" />12+ Lesson</p>
                        <p className="fw-medium d-flex align-items-center mb-0"><img className="me-2" src="assets/img/icons/timer-start.svg" alt="img" />9hr 30min</p>
                        <p className="fw-medium d-flex align-items-center mb-0"><img className="me-2" src="assets/img/icons/people.svg" alt="img" />32 students enrolled</p>
                        <span className="badge badge-sm rounded-pill bg-warning fs-12">Web Development</span>
                      </div>
                      <div className="d-sm-flex align-items-center justify-content-sm-between mt-3">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-lg">
                            <img className="rounded-circle" src="assets/img/avatar/avatar10.jpg" alt="img" />
                          </div>
                          <div className="ms-2">
                            <h5 className="fs-18 fw-semibold"><a href="instructor-details.html">Nicole Brown</a></h5>
                            <p className="fs-14">Instructor</p>
                          </div>
                        </div>
                        <div className="d-flex mt-sm-0 mt-2 align-items-center">
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-gray-1 me-1" />
                          <p className=" fs-14"><span className="text-gray-9">4.0</span> (15) </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-8">
                <div>
                  <img src="assets/img/course/course-details-two-2.jpg" alt="img" className="img-fluid mb-4" />
                </div>
                <div className="course-page-content pt-0">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="mb-3">Overview</h5>
                      <h6 className="mb-2">Course Description</h6>
                      <p>Embark on a transformative journey into AI with Mike Wheeler, your guide in this Udemy Best Seller course on ChatGPT and Prompt Engineering. As an experience instructor who has taught well over 300,000 students, Mike unveils the secrets of developing your own custom GPTs, ensuring your skills shine in the thriving digital marketplace. </p>
                      <p>This course will get your familiar with Generative AI&nbsp;and the effective use of ChatGPT and is perfect for the beginner. You will also learn advanced prompting techniques to take your Prompt Engineering skills to the next level!</p>
                      <h6 className="mb-2">What you'll learn</h6>
                      <ul className="custom-list mb-3">
                        <li className="list-item">Become a UX designer</li>
                        <li className="list-item">You will be able to add UX designer to your CV</li>
                        <li className="list-item">Become a UI designer</li>
                        <li className="list-item">Build &amp; test a full website design.</li>
                        <li className="list-item">Build &amp; test a full mobile app.</li>
                      </ul>
                      <h6 className="mb-2">Requirements</h6>
                      <ul className="custom-list mb-0">
                        <li className="list-item">You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.</li>
                        <li className="list-item">No previous design experience is needed.</li>
                        <li className="list-item">No previous Adobe XD skills are needed.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between flex-wrap">
                        <h5 className="subs-title mb-2 mb-sm-3">Course Content</h5>
                        <h6 className="fs-16 fw-medium text-gray-7 mb-3">92 Lectures <span className="text-secondary">10:56:11</span></h6>
                      </div>
                      <div className="accordion accordion-customicon1 accordions-items-seperate p-0" id="accordioncustomicon1Example">
                        <div className="accordion-item" data-aos="fade-up">
                          <h2 className="accordion-header" id="headingcustomicon1One">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1One" aria-expanded="false" aria-controls="collapsecustomicon1One">
                              Getting Started <i className="fa-solid fa-chevron-down" />
                            </button>
                          </h2>
                          <div id="collapsecustomicon1One" className="accordion-collapse collapse" aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example">
                            <div className="accordion-body p-0">
                              <ul>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.1 Introduction to the User Experience Course</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.2 Exercise: Your first design challenge</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.3 How to solve the previous exercise</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.4 Find out why smart objects are amazing</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.5 How to use text layers effectively</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-up" data-aos-delay={250}>
                          <h2 className="accordion-header" id="headingcustomicon1Two">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Two" aria-expanded="false" aria-controls="collapsecustomicon1Two">
                              The Brief<i className="fa-solid fa-chevron-down" />
                            </button>
                          </h2>
                          <div id="collapsecustomicon1Two" className="accordion-collapse collapse" aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">
                            <div className="accordion-body p-0">
                              <ul>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.1 Introduction to the User Experience Course</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.2 Exercise: Your first design challenge</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.3 How to solve the previous exercise</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.4 Find out why smart objects are amazing</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.5 How to use text layers effectively</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-up" data-aos-delay={300}>
                          <h2 className="accordion-header" id="headingcustomicon1Three">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Three" aria-expanded="false" aria-controls="collapsecustomicon1Three">
                              Wireframing Low Fidelity<i className="fa-solid fa-chevron-down" />
                            </button>
                          </h2>
                          <div id="collapsecustomicon1Three" className="accordion-collapse collapse" aria-labelledby="headingcustomicon1Three" data-bs-parent="#accordioncustomicon1Example">
                            <div className="accordion-body p-0">
                              <ul>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.1 Introduction to the User Experience Course</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.2 Exercise: Your first design challenge</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.3 How to solve the previous exercise</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.4 Find out why smart objects are amazing</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.5 How to use text layers effectively</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-0" data-aos="fade-up" data-aos-delay={350}>
                          <h2 className="accordion-header" id="headingcustomicon1Four">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Four" aria-expanded="false" aria-controls="collapsecustomicon1Four">
                              Type, Color &amp; Icon Introduction<i className="fa-solid fa-chevron-down" />
                            </button>
                          </h2>
                          <div id="collapsecustomicon1Four" className="accordion-collapse collapse" aria-labelledby="headingcustomicon1Four" data-bs-parent="#accordioncustomicon1Example">
                            <div className="accordion-body p-0">
                              <ul>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.1 Introduction to the User Experience Course</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.2 Exercise: Your first design challenge</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.3 How to solve the previous exercise</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.4 Find out why smart objects are amazing</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                                <li className="p-4 px-3 pb-0 d-flex justify-content-between">
                                  <p className="mb-0"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />Lecture1.5 How to use text layers effectively</p>   
                                  <div className="d-flex gap-xl-5 gap-3">
                                    <a href="#" className="preview-link">Preview</a>
                                    <p className="mb-0">02:53</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="subs-title mb-4">About the instructor</h5>
                      <div className="d-flex align-items-center justify-content-between mt-4 gap-2 flex-wrap">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-lg">
                            <img className="rounded-circle" src="assets/img/avatar/avatar10.jpg" alt="img" />
                          </div>
                          <div className="ms-2">
                            <a href="instructor-details.html" className="name-link">Nicole Brown</a>
                            <p className="mb-0 fs-14">UX/UI Designer</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-1" />
                          <i className="fa-solid fa-star text-warning me-2" />
                          <p className="mb-0 fs-14">4.5</p>
                        </div>
                      </div>
                      <div className="course-info align-items-center d-flex gap-2 gap-xl-3 mt-3 mb-3 flex-wrap">
                        <p className="fw-medium d-flex align-items-center fs-14 mb-0"><img className="me-2" src="assets/img/icons/play2.svg" alt="img" />5 Courses</p>
                        <p className="fw-medium d-flex align-items-center fs-14 mb-0"><img className="me-2" src="assets/img/icons/book2.svg" alt="img" />12+ Lesson</p>
                        <p className="fw-medium d-flex align-items-center fs-14 mb-0"><img className="me-2" src="assets/img/icons/timer-start2.svg" alt="img" />9hr 30min</p>
                        <p className="fw-medium d-flex align-items-center fs-14 mb-0"><img className="me-2" src="assets/img/icons/people.svg" alt="img" />270,866 students enrolled</p>
                      </div>
                      <p>UI/UX Designer, with 7+ Years Experience. Guarantee of High Quality Work.</p>
                      <h6 className="fs-16 mb-2">Skills: </h6>
                      <p>Web Design, UI Design, UX/UI Design, Mobile Design, User Interface Design, Sketch, Photoshop, GUI, Html, Css, Grid Systems, Typography, Minimal, Template, English, Bootstrap, Responsive Web Design, Pixel Perfect, Graphic Design, Corporate, Creative, Flat, Luxury and much more.</p>
                      <h6 className="fs-16 mb-2">Available for:</h6>
                      <ol className="ordered-list">
                        <li className="list-items">Full Time Office Work</li>
                        <li className="list-items">Remote Work</li>
                        <li className="list-items">Freelance</li>
                        <li className="list-items">Contract</li>
                        <li className="list-items mb-0">Worldwide</li>
                      </ol>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="subs-title mb-3">Post A comment</h5>
                      <form className="course-details-form">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <label className="form-label">Name</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <label className="form-label">Email</label>
                              <input className="form-control" type="email" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-3">
                              <label className="form-label">Subject</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-3">
                              <label className="form-label">Comments</label>
                              <textarea className="form-control" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn post-btn">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="course-sidebar-sec mt-0">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-success fs-30">FREE</h2>
                        <p className="fs-14 mb-0"><span className="text-decoration-line-through me-2">$99.00</span>50% off</p>
                      </div>
                      <div className="d-flex justify-content-between gap-3 wishlist-btns">
                        <a className="btn d-flex btn-wish" href="student-wishlist.html"><i className="isax isax-heart me-1 fs-18" />Add to Wishlist</a>
                        <a className="btn d-flex btn-wish" href="#"><i className="ti ti-share me-1 fs-18" />Share</a>
                      </div>
                      <a href="cart.html" className="btn btn-primary w-100 mt-3 btn-enroll">Enroll Now</a>
                    </div>
                  </div>
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="subs-title mb-4">Includes</h5>
                      <p className="mb-3"><img className="me-2" src="assets/img/icons/play.svg" alt="img" />11 hours on-demand video</p>
                      <p className="mb-3"><img className="me-2" src="assets/img/icons/import.svg" alt="img" />69 downloadable resources</p>
                      <p className="mb-3"><img className="me-2" src="assets/img/icons/key.svg" alt="img" />Full lifetime access</p>
                      <p className="mb-3"><img className="me-2" src="assets/img/icons/monitor-mobbile.svg" alt="img" />Access on mobile and TV</p>
                      <p className="mb-3"><img className="me-2" src="assets/img/icons/cloud-lightning.svg" alt="img" />Assignments</p>
                      <p className="mb-0"><img className="me-2" src="assets/img/icons/teacher.svg" alt="img" />Certificate of Completion</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body cou-features">
                      <h5 className="subs-title">Course Features</h5>
                      <ul>
                        <li><p className="mb-0"><img className="me-2" src="assets/img/icons/people2.svg" alt="img" />Enrolled: 32 students</p></li>
                        <li><p className="mb-0"><img className="me-2" src="assets/img/icons/timer-start3.svg" alt="img" />Duration: 20 hours</p></li>
                        <li><p className="mb-0"><img className="me-2" src="assets/img/icons/note.svg" alt="img" />Chapters: 15</p></li>
                        <li><p className="mb-0"><img className="me-2" src="assets/img/icons/play3.svg" alt="img" />Video: 12 hours</p></li>
                        <li><p className="mb-0"><img className="me-2" src="assets/img/icons/chart.svg" alt="img" />Level: Beginner</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Course detail */}
        {/* Footer */}
        <footer className="footer">
          <div className="footer-bg">
            <img src="assets/img/bg/footer-bg-01.png" className="footer-bg-1" alt />
            <img src="assets/img/bg/footer-bg-02.png" className="footer-bg-2" alt />
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row row-gap-4">
                <div className="col-lg-4">
                  <div className="footer-about">
                    <div className="footer-logo">
                      <img src="assets/img/logo.svg" alt />
                    </div>
                    <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>
                    <div className="d-flex align-items-center">
                      <a href="#" className="me-2"><img src="assets/img/icon/appstore.svg" alt /></a>
                      <a href="#"><img src="assets/img/icon/googleplay.svg" alt /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row row-gap-4">
                    <div className="col-lg-3">
                      <div className="footer-widget footer-menu">
                        <h5 className="footer-title">For Instructor</h5>
                        <ul>
                          <li><a href="course-grid.html">Search Mentors</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="register.html">Register</a></li>
                          <li><a href="course-list.html">Booking</a></li>
                          <li><a href="student-dashboard.html">Students Dashboard</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="footer-widget footer-menu">
                        <h5 className="footer-title">For Student</h5>
                        <ul>
                          <li><a href="javascript:void(0);">Appointments</a></li>
                          <li><a href="instructor-message.html">Chat</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="register.html">Register</a></li>
                          <li><a href="instructor-dashboard.html">Instructor Dashboard</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="footer-widget footer-contact">
                        <h5 className="footer-title">Newsletter</h5>
                        <div className="subscribe-input">
                          <form action="javascript:void(0);">
                            <input type="email" className="form-control" placeholder="Enter your Email Address" />
                            <button type="submit" className="btn btn-primary btn-sm inline-flex align-items-center"><i className="isax isax-send-2 me-1" />Subscribe</button>
                          </form>
                        </div>
                        <div className="footer-contact-info">
                          <div className="footer-address d-flex align-items-center">
                            <img src="assets/img/icon/icon-20.svg" alt="Img" className="img-fluid me-2" />
                            <p> 3556  Beech Street, San Francisco,<br /> California, CA 94108 </p>
                          </div>
                          <div className="footer-address d-flex align-items-center">
                            <img src="assets/img/icon/icon-19.svg" alt="Img" className="img-fluid me-2" />
                            <p><a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8aeef8efebe7f9e6e7f9caeff2ebe7fae6efa4e9e5e7">[email&nbsp;protected]</a></p>
                          </div>
                          <div className="footer-address d-flex align-items-center">
                            <img src="assets/img/icon/icon-21.svg" alt="Img" className="img-fluid me-2" />
                            <p>+19 123-456-7890</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row row-gap-2">
                <div className="col-md-6">
                  <div className="text-center text-md-start">
                    <p className="text-white">Copyright © 2025 DreamsLMS. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <ul className="d-flex align-items-center justify-content-center justify-content-md-end footer-link">
                      <li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
                      <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* /Footer */}
      </div>
      {/* /Main Wrapper */}


    </>
  )
}

export default CourseList