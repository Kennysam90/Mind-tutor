import React from 'react'
import { Link } from 'react-router-dom'

const StudentSidebar = () => {
  return (
    <>
         <div className="col-lg-3 theiaStickySidebar">
          <div className="settings-sidebar">
            <div>
              <h6 className="mb-3">Main Menu</h6>
              <ul className="mb-3 pb-1">
                <li>
                  <Link to="/studentdashboard" className="d-inline-flex align-items-center active"><i className="isax isax-grid-35 me-2" />Dashboard</Link>
                </li>
                <li>
                  <Link to="/studentprofile" className="d-inline-flex align-items-center"><i className="fa-solid fa-user me-2" />My Profile</Link>
                </li>
                <li>
                  <Link to="/enrolledcourses" className="d-inline-flex align-items-center"><i className="isax isax-teacher5 me-2" />Enrolled Courses</Link>
                </li>
                <li>
                  <Link to="/studentcertificates" className="d-inline-flex align-items-center"><i className="isax isax-note-215 me-2" />My Certificates</Link>
                </li>
                <li>
                  <Link to="/wishlist" className="d-inline-flex align-items-center"><i className="isax isax-heart5 me-2" />Wishlist</Link>
                </li>
                <li>
                  <Link to="/reviews" className="d-inline-flex align-items-center"><i className="isax isax-star5 me-2" />Reviews</Link>
                </li>
                <li>
                  <Link to="/quizattempts" className="d-inline-flex align-items-center"><i className="isax isax-award5 me-2" />My Quiz Attempts</Link>
                </li>
                <li>
                  <Link to="/orderhistory" className="d-inline-flex align-items-center"><i className="isax isax-shopping-cart5 me-2" />Order History</Link>
                </li>
                <li>
                  <a href="student-referral.html" className="d-inline-flex align-items-center"><i className="isax isax-tag-user5 me-2" />Referrals</a>
                </li>
                <li>
                  <Link to="/studentmessage" className="d-inline-flex align-items-center"><i className="isax isax-messages-35 me-2" />Messages</Link>
                </li>
                <li>
                  <Link to="/studentticket" className="d-inline-flex align-items-center"><i className="isax isax-ticket5 me-2" />Support Tickets</Link>
                </li>
              </ul>
              <hr />
              <h6 className="mb-3">Account Settings</h6>
              <ul>
                <li>
                  <Link to="/studentsettings" className="d-inline-flex align-items-center"><i className="isax isax-setting-25 me-2" />Settings</Link>
                </li>
                <li>
                  < Link to="/login" className="d-inline-flex align-items-center"><i className="isax isax-logout5 me-2" />Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default StudentSidebar