import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './Assets/Group 1529.png';

function NotificationPage() {
  return (
     <div className='profile-container'>
      <div className='header'>
        <div className='text'> <img src={logo} alt=''/><h2>Qent</h2></div>
        <div className='headerNav'>
          <NavLink to="/home" className="nav-item">Home</NavLink>
          <NavLink to="/search" className="nav-item">Search</NavLink>
          <NavLink to="/notification" className="nav-item">Notification</NavLink>
          <NavLink to="/profile" className="nav-item">Profile</NavLink>
        </div>
      </div>
      <div><h1>Notification page</h1></div>
     </div>
    )
}

export default NotificationPage
