import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../components/Assets/Group 1529.png';
import { Stack } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SearchPage() {
  return (
     <div className='homecontainer'>
      <Stack className='profile-first-container'>
        <h1>Your Ride, Your Way.</h1>
        <br/>
        <Header />
      </Stack>
      <div><h1>Search page</h1></div>
      <Footer />
     </div>
    )
}

export default SearchPage
