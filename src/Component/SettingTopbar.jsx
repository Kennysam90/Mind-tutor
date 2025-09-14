import React from 'react'
import { Link } from 'react-router-dom'
const SettingTopbar = () => {
  return (
    <>
          <ul className="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded">
            <li><Link to="/settings" className="active">Profile</Link></li>
            <li><Link to="/changepassword">Security</Link></li>
            <li><Link to="/plans">Plans</Link></li>
            <li><Link to="/socialprofiles">Social Profiles</Link></li>
            <li><Link to="/linkedaccounts">Linked Accounts</Link></li>
            <li><Link to="/instructornotifications">Notifications</Link></li>
            <li><Link to="/integrations">Integrations</Link></li>
            <li><Link to="/withdraw">Withdraw</Link></li>
          </ul>
    </>
  )
}

export default SettingTopbar