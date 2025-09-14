import React from 'react'
import { Link } from 'react-router-dom'

const StudentTopbar = () => {
  return (
    <>
        <ul className="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded">
            <li>< Link to="/studentsettings">Edit Profile</Link></li>
            <li><Link to="/passwordchange" className="active">Security</Link></li>
            <li><Link to="/mediaprofile">Social Profiles</Link></li>
            <li><Link to="/studentaccounts">Linked Accounts</Link></li>
            <li><Link to="/studentnotifications">Notifications</Link></li>
            <li><Link to="/billingaddress">Billing Address</Link></li>
          </ul>
    </>
  )
}

export default StudentTopbar