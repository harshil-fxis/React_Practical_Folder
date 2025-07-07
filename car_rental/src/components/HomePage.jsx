import React from 'react'
import './Page.css'
import logo from './Assets/Group 1529.png';
import { IoChevronBack } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import profile from './Assets/profile.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ProfilePage from './ProfilePage';

const HomePage = () => {
  return (
   <div className='homecontainer'>
    <div className='header'>
      <div className='text'> <img src={logo} alt=''/><h2>Qent</h2></div>
      <div className='headerNav'>
        {/* <Routes>
          <Route path='home' element={<HomePage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Routes> */}
        <NavLink to="/home" className="nav-item">Home</NavLink>
        <NavLink to="/profile" className="nav-item">Profile</NavLink>
        {/* <Link to='/button/home' className='home'>Home</Link>
        <Link to={} className='about'>About</Link>
        <Link to={} className='search'>Search</Link>
        <Link to={} className='notification'>Notification</Link>
        <Link to='/bottom/profile' className='profile'>Profile</Link> */}
      </div>
    </div>
   </div>
  )
}

export default HomePage
