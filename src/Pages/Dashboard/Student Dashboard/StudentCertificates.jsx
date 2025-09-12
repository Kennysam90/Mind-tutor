import React from 'react'
import Header from '../../../Component/Header'
import StudentSidebar from '../../../Component/StudentSidebar'
import Footer from '../../../Component/Footer'

const StudentCertificates = () => {
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
          <h2 className="breadcrumb-title mb-2">My Certificates</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">My Certificates</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  <div className="content">
    <div className="container">
      {/* Profile */}
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
                <h5 className="mb-1 text-white d-inline-flex align-items-center">Ronald Richard<a href="student-profile.html" className="link-light fs-16 ms-2"><i className="isax isax-edit-2" /></a></h5>
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
      {/* /Profile */}
      <div className="row">
        {/* Sidebar */}
        <StudentSidebar />
        {/* sidebar */}
        <div className="col-lg-9">
          <div className="page-title d-flex align-items-center justify-content-between">
            <h5>My Certificates</h5>
          </div>
          <div className="table-responsive custom-table">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Certificate Name</th>
                  <th>Date</th>
                  <th>Marks</th>
                  <th>Out of</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td><a href="#" className="fw-semibold">UI/UX Design Certificate</a></td>
                  <td>22 Aug 2025</td>
                  <td>20</td>
                  <td>20</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_certificate"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td><a href="#" className="fw-semibold">Wordpress Certificate</a></td>
                  <td>10 Aug 2025</td>
                  <td>18</td>
                  <td>20</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_certificate"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td><a href="#" className="fw-semibold">HTML CSS Certificate</a></td>
                  <td>26 Jul 2025</td>
                  <td>25</td>
                  <td>30</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_certificate"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td><a href="#" className="fw-semibold">JavaScript Certificate</a></td>
                  <td>14 Jul 2025</td>
                  <td>15</td>
                  <td>20</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_certificate"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td><a href="#" className="fw-semibold">Photoshop Certificate</a></td>
                  <td>19 Jun 2025</td>
                  <td>20</td>
                  <td>30</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_certificate"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td><a href="#" className="fw-semibold">Python Certificate</a></td>
                  <td>12 Jun 2025</td>
                  <td>20</td>
                  <td>20</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#" className="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_certificate"><i className="isax isax-eye" /></a>
                      <a href="#" className="d-inline-flex fs-14 action-icon"><i className="isax isax-import" /></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer/>
  {/* /Footer */}
  {/* View Certificate */}
  <div className="modal fade" id="view_certificate">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h5>View Certificate</h5>
          <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="isax isax-close-circle5" />
          </button>
        </div>
        <div className="modal-body">
          <div><img src="assets/img/icon/certificate.svg" className="img-fluid" alt /></div>
          <div className="text-end mt-4">
            <a href="#" className="btn btn-secondary rounded-pill"><i className="isax isax-import me-2" />Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /View Certificate */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default StudentCertificates