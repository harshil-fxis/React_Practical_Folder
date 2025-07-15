import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './Assets/Group 1529.png';
import { Stack } from '@mui/material';
import car from './Assets/about.png'

const AboutPage = () => {
  return (
    <div className='homecontainer'>
        <div className='about-detail-container'>
          <Stack className='about-first-row'>
            <span>Welcome to Qent Car Rentals!</span>
            <p>We are committed to providing quality cars with top-notch service. 
              Whether you're looking for a luxury ride,
              a family SUV, or a budget-friendly hatchback — 
              we've got the perfect vehicle for every journey.
            </p>
            <span>Your Journey, Our Priority.</span>
            <p>At Qent, we believe renting a car should be easy, affordable, and reliable. 
              With a wide selection of vehicles, transparent pricing, and 24/7 support 
              — we ensure you hit the road with complete peace of mind.
              Trusted by hundreds of happy travelers across India.
            </p>
            <span>Driven by Trust. Powered by Service.</span>
            <p>Qent isn’t just about renting cars — it's about helping you explore 
              the world your way. From daily commutes to long road trips, 
              we have the right car for every moment.
            </p>
          </Stack>
          <Stack className='text-header-section'>
            <Stack className='about-first-container'>
              <span className='header-text'>Quality Cars , <span className='header-text-second'>  Quality Service.</span> </span><br/>
              <br/>
            </Stack>
            <Stack className='about-second-container'>
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
          </Stack>
          <Stack className='about-img-section'>
            <img src={car}></img>
          </Stack>
          <Stack className='about-second-row'>
            <span>Qent Travel Connection</span>
            <p>The Rental Qent is an online platform that facilitates access to the best travel deals by directing consumers to travel providers and agents. 
              We are not a licensed travel provider, nor do we provide our own travel services or quotes. 
              While the Rental Radar connects the general public to reliable travel services, 
              we cannot guarantee that advertised rates are available or the cheapest at the time of the user’s search session. 
              All prices are subject to availability, and we only provide that information available via travel search engines at any given time. 
              Although we aim to provide our users with the cheapest rates, we cannot promise the lowest rates 100% of the time.
            </p>
            <span>Why Choose Qent ?</span>
            <p>Whether you need a car for business or a weekend getaway, Qent provides safe, clean and affordable cars with full support.</p>
          </Stack>
        </div>
    </div>
  )
}

export default AboutPage