import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'
import Footer from '../../../Component/Footer'

const Wishlist = () => {
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
          <h2 className="breadcrumb-title mb-2">Wishlist</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
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
            <h5>Wishlist</h5>
            <a href="javascript:void(0);" className="fs-14 text-danger d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">
              <i className="isax isax-trash me-1" />Remove All
            </a>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="course-item course-item-three">
                <div className="position-relative overflow-hidden rounded-3 mb-3">
                  <a href="course-details.html"><img className="img-fluid rounded-3" src="assets/img/course/course-01.jpg" alt="img" /></a>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a className="fav-icon like selected" href="javascript:void(0);">
                      <i className="isax isax-heart not-filled" /><i className="isax isax-heart5 filled-heart" />
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm rounded-circle">
                      <a href="instructor-details.html"><img className="img-fluid rounded-circle" src="assets/img/avatar/avatar1.jpg" alt="im" /></a>
                    </div>
                    <p className="fs-14 ms-2"><a href="instructor-details.html">David Benitez</a></p>
                  </div>
                  <span className="tag-btn">Design</span>
                </div>
                <h6 className="mt-3 mb-2"><a href="course-details.html">Information About UI/UX Design Degree</a></h6>
                <div className="d-flex align-items-center"><i className="fa-solid fa-star text-warning fs-12" /><p className="fs-14 ms-1">4.9 (200 Reviews)</p></div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                  <h5 className="text-secondary">$120</h5>
                  <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="fs-8 fas fa-angle-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="course-item course-item-three">
                <div className="position-relative overflow-hidden rounded-3 mb-3">
                  <a href="course-details.html"><img className="img-fluid rounded-3" src="assets/img/course/course-02.jpg" alt="img" /></a>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a className="fav-icon like selected" href="javascript:void(0);">
                      <i className="isax isax-heart not-filled" /><i className="isax isax-heart5 filled-heart" />
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm rounded-circle">
                      <a href="instructor-details.html"><img className="img-fluid rounded-circle object-fit-cover" src="assets/img/avatar/avatar2.jpg" alt="im" /></a>
                    </div>
                    <p className="fs-14 ms-2"><a href="instructor-details.html">Ana Reyes</a></p>
                  </div>
                  <span className="tag-btn">Wordpress</span>
                </div>
                <h6 className="mt-3 mb-2"><a href="course-details.html">Wordpress for Beginners - Master Wordpress Quickly</a></h6>
                <div className="d-flex align-items-center"><i className="fa-solid fa-star text-warning fs-12" /><p className="fs-14 ms-1">4.4 (160 Reviews)</p></div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                  <h5 className="text-secondary">$140</h5>
                  <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="fs-8 fas fa-angle-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="course-item course-item-three">
                <div className="position-relative overflow-hidden rounded-3 mb-3">
                  <a href="course-details.html"><img className="img-fluid rounded-3" src="assets/img/course/course-03.jpg" alt="img" /></a>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a className="fav-icon like selected" href="javascript:void(0);">
                      <i className="isax isax-heart not-filled" /><i className="isax isax-heart5 filled-heart" />
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm rounded-circle">
                      <a href="instructor-details.html"><img className="img-fluid rounded-circle object-fit-cover" src="assets/img/avatar/avatar3.jpg" alt="im" /></a>
                    </div>
                    <p className="fs-14 ms-2"><a href="instructor-details.html">Andrew Pirtle</a></p>
                  </div>
                  <span className="tag-btn">Design</span>
                </div>
                <h6 className="mt-3 mb-2"><a href="course-details.html">Sketch from A to Z (2024): Become an app designer</a></h6>
                <div className="d-flex align-items-center"><i className="fa-solid fa-star fs-12 text-warning" /><p className="fs-14 ms-1">4.6 (170 Reviews)</p></div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                  <h5 className="text-secondary">$160</h5>
                  <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="fs-8 fas fa-angle-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="course-item course-item-three">
                <div className="position-relative overflow-hidden rounded-3 mb-3">
                  <a href="course-details.html"><img className="img-fluid rounded-3" src="assets/img/course/course-04.jpg" alt="img" /></a>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a className="fav-icon like selected" href="javascript:void(0);">
                      <i className="isax isax-heart not-filled" /><i className="isax isax-heart5 filled-heart" />
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm rounded-circle">
                      <a href="instructor-details.html"><img className="img-fluid rounded-circle object-fit-cover" src="assets/img/avatar/avatar4.jpg" alt="im" /></a>
                    </div>
                    <p className="fs-14 ms-2"><a href="instructor-details.html">Christy Garner</a></p>
                  </div>
                  <span className="tag-btn">Programming</span>
                </div>
                <h6 className="mt-3 mb-2"><a href="course-details.html">Sketch from A to Z (2024): Become an app designer</a></h6>
                <div className="d-flex align-items-center"><i className="fa-solid fa-star fs-12 text-warning" /><p className="fs-14 ms-1">4.2 (220 Reviews)</p></div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                  <h5 className="text-secondary">$200</h5>
                  <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="fs-8 fas fa-angle-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="course-item course-item-three">
                <div className="position-relative overflow-hidden rounded-3 mb-3">
                  <a href="course-details.html"><img className="img-fluid rounded-3" src="assets/img/course/course-05.jpg" alt="img" /></a>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a className="fav-icon like selected" href="javascript:void(0);">
                      <i className="isax isax-heart not-filled" /><i className="isax isax-heart5 filled-heart" />
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm rounded-circle">
                      <a href="instructor-details.html"><img className="img-fluid rounded-circle object-fit-cover" src="assets/img/avatar/avatar5.jpg" alt="im" /></a>
                    </div>
                    <p className="fs-14 ms-2"><a href="instructor-details.html">Justin Gregory</a></p>
                  </div>
                  <span className="tag-btn">Programming</span>
                </div>
                <h6 className="mt-3 mb-2"><a href="course-details.html">Learn JavaScript and Express to become a Expert</a></h6>
                <div className="d-flex align-items-center"><i className="fa-solid fa-star fs-12 text-warning" /><p className="fs-14 ms-1">4.4 (180 Reviews)</p></div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                  <h5 className="text-secondary">$130</h5>
                  <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="fs-8 fas fa-angle-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="course-item course-item-three">
                <div className="position-relative overflow-hidden rounded-3 mb-3">
                  <a href="course-details.html"><img className="img-fluid rounded-3" src="assets/img/course/course-06.jpg" alt="img" /></a>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a className="fav-icon like selected" href="javascript:void(0);">
                      <i className="isax isax-heart not-filled" /><i className="isax isax-heart5 filled-heart" />
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm rounded-circle">
                      <a href="instructor-details.html"><img className="img-fluid rounded-circle object-fit-cover" src="assets/img/avatar/avatar6.jpg" alt="im" /></a>
                    </div>
                    <p className="fs-14 ms-2"><a href="instructor-details.html">Carolyn Hines</a></p>
                  </div>
                  <span className="tag-btn">Programming</span>
                </div>
                <h6 className="mt-3 mb-2"><a href="course-details.html">Introduction to Python Programming</a></h6>
                <div className="d-flex align-items-center"><i className="fa-solid fa-star fs-12 text-warning" /><p className="fs-14 ms-1">4.7 (130 Reviews)</p></div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                  <h5 className="text-secondary">$150</h5>
                  <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="fs-8 fas fa-angle-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="course-item course-item-three">
                <div className="position-relative overflow-hidden rounded-3 mb-3">
                  <a href="course-details.html"><img className="img-fluid rounded-3" src="assets/img/course/course-07.jpg" alt="img" /></a>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a className="fav-icon like selected" href="javascript:void(0);">
                      <i className="isax isax-heart not-filled" /><i className="isax isax-heart5 filled-heart" />
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm rounded-circle">
                      <a href="instructor-details.html"><img className="img-fluid rounded-circle object-fit-cover" src="assets/img/avatar/avatar7.jpg" alt="im" /></a>
                    </div>
                    <p className="fs-14 ms-2"><a href="instructor-details.html">Rafael Miller</a></p>
                  </div>
                  <span className="tag-btn">Programming</span>
                </div>
                <h6 className="mt-3 mb-2"><a href="course-details.html">Build Responsive Websites with HTML5 and CSS3</a></h6>
                <div className="d-flex align-items-center"><i className="fa-solid fa-star fs-12 text-warning" /><p className="fs-14 ms-1">4.1 (140 Reviews)</p></div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                  <h5 className="text-secondary">$170</h5>
                  <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="fs-8 fas fa-angle-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="course-item course-item-three">
                <div className="position-relative overflow-hidden rounded-3 mb-3">
                  <a href="course-details.html"><img className="img-fluid rounded-3" src="assets/img/course/course-08.jpg" alt="img" /></a>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a className="fav-icon like selected" href="javascript:void(0);">
                      <i className="isax isax-heart not-filled" /><i className="isax isax-heart5 filled-heart" />
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm rounded-circle">
                      <a href="instructor-details.html"><img className="img-fluid rounded-circle object-fit-cover" src="assets/img/avatar/avatar8.jpg" alt="im" /></a>
                    </div>
                    <p className="fs-14 ms-2"><a href="instructor-details.html">Nancy Duarte</a></p>
                  </div>
                  <span className="tag-btn">Deign</span>
                </div>
                <h6 className="mt-3 mb-2"><a href="course-details.html">Information About Photoshop Design Degree</a></h6>
                <div className="d-flex align-items-center"><i className="fa-solid fa-star fs-12 text-warning" /><p className="fs-14 ms-1">4.3 (190 Reviews)</p></div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                  <h5 className="text-secondary">$110</h5>
                  <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="fs-8 fas fa-angle-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="course-item course-item-three">
                <div className="position-relative overflow-hidden rounded-3 mb-3">
                  <a href="course-details.html"><img className="img-fluid rounded-3" src="assets/img/course/course-09.jpg" alt="img" /></a>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a className="fav-icon like selected" href="javascript:void(0);">
                      <i className="isax isax-heart not-filled" /><i className="isax isax-heart5 filled-heart" />
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm rounded-circle">
                      <a href="instructor-details.html"><img className="img-fluid rounded-circle object-fit-cover" src="assets/img/avatar/avatar9.jpg" alt="im" /></a>
                    </div>
                    <p className="fs-14 ms-2"><a href="instructor-details.html">James Kagan</a></p>
                  </div>
                  <span className="tag-btn">Programming</span>
                </div>
                <h6 className="mt-3 mb-2"><a href="course-details.html">C# Developers Double Your Coding with Visual Studio</a></h6>
                <div className="d-flex align-items-center"><i className="fa-solid fa-star fs-12 text-warning" /><p className="fs-14 ms-1">4.8 (110 Reviews)</p></div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                  <h5 className="text-secondary">$180</h5>
                  <a href="course-details.html" className="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i className="fs-8 fas fa-angle-right ms-2" /></a>
                </div>
              </div>
            </div>
          </div>
          {/* /pagination */}
          <div className="row align-items-center">
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
  {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center custom-modal-body">
          <span className="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i className="isax isax-trash fs-24 text-danger" />
          </span>
          <div>
            <h4 className="mb-2">Remove All</h4>
            <p className="mb-3">Are you sure you want to remove all from wishlist?</p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="javascript:void(0);" className="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" className="btn btn-secondary rounded-pill">Yes, Remove All</a>
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

export default Wishlist