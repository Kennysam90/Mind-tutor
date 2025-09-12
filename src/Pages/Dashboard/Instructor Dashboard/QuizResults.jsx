import React from 'react'
import Header from '../../../Component/Header'
import Footer from '../../../Component/Footer'
import TutorSidebar from '../../../Component/TutorSidebar'

const QuizResults = () => {
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
          <h2 className="breadcrumb-title mb-2">Quiz Results</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Quiz Results</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  <div className="content">
    <div className="container">
      <div className="instructor-profile">
        <div className="instructor-profile-bg">
          <img src="assets/img/bg/card-bg-01.png" className="instructor-profile-bg-1" alt />
        </div>
        <div className="row align-items-center row-gap-3">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <span className="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative">
                <img src="assets/img/user/user-01.jpg" alt="img" />
                <span className="verify-tick"><i className="isax isax-verify5" /></span>
              </span>
              <div>
                <h5 className="mb-1 text-white d-inline-flex align-items-center">Eugene Andre<a href="instructor-profile.html" className="link-light fs-16 ms-2"><i className="isax isax-edit-2" /></a></h5>
                <p className="text-light">Instructor</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">
              <a href="add-course.html" className="btn btn-white rounded-pill">Add New Course</a>
              <a href="student-dashboard.html" className="btn btn-secondary rounded-pill">Student Dashboard</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Sidebar */}
        <TutorSidebar />
        {/* /Sidebar */}
        <div className="col-lg-9">
          <h5 className="page-title">Quiz Results</h5>
          <div className="card">
            <div className="card-body">
              <div className="d-sm-flex align-items-center">
                <div className="quiz-img me-3 mb-2 mb-sm-0">
                  <img src="assets/img/students/quiz.jpg" alt />
                </div>
                <div>
                  <h5 className="mb-2"><a href="#">Information About UI/UX Design Degree</a></h5>
                  <div className="question-info d-flex align-items-center">
                    <p className="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i className="isax isax-message-question5 text-primary-soft me-2" />25 Questions</p>
                    <p className="d-flex align-items-center fs-14 mb-0"><i className="isax isax-clock5 text-secondary-soft me-2" />30 Minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card bg-secondary-transparent border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-1 fw-normal text-gray-5">Total Particpants</h6>
                      <span className="fs-20 fw-bold mb-1 d-block text-gray-9">30</span>
                    </div>
                    <div className="icon-box bg-soft-secondary">
                      <img src="assets/img/icon/user-tick.svg" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-info-transparent border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-1 fw-normal text-gray-5">Scores</h6>
                      <span className="fs-20 fw-bold mb-1 d-block text-gray-9">03</span>
                    </div>
                    <div className="icon-box  bg-soft-info">
                      <img src="assets/img/icon/document.svg" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-purple-transparent border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-1 fw-normal text-gray-5">Average Time</h6>
                      <span className="fs-20 fw-bold mb-1 d-block text-gray-9">00:00:55</span>
                    </div>
                    <div className="icon-box  bg-soft-purple">
                      <img src="assets/img/icon/clock.svg" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive custom-table">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Student Name</th>
                  <th>Score</th>
                  <th>Attemplts</th>
                  <th>Finish Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-01.jpg" alt />
                      </a>
                      <a href="student-details.html" className="fs-14">Thompson Hicks</a>
                    </div>
                  </td>
                  <td>75</td>
                  <td>04</td>
                  <td>22 Aug 2025, 09:00 AM</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-06.jpg" alt />
                      </a>
                      <a href="student-details.html" className="fs-14">Jennifer Tovar</a>
                    </div>
                  </td>
                  <td>50</td>
                  <td>03</td>
                  <td>10 Aug 2025, 09:15 AM</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-09.jpg" alt />
                      </a>
                      <a href="student-details.html" className="fs-14">James Schulte</a>
                    </div>
                  </td>
                  <td>60</td>
                  <td>02</td>
                  <td>26 Jul 2025, 02:20 PM</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-20.jpg" alt />
                      </a>
                      <a href="student-details.html" className="fs-14">Kristy Cardona</a>
                    </div>
                  </td>
                  <td>55</td>
                  <td>02</td>
                  <td>12 Jul 2025, 11:40 AM</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-27.jpg" alt />
                      </a>
                      <a href="student-details.html" className="fs-14">William Aragon</a>
                    </div>
                  </td>
                  <td>45</td>
                  <td>04</td>
                  <td>02 Jul 2025, 04:30 PM</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-30.jpg" alt />
                      </a>
                      <a href="student-details.html" className="fs-14">Shirley Lis</a>
                    </div>
                  </td>
                  <td>60</td>
                  <td>01</td>
                  <td>25 Jun 2025, 08:10 AM</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-17.jpg" alt />
                      </a>
                      <a href="student-details.html" className="fs-14">John Brewer</a>
                    </div>
                  </td>
                  <td>45</td>
                  <td>02</td>
                  <td>17 Jun 2025, 06:30 PM</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-37.jpg" alt />
                      </a>
                      <a href="student-details.html" className="fs-14">Doris Hughes</a>
                    </div>
                  </td>
                  <td>65</td>
                  <td>03</td>
                  <td>04 Jun 2025, 05:00 PM</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-04.jpg" alt />
                      </a>
                      <a href="student-details.html" className="fs-14">Sarah Martinez</a>
                    </div>
                  </td>
                  <td>70</td>
                  <td>04</td>
                  <td>20 May 2025, 06:30 PM</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                        <img src="assets/img/user/user-18.jpg" alt />
                      </a>
                      <a href="student-details.html" className="fs-14">Sarah Martinez</a>
                    </div>
                  </td>
                  <td>40</td>
                  <td>03</td>
                  <td>15 May 2025, 01:40 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /pagination */}
          <div className="row align-items-center mt-4">
            <div className="col-md-2">
              <p className="pagination-text">Page 1 of 2</p>
            </div>
            <div className="col-md-10">
              <ul className="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
                <li className="page-item prev">
                  <a className="page-link" href="javascript:void(0)" tabIndex={-1}><i className="fas fa-angle-left" /></a>
                </li>
                <li className="page-item first-page active">
                  <a className="page-link" href="javascript:void(0)">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0)">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0)">3</a>
                </li>
                <li className="page-item next">
                  <a className="page-link" href="javascript:void(0)"><i className="fas fa-angle-right" /></a>
                </li>
              </ul>
            </div>
          </div>
          {/* /pagination */}
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer />
  {/* /Footer */}
  {/* Add Question */}
  <div className="modal fade" id="add_quiz">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Add New Quiz</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-quiz-questions.html">
          <div className="modal-body pb-0">
            <div className="mb-3">
              <label className="form-label">Course <span className="text-danger"> *</span></label>
              <select className="select">
                <option>Select</option>
                <option>Multiple choice</option>
                <option>Learn JavaScript and Express to become a Expert</option>
                <option>Introduction to Python Programming</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Quiz Title <span className="text-danger"> *</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">No of Questions <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Total Marks <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Pass Mark <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Duration <span className="text-danger"> *</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control timepicker" placeholder="dd/mm/yyyy" defaultValue="02-05-2024" />
                    <span className="input-icon-addon">
                      <i className="isax isax-clock" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-secondary rounded-pill" type="submit">Add Quiz</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Question */}
  {/* Edit Question */}
  <div className="modal fade" id="edit_quiz">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="fw-bold">Edit Quiz</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-quiz-questions.html">
          <div className="modal-body pb-0">
            <div className="mb-3">
              <label className="form-label">Course <span className="text-danger"> *</span></label>
              <select className="select">
                <option>Select</option>
                <option selected>Information About UI/UX Design Degree</option>
                <option>Learn JavaScript and Express to become a Expert</option>
                <option>Introduction to Python Programming</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Quiz Title <span className="text-danger"> *</span></label>
              <input type="text" className="form-control" defaultValue="Information About UI/UX Design Degree" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">No of Questions <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue={10} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Total Marks <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue={100} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Pass Mark <span className="text-danger"> *</span></label>
                  <input type="text" className="form-control" defaultValue={50} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Duration <span className="text-danger"> *</span></label>
                  <div className="input-icon-end position-relative">
                    <input type="text" className="form-control timepicker" placeholder="dd/mm/yyyy" defaultValue="02-05-2024" />
                    <span className="input-icon-addon">
                      <i className="isax isax-clock" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-secondary rounded-pill" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Question */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete Quiz</h4>
            <p className="mb-3">Are you sure you want to delete Quiz?</p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="javascript:void(0);" className="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-secondary rounded-pill">Yes, Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Modal */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default QuizResults