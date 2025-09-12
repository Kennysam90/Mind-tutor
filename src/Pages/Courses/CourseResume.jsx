import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

const CourseResume = () => {
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
          <h2 className="breadcrumb-title mb-2">Course Resume</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Course Resume</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Course detail */}
  <div className="course-resume">
    <div className="container">
      {/*  */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="course-resume-details-1 d-lg-flex align-items-center mb-3">
            <div className="position-relative cou-resume-image">
              <img className="img-fluid" src="assets/img/course/course-26.jpg" alt="img" />
            </div>
            <div className="cou-resume-content w-100 ps-lg-4">
              <h3 className="mb-2">The Complete Web Developer Course 2.0</h3>
              <p className="mb-3 fs-14">Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python</p>
              <div className="d-flex align-items-center cou-lesson">
                <p className="d-flex align-items-center"><img className="img-fluid" src="assets/img/icons/book3.svg" alt="img" />12+ Lesson</p>
                <p className="d-flex align-items-center"><img className="img-fluid" src="assets/img/icons/timer-start.svg" alt="img" />9hr 30min</p>
                <p className="d-flex align-items-center"><img className="img-fluid" src="assets/img/icons/people3.svg" alt="img" />32 students enrolled</p>
                <span className="badge badge-sm fs-12 rounded-pill bg-warning">Web Development</span>
              </div>
              <a href="#" className="btn btn-secondary d-inline-flex align-items-center"><i className="isax isax-pause-circle5 me-1" /> Resume Course</a>
            </div>
          </div>
          <div className="course-resume-details-2">
            <h5>Course Curriculum</h5>
            <div className="accordion accordion-customicon1 accordions-items-seperate" id="accordioncustomicon1Example">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingcustomicon1One">
                  <a href="#" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1One" aria-expanded="true" aria-controls="collapsecustomicon1One">
                    <span>Introduction of Digital Marketing <small className="d-flex fs-14 text-gray-7 fw-normal mt-1">No of Lecturers : 3</small></span> <i className="isax isax-arrow-circle-up4" />
                  </a>
                </h2>
                <div id="collapsecustomicon1One" className="accordion-collapse collapse show" aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example">
                  <div className="accordion-body pb-0">
                    <p className="mb-2 fs-16">1/3 Completed <span className="float-end text-gray-9 fw-medium">50%</span></p>
                    <div className="progress mb-1 progress-xs progress-animate border-radius-0" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                      <div className="progress-bar bg-secondary" style={{width: '50%'}}>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" /> Introduction <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">2m 10s</span></h6>
                        <div className="d-flex mt-3">
                          <a href="#" className="btn note-btn px-3 me-2"><i className="isax isax-note-2 me-2 fs-10" />Note</a>
                          <a href="#" className="btn play-again-btn px-3 me-2"><i className="isax isax-note-favorite5 me-2 fs-10" />Play Again</a>
                        </div>
                        <div className="d-flex border rounded-2 bg-white p-2 p-sm-3 mt-3 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="badge badge-primary d-inline-flex align-items-center badge-md p-1"><i className="fa-solid fa-circle mx-1 fs-5" />5.20</span>
                            <p className="fw-medium mx-2">Describe SEO Engine</p>
                          </div>
                          <div className="d-flex float-end">
                            <a href="#" className="resume-play-btn"><i className="isax isax-play-circle5" /></a>
                            <a href="#" className="delete-btn"><i className="isax isax-trash" /></a>
                          </div>
                        </div>
                        <div className="d-flex border rounded-2 bg-white p-2 p-sm-3 mt-2 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="badge badge-primary d-inline-flex align-items-center badge-md p-1"><i className="fa-solid fa-circle mx-1 fs-5" />5.20</span>
                            <p className="fw-medium mx-2">Know about all marketing</p>
                          </div>
                          <div className="d-flex float-end">
                            <a href="#" className="resume-play-btn"><i className="isax isax-play-circle5" /></a>
                            <a href="#" className="delete-btn"><i className="isax isax-trash" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" /> What is Digital Marketing What is Digital Marketing <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">2m 10s</span></h6>
                        <div className="d-flex mt-3">
                          <a href="#" className="btn note-btn px-3 me-2"><i className="isax isax-note-2 me-2 fs-10" />Note</a>
                          <a href="#" className="btn play-again-btn px-3 me-2"><i className="isax isax-note-favorite5 me-2 fs-10" />Play Again</a>
                        </div>                                         
                      </li>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-info me-1" />Type of Digital Marketing <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">18m 10s</span></h6>                                        
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingcustomicon1Two">
                  <a href="#" className="accordion-button collapsed"  data-bs-target="#collapsecustomicon1Two" aria-expanded="false" aria-controls="collapsecustomicon1One">
                    <span>Introduction of Digital Marketing <small className="d-flex fs-14 text-gray-7 fw-normal mt-1">No of Lecturers : 3</small></span> <i className="isax isax-arrow-circle-up4" />
                  </a>
                </h2>
                <div id="collapsecustomicon1Two" className="accordion-collapse collapse" aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">
                  <div className="accordion-body pb-0">
                    <p className="mb-1 fs-16">1/3 Completed <span className="float-end text-gray-9 fw-medium">50%</span></p>
                    <div className="progress mb-1 progress-xs progress-animate border-radius-0" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                      <div className="progress-bar bg-secondary" style={{width: '50%'}}>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" /> Introduction <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">2m 10s</span></h6>
                        <div className="d-flex mt-3">
                          <a href="#" className="btn note-btn px-3 me-2"><i className="isax isax-note-2 me-2 fs-10" />Note</a>
                          <a href="#" className="btn play-again-btn px-3 me-2"><i className="isax isax-note-favorite5 me-2 fs-10" />Play Again</a>
                        </div>
                        <div className="d-flex border rounded-2 bg-white p-2 p-sm-3 mt-3 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="badge badge-primary d-inline-flex align-items-center badge-md p-1"><i className="fa-solid fa-circle mx-1 fs-5" />5.20</span>
                            <p className="fw-medium mx-2">Describe SEO Engine</p>
                          </div>
                          <div className="d-flex float-end">
                            <a href="#" className="resume-play-btn"><i className="isax isax-play-circle5" /></a>
                            <a href="#" className="delete-btn"><i className="isax isax-trash" /></a>
                          </div>
                        </div>
                        <div className="d-flex border rounded-2 bg-white p-2 p-sm-3 mt-2 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="badge badge-primary d-inline-flex align-items-center badge-md p-1"><i className="fa-solid fa-circle mx-1 fs-5" />5.20</span>
                            <p className="fw-medium mx-2">Know about all marketing</p>
                          </div>
                          <div className="d-flex float-end">
                            <a href="#" className="resume-play-btn"><i className="isax isax-play-circle5" /></a>
                            <a href="#" className="delete-btn"><i className="isax isax-trash" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" /> What is Digital Marketing What is Digital Marketing <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">2m 10s</span></h6>
                        <div className="d-flex mt-3">
                          <a href="#" className="btn note-btn px-3 me-2"><i className="isax isax-note-2 me-2 fs-10" />Note</a>
                          <a href="#" className="btn play-again-btn px-3 me-2"><i className="isax isax-note-favorite5 me-2 fs-10" />Play Again</a>
                        </div>                                         
                      </li>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" />Type of Digital Marketing <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">18m 10s</span></h6>                                        
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="card">
        <div className="card-body">
          <div className="course-resume-details-1 d-lg-flex align-items-center mb-3">
            <div className="position-relative cou-resume-image">
              <img className="img-fluid" src="assets/img/course/course-03.jpg" alt="img" />
            </div>
            <div className="cou-resume-content w-100 ps-lg-4">
              <h3 className="mb-2">Sketch from A to Z (2024): Become an app designer</h3>
              <p className="mb-2 fs-14">Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python</p>
              <div className="d-flex align-items-center cou-lesson">
                <p className="d-flex align-items-center"><img className="img-fluid" src="assets/img/icons/book3.svg" alt="img" />12+ Lesson</p>
                <p className="d-flex align-items-center"><img className="img-fluid" src="assets/img/icons/timer-start.svg" alt="img" />9hr 30min</p>
                <p className="d-flex align-items-center"><img className="img-fluid" src="assets/img/icons/people3.svg" alt="img" />32 students enrolled</p>
                <span className="badge badge-sm fs-12 rounded-pill bg-warning">Web Development</span>
              </div>
              <a href="#" className="btn btn-secondary"><i className="isax isax-pause-circle5 me-1" /> Resume Course</a>
            </div>
          </div>
          <div className="course-resume-details-2">
            <h5>Course Curriculum</h5>
            <div className="accordion accordion-customicon2 accordions-items-seperate" id="accordioncustomicon2Example">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingcustomicon2One">
                  <a href="#" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon2One" aria-expanded="true" aria-controls="collapsecustomicon2One">
                    <span>Introduction of Digital Marketing <small className="d-flex fs-14 text-gray-7 fw-normal mt-1">No of Lecturers : 3</small></span> <i className="isax isax-arrow-circle-up4" />
                  </a>
                </h2>
                <div id="collapsecustomicon2One" className="accordion-collapse collapse show" aria-labelledby="headingcustomicon2One" data-bs-parent="#accordioncustomicon2Example">
                  <div className="accordion-body pb-0">
                    <p className="mb-1 fs-16">1/3 Completed <span className="float-end text-gray-9 fw-medium">50%</span></p>
                    <div className="progress mb-1 progress-xs progress-animate border-radius-0" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                      <div className="progress-bar bg-secondary" style={{width: '50%'}}>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" /> Introduction <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">2m 10s</span></h6>
                        <div className="d-flex mt-3">
                          <a href="#" className="btn note-btn px-3 me-2"><i className="isax isax-note-2 me-2 fs-10" />Note</a>
                          <a href="#" className="btn play-again-btn px-3 me-2"><i className="isax isax-note-favorite5 me-2 fs-10" />Play Again</a>
                        </div>
                        <div className="d-flex border rounded-2 bg-white p-2 p-sm-3 mt-3 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="badge badge-primary d-inline-flex align-items-center badge-md p-1"><i className="fa-solid fa-circle mx-1 fs-5" />5.20</span>
                            <p className="fw-medium mx-2">Describe SEO Engine</p>
                          </div>
                          <div className="d-flex float-end">
                            <a href="#" className="resume-play-btn"><i className="isax isax-play-circle5" /></a>
                            <a href="#" className="delete-btn"><i className="isax isax-trash" /></a>
                          </div>
                        </div>
                        <div className="d-flex border rounded-2 bg-white p-2 p-sm-3 mt-2 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="badge badge-primary d-inline-flex align-items-center badge-md p-1"><i className="fa-solid fa-circle mx-1 fs-5" />5.20</span>
                            <p className="fw-medium mx-2">Know about all marketing</p>
                          </div>
                          <div className="d-flex float-end">
                            <a href="#" className="resume-play-btn"><i className="isax isax-play-circle5" /></a>
                            <a href="#" className="delete-btn"><i className="isax isax-trash" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" /> What is Digital Marketing What is Digital Marketing <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">2m 10s</span></h6>
                        <div className="d-flex mt-3">
                          <a href="#" className="btn note-btn px-3 me-2"><i className="isax isax-note-2 me-2 fs-10" />Note</a>
                          <a href="#" className="btn play-again-btn px-3 me-2"><i className="isax isax-note-favorite5 me-2 fs-10" />Play Again</a>
                        </div>                                         
                      </li>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" />Type of Digital Marketing <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">18m 10s</span></h6>                                        
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingcustomicon2Two">
                  <a href="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon2Two" aria-expanded="false" aria-controls="collapsecustomicon2One">
                    <span>Introduction of Digital Marketing <small className="d-flex fs-14 text-gray-7 fw-normal mt-1">No of Lecturers : 3</small></span> <i className="isax isax-arrow-circle-up4" />
                  </a>
                </h2>
                <div id="collapsecustomicon2Two" className="accordion-collapse collapse" aria-labelledby="headingcustomicon2Two" data-bs-parent="#accordioncustomicon2Example">
                  <div className="accordion-body pb-0">
                    <p className="mb-1 fs-16">1/3 Completed <span className="float-end text-gray-9 fw-medium">50%</span></p>
                    <div className="progress mb-1 progress-xs progress-animate border-radius-0" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                      <div className="progress-bar bg-secondary" style={{width: '50%'}}>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" /> Introduction <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">2m 10s</span></h6>
                        <div className="d-flex mt-3">
                          <a href="#" className="btn note-btn px-3 me-2"><i className="isax isax-note-2 me-2 fs-10" />Note</a>
                          <a href="#" className="btn play-again-btn px-3 me-2"><i className="isax isax-note-favorite5 me-2 fs-10" />Play Again</a>
                        </div>
                        <div className="d-flex border rounded-2 bg-white p-2 p-sm-3 mt-3 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="badge badge-primary d-inline-flex align-items-center badge-md p-1"><i className="fa-solid fa-circle mx-1 fs-5" />5.20</span>
                            <p className="fw-medium mx-2">Describe SEO Engine</p>
                          </div>
                          <div className="d-flex float-end">
                            <a href="#" className="resume-play-btn"><i className="isax isax-play-circle5" /></a>
                            <a href="#" className="delete-btn"><i className="isax isax-trash" /></a>
                          </div>
                        </div>
                        <div className="d-flex border rounded-2 bg-white p-2 p-sm-3 mt-2 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="badge badge-primary d-inline-flex align-items-center badge-md p-1"><i className="fa-solid fa-circle mx-1 fs-5" />5.20</span>
                            <p className="fw-medium mx-2">Know about all marketing</p>
                          </div>
                          <div className="d-flex float-end">
                            <a href="#" className="resume-play-btn"><i className="isax isax-play-circle5" /></a>
                            <a href="#" className="delete-btn"><i className="isax isax-trash" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" /> What is Digital Marketing What is Digital Marketing <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">2m 10s</span></h6>
                        <div className="d-flex mt-3">
                          <a href="#" className="btn note-btn px-3 me-2"><i className="isax isax-note-2 me-2 fs-10" />Note</a>
                          <a href="#" className="btn play-again-btn px-3 me-2"><i className="isax isax-note-favorite5 me-2 fs-10" />Play Again</a>
                        </div>                                         
                      </li>
                      <li>
                        <h6 className="d-flex align-items-center"><i className="isax isax-play-circle5 fs-24 text-success me-1" />Type of Digital Marketing <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">18m 10s</span></h6>                                        
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Course detail */}
  {/* Footer */}
  <Footer />
  {/* /Footer */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default CourseResume