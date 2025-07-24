import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../components/Assets/Group 1529.png';
import { Input, Stack, TextField, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterButton from '../components/Assets/Icons/filters_section.png'
import axios from 'axios';
import { API } from '../components/LoginSignup/config';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GiCarSeat } from "react-icons/gi";
import { LiaCitySolid } from "react-icons/lia";

function SearchPage() {

  const [brands, setBrands] = useState([])
  const [cars, setCars] = useState([])

  useEffect(() => {
    const loadData = async () => {

      axios.get("http://localhost:8000/allowner", {
        headers: {
          Accept: "application/json",
        }
      })
        .then(response => {
          console.log(response.data)
          const allCars = []
          const brandSet = new Set()

          response.data.forEach(owner => {
            if (Array.isArray(owner.cars)) {
              owner.cars.forEach((car) => {
                allCars.push(car)
                brandSet.add(car.brandName)
                console.log(car.carName);
              });
            }
          });
          setCars(allCars)
          setBrands([...brandSet])
          })
        .catch(error => console.error("Error", error))
      }
    loadData()
  }, [])



  return (
     <div className='homecontainer'>
      <Stack className='profile-first-container'>
        <h1>Your Ride, Your Way.</h1>
        <br/>
        <Header />
      </Stack>
      <div>
        <div className='search-first-section'>
          <input className='search-input' placeholder='Search your cars...' />
          <img src={FilterButton} alt='Filter button' style={{width:'60px', height:'60px'}}/>
        </div>
        <div className='search-second-section'>
          <h2>Recommend For You</h2>
        </div>
        <div style={{marginTop:'40px'}}>
          <Stack className='car-scroll' direction='row' gap={2} flexWrap={'wrap'} justifyContent={'center'}>
            {
              cars.map((car, index) => (
                <Box className='car-box' key={index}>
                  <Stack className='imgs-section'>
                    <img style={{height:'100%', width:'100%',objectFit:'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} src={`${API.PROFILE_IMG}/${car.image_urls[0]}`} alt={car.carName}></img>
                  </Stack>
                  <Stack className='car-detail-section'>
                    <span style={{fontSize:'18px', fontWeight:500}}>{car.carName}</span>
                    <span ><LiaCitySolid/>  {car.city}   <span style={{paddingLeft:100}}> <GiCarSeat/>  {car.seats}</span></span>
                    <span></span>
                    <span><FaIndianRupeeSign/>  {car.price}</span>
                  </Stack>
                </Box>
              ))
            }
          </Stack>
        </div>
      </div>
      <Footer />
     </div>
    )
}

export default SearchPage
