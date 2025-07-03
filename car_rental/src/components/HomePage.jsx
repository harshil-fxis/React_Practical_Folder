import React from 'react'
import './Page.css'
import { IoChevronBack } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const HomePage = () => {
  return (
   <div className='profile-container'>
      <div className='profile-header'>
      <div className='back-arrow'><IoChevronBack/></div>
        <h2>Home</h2>
         <div className='dot-option'><BsThreeDots/></div>
       </div>
       <div className='body'> 
         
       </div>
    </div>
  )
}

export default HomePage
