import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './Assets/Group 1529.png';
import { Stack } from '@mui/material';

function SearchPage() {
  return (
     <div className='homecontainer'>
      <Stack className='profile-first-container'>
        <h1>Your Ride, Your Way.</h1>
        <br/>
        <div className='header'>
          <div className='text'> <img src={logo} alt=''/><h2>Qent</h2></div>
          <div className='headerNav'>
            <NavLink to="/home" className="nav-item">Home</NavLink>
            <NavLink to="/about" className="nav-item">About</NavLink>
            <NavLink to="/search" className="nav-item">Search</NavLink>
            <NavLink to="/notification" className="nav-item">Notification</NavLink>
            <NavLink to="/profile" className="nav-item">Profile</NavLink>              
          </div>
        </div>
      </Stack>
      <div><h1>Search page</h1></div>
     </div>
    )
}

export default SearchPage
