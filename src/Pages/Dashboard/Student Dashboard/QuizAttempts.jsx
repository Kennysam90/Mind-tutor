import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'
import Footer from '../../../Component/Footer'

const QuizAttempts = () => {
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
          <h2 className="breadcrumb-title mb-2">My Quiz Attempts</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">My Quiz Attempts</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  <div className="content">
    <div className="container">
      {/* profile box */}
      <div className="profile-card overflow-hidden bg-blue-gradient2 mb-5 p-5">
        <div className="profile-card-bg">
          <img src="assets/img/bg/card-bg-01.png" className="profile-card-bg-1" alt />
        </div>
        <div className="row align-items-center row-gap-3">
          <div className="col-lg-6">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-xxl avatar-rounded me-3 border border-white border-2 position-relative">
                <img src="assets/img/user/user-02.jpg" alt />
                <span className="verify-tick"><i className="isax isax-verify5" /></span>
              </span>
              <div>
                <h5 className="mb-1 text-white d-inline-flex align-items-center">Ronald Richard<a href="instructor-profile.html" className="link-light fs-16 ms-2"><i className="isax isax-edit-2" /></a></h5>
                <p className="text-light">Student</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center justify-content-lg-end flex-wrap gap-2">
              <a href="become-an-instructor.html" className="btn btn-white rounded-pill me-3">Become an Instructor</a>
              <a href="instructor-dashboard.html" className="btn btn-secondary rounded-pill">Instructor Dashboard</a>
            </div>
          </div>
        </div>
      </div>
      {/* profile box */}
      <div className="row">
        {/* sidebar */}
        <StudentSidebar />
        {/* sidebar */}
        <div className="col-lg-9">
          <div className="page-title d-flex align-items-center justify-content-between">
            <h5>My Quiz Attempts</h5>
          </div>
          <div className="d-flex align-items-center justify-content-between border p-3 mb-3 rounded-2">
            <div>
              <h6 className="mb-1"><a href="student-quiz-questions.html">Information About UI/UX Design Degree</a></h6>
              <p className="fs-14">Number of Questions : 05</p>
            </div>
            <div>
              <a href="student-quiz-questions.html" className="arrow-next"><i className="isax isax-arrow-right-1" /></a>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between border p-3 pb-3 mb-3 rounded-2">
            <div>
              <h6 className="mb-1"><a href="student-quiz-questions.html">Learn JavaScript and Express to become a Expert</a></h6>
              <p className="fs-14">Number of Questions : 10</p>
            </div>
            <div>
              <a href="student-quiz-questions.html" className="arrow-next"><i className="isax isax-arrow-right-1" /></a>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between border p-3 pb-3 mb-3 rounded-2">
            <div>
              <h6 className="mb-1"><a href="student-quiz-questions.html">Introduction to Python Programming</a></h6>
              <p className="fs-14">Number of Questions : 08</p>
            </div>
            <div>
              <a href="student-quiz-questions.html" className="arrow-next"><i className="isax isax-arrow-right-1" /></a>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between border p-3 pb-3 mb-3 rounded-2">
            <div>
              <h6 className="mb-1"><a href="student-quiz-questions.html">Build Responsive Websites with HTML5 and CSS3</a></h6>
              <p className="fs-14">Number of Questions : 05</p>
            </div>
            <div>
              <a href="student-quiz-questions.html" className="arrow-next"><i className="isax isax-arrow-right-1" /></a>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between border p-3 pb-3 mb-3 rounded-2">
            <div>
              <h6 className="mb-1"><a href="student-quiz-questions.html">Information About Photoshop Design Degree</a></h6>
              <p className="fs-14">Number of Questions : 10</p>
            </div>
            <div>
              <a href="student-quiz-questions.html" className="arrow-next"><i className="isax isax-arrow-right-1" /></a>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between border p-3 rounded-2">
            <div>
              <h6 className="mb-1"><a href="student-quiz-questions.html">C# Developers Double Your Coding with Visual Studio</a></h6>
              <p className="fs-14">Number of Questions : 07</p>
            </div>
            <div>
              <a href="student-quiz-questions.html" className="arrow-next"><i className="isax isax-arrow-right-1" /></a>
            </div>
          </div>
          {/* /pagination */}
          <div className="row align-items-center mt-3">
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
  {/* Edit Review */}
  <div className="modal fade" id="edit_review">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Edit Review</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <div className="modal-body pb-0">                    
          <div className="mb-3">
            <label className="form-label fs-14">Your Rating <span className="text-danger">*</span></label>
            <div className="selection-wrap">
              <div className="d-inline-block">
                <div className="rating-selction">
                  <input type="radio" name="rating" defaultValue={5} id="rating5" defaultChecked />
                  <label htmlFor="rating5"><i className="fa-solid fa-star" /></label>
                  <input type="radio" name="rating" defaultValue={4} id="rating4" defaultChecked />
                  <label htmlFor="rating4"><i className="fa-solid fa-star" /></label>
                  <input type="radio" name="rating" defaultValue={3} id="rating3" defaultChecked />
                  <label htmlFor="rating3"><i className="fa-solid fa-star" /></label>
                  <input type="radio" name="rating" defaultValue={2} id="rating2" />
                  <label htmlFor="rating2"><i className="fa-solid fa-star" /></label>
                  <input type="radio" name="rating" defaultValue={1} id="rating1" />
                  <label htmlFor="rating1"><i className="fa-solid fa-star" /></label>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fs-14">Write Your Review <span className="text-danger">*</span></label>
            <textarea className="form-control" rows={3} defaultValue={"This is the second Photoshop course I have completed with Nancy Duarte. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Nancy Duarte."} />
          </div>
        </div>
        <div className="modal-footer">
          <a href="javascript:void(0);" className="btn bg-gray-100 btn-light rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>   
          <button type="submit" className="btn btn-md btn-secondary rounded-pill">Save Changes</button>                
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Review */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Delete Review</h4>
            <p className="mb-3">Are you sure you want to delete review?</p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="#" className="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
              <a href="#" className="btn btn-secondary rounded-pill">Yes, Remove All</a>
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

export default QuizAttempts