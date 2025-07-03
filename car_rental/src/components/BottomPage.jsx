import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import BottomNavBar from './BottomNavBar'

const BottomPage = () => {
  return (
    <div style={{paddingBottom: 60}}>
        <Routes>
            <Route path='home' element={<HomePage />} />
            <Route path='profile' element={<ProfilePage />} />
        </Routes>
      <BottomNavBar />
    </div>
  )
}

export default BottomPage
