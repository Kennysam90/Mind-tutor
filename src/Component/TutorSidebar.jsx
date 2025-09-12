import React from 'react'
import { Link } from 'react-router-dom'

const TutorSidebar = () => {
  return (
    <>
         <div className="col-lg-3 theiaStickySidebar">
          <div className="settings-sidebar mb-lg-0">
            <div>
              <h6 className="mb-3">Main Menu</h6>
              <ul className="mb-3 pb-1">
                <li>
                  <Link to="/instructordashboard" className="d-inline-flex align-items-center"><i className="isax isax-grid-35 me-2" />Dashboard</Link>
                </li>
                <li>
                  <Link to="/profile" className="d-inline-flex align-items-center active"><i className="fa-solid fa-user me-2" />My Profile</Link>
                </li>
                <li>
                  <Link to="/instructorcourses" className="d-inline-flex align-items-center"><i className="isax isax-teacher5 me-2" />Courses</Link>
                </li>
                <li>
                  <Link to="/announcement" className="d-inline-flex align-items-center"><i className="isax isax-volume-high5 me-2" />Announcements</Link>
                </li>
                <li>
                  <Link to="/assignment" className="d-inline-flex align-items-center"><i className="isax isax-clipboard-text5 me-2" />Assignments</Link>
                </li>
                <li>
                  <Link to="/studentsgrid" className="d-inline-flex align-items-center"><i className="isax isax-profile-2user5 me-2" />Students</Link>
                </li>
                <li>
                  <Link to="/quiz" className="d-inline-flex align-items-center"><i className="isax isax-award5 me-2" />Quiz</Link>
                </li>
                <li>
                  <Link to="/quizresults" className="d-inline-flex align-items-center"><i className="isax isax-medal-star5 me-2" />Quiz Results</Link>
                </li>
                <li>
                  <Link to="/certificates" className="d-inline-flex align-items-center"><i className="isax isax-note-215 me-2" />Certificates</Link>
                </li>
                <li>
                  <Link to="/earnings" className="d-inline-flex align-items-center"><i className="isax isax-wallet-add5 me-2" />Earnings</Link>
                </li>
                <li>
                  <Link to="/payouts" className="d-inline-flex align-items-center"><i className="isax isax-coin-15 me-2" />Payout</Link>
                </li>
                <li>
                  <Link to="/statements" className="d-inline-flex align-items-center"><i className="isax isax-shopping-cart5 me-2" />Statements</Link>
                </li>
                <li>
                  <Link to="/messages" className="d-inline-flex align-items-center"><i className="isax isax-messages-35 me-2" />Messages</Link>
                </li>
                <li>
                  <Link to="/tickets" className="d-inline-flex align-items-center"><i className="isax isax-ticket5 me-2" />Support Tickets</Link>
                </li>
              </ul>
              <hr />
              <h6 className="mb-3">Account Settings</h6>
              <ul>
                <li>
                  <Link to="/settings" className="d-inline-flex align-items-center"><i className="isax isax-setting-25 me-2" />Settings</Link>
                </li>
                <li>
                  <Link to="/login" className="d-inline-flex align-items-center"><i className="isax isax-logout5 me-2" />Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default TutorSidebar