import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './Assets/Group 1529.png';
import { Stack } from '@mui/material';
import car from './Assets/about.png'
import Facebook from './Assets/Icons/facebook.png'
import Instagram from './Assets/Icons/instagram.png'
import Twitter from './Assets/Icons/twitter.png'

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
      <Stack sx={{width:'100%'}} className='footer-section'>
        <Stack sx={{flexDirection:'row',justifyContent:'space-evenly',padding:'30px',gap:'10px'}}>
          <Stack sx={{width:400,height:250, alignItems:'start'}}>
                    <h2>Qent</h2>
                    <span>
                      Search for cheap rental cars in India,With a diverse fleet of 19,000 vehicles. 
                      Weather offers its consumers an attractive and fun selection.
                    </span>
                    <span style={{flexDirection:'row',display:'inline-flex',cursor:'pointer',gap:'10px',marginTop:'30px'}}><img src={Instagram}/><img src={Facebook}/><Stack sx={{width:'37px',height:'37px',borderRadius:'5px',bgcolor:'blue',marginTop:'5px',marginLeft:'6px'}}><img src={Twitter}/></Stack></span>
                  </Stack>
                  <Stack sx={{width:150, height:250, gap:'10px'}}>
                    <h3>Quick Links</h3>
                    <span><a href='/home'>Home</a></span>
                    <span><a href='/about'>About</a></span>
                    <span><a href='/search'>Search</a></span>
                    <span><a href='/notification'>Notification</a></span>
                    <span><a href='/profile'>Profile</a></span>
                  </Stack>
                  <Stack sx={{ height:250,gap:'10px'}}>
                    <h3>Contact Us</h3>
                    <span>Email : support@qentcar.com</span>
                    <span>Phone : +91 8795687469</span>
                    <span>Address : Ahmedabad, Gujrat, India</span>
                  </Stack>
                  <Stack sx={{width:150, height:250,gap:'10px'}}>
                    <h3>Support</h3>
                    <span>Help center</span>
                    <span>Ask a question</span>
                    <span>Privacy policy</span>
                    <span>Teams & condition</span>
                  </Stack>
              </Stack>
            </Stack>
    </div>
  )
}

export default AboutPage