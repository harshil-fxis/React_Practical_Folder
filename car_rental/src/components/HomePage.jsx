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
import { Box, Stack } from '@mui/material'
import { purple } from '@mui/material/colors';
import car from './Assets/fortuner1.png'
import mahindra from './Assets/Brands/mahindra.png'
import suzuki from './Assets/Brands/suzuki.png'
import bmw from './Assets/Brands/bmw.png'
import hyundai from './Assets/Brands/hyundai.png'
import toyota from './Assets/Brands/toyota.png'
import kia from './Assets/Brands/kia.png'
import honda from './Assets/Brands/honda.png'
import tata from './Assets/Brands/tata.png'
import w from './Assets/Brands/w.png'
import mg from './Assets/Brands/mg.png'
import car1 from './Assets/Cars/city1.jpg'
import car12 from './Assets/Cars/city i.jpg'
import car123 from './Assets/Cars/city i1.jpg'
import car2 from './Assets/Cars/innova 1.jpg'
import car22 from './Assets/Cars/innova i.jpg'
import car223 from './Assets/Cars/innova i1.jpg'
import car3 from './Assets/Cars/fortuner 1.jpg'
import car32 from './Assets/Cars/fortuner i.jpg'
import car323 from './Assets/Cars/fortuner i1.jpg'
import car4 from './Assets/Cars/swift1.jpg'
import car42 from './Assets/Cars/swift i.jpg'
import car423 from './Assets/Cars/swift i1.jpg'





const HomePage = () => {
  return (
   <div className='homecontainer'>
    <Stack className='first-container'>
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
    <Stack className='img-section'>
      <img src={car}></img>
    </Stack>
    <Stack className='second-container'></Stack>
    <Stack>
      <Stack className='brand-container'>
        <h2>All Types of Brands</h2>
        <Stack className='brand-scroll' direction='column' gap={2} flexWrap={'wrap'} justifyContent={'center'}>
          {
            brandList.map((item,index) => (
              <Box className='brand-box' key={index}>
                <img height={60} width={60} src={item.img} alt={item.name}></img>
                <span>{item.name}</span>
              </Box>
            ))
          }
        </Stack>
      </Stack>
      <Stack className='car-container'>
          <h2>Available Cars</h2>
          <Stack className='car-scroll' direction='row' gap={2} flexWrap={'wrap'} justifyContent={'center'}>
            {
              carList.flatMap((owner) => owner.cars.map((car, index) => (
                <Box className='car-box' key={index}>
                  <Stack className='imgs-section'>
                    <img style={{objectFit:'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} src={car.image_urls[0]} alt={car.carName}></img>
                  </Stack>
                  <Stack className='car-detail-section'>
                    <span>{car.carName}</span>
                    <span>{car.city}</span>
                    <span>{car.seats}</span>
                    <span>{car.price}</span>
                  </Stack>
                </Box>
              )))
            }
          </Stack>
      </Stack>
      <Stack className='about-section'>
        hello
      </Stack>
    </Stack>
   </div>
  )
}
const brandList = [
  {img: toyota,name: "Toyota"},
  {img: mahindra,name: "Mahindra"},
  {img: bmw,name: "BMW"},
  {img: honda,name: "Honda"},
  {img: w,name: "Volkswagen"},
  {img: kia,name: "Kia"},
  {img: suzuki,name: "Suzuki"},
  {img: mg,name: "MG"},
  {img: tata,name: "TATA"},
  {img: hyundai,name: "Hyundai"},
]

const carList = [
  {
    "id": 1,
    "profilePic": "",
    "name": "Harshil vaja",
    "email": "harshil@gamil.com",
    "contact": "9909955874",
    "licenseNo": "ST376463bvhds",
    "cars": [
      {
        "id": 1,
        "carName": "Honda City",
        "brandName": "Honda",
        "price": 5500,
        "seats": 5,
        "mileage": 11,
        "city": "Ahmedabad",
        "maxSpeed": 230,
        "engineOut": 650,
        "advance": "Autopilot",
        "feature": "Auto Parking",
        "registrationNo": "236467gbjkf",
        "color": "White",
        "fuel": "petrol",
        "detail": "This car is spoty look and comfortable car.A car with high specs that are rented an affordable price.",
        "image_urls": [
          car1,car12,car123 
        ]
      },
      {
        "id": 3,
        "carName": "Fortuner",
        "brandName": "Toyota",
        "price": 1000,
        "seats": 7,
        "mileage": 14,
        "city": "Ahmedabad",
        "maxSpeed": 250,
        "engineOut": 750,
        "advance": "Autopilot",
        "feature": "Auto Parking",
        "registrationNo": "236467gbjkf",
        "color": "Black",
        "fuel": "petrol",
        "detail": "This car is spoty look and comfortable car.A car with high specs that are rented an affordable price.",
        "image_urls": [
          car3,car32,car323 
        ]
      }
    ]
  },
  {
    "id": 2,
    "profilePic": "",
    "name": "Hir Parmar",
    "email": "hir@gamil.com",
    "contact": "8786428181",
    "licenseNo": "JG7567JFG",
    "cars": [
      {
        "id": 2,
        "carName": "Innova",
        "brandName": "Toyota",
        "price": 8500,
        "seats": 7,
        "mileage": 16,
        "city": "Ahmedabad",
        "maxSpeed": 190,
        "engineOut": 700,
        "advance": "Autopilot",
        "feature": "Auto Parking",
        "registrationNo": "236s5335f34",
        "color": "Black",
        "fuel": "petrol",
        "detail": "This car is spoty look and comfortable car.A car with high specs that are rented an affordable price.",
        "image_urls": [
          car2,car22,car223
        ]
      }
    ]
  },
  {
    "id": 3,
    "profilePic": "",
    "name": "Nik Patel",
    "email": "nik@gamil.com",
    "contact": "8628862186",
    "licenseNo": "JHKLGt567575",
    "cars": [
      {
        "id": 4,
        "carName": "Swift",
        "brandName": "Suzuki",
        "price": 4000,
        "seats": 5,
        "mileage": 16,
        "city": "Rajkot",
        "maxSpeed": 145,
        "engineOut": 500,
        "advance": "Autopilot",
        "feature": "Auto Parking",
        "registrationNo": "576672GJG7",
        "color": "Red",
        "fuel": "Diesel",
        "detail": "This car is spoty look and comfortable car.A car with high specs that are rented an affordable price.",
        "image_urls": [
          car4,car42,car423
        ]
      }
    ]
  }
  
]

export default HomePage
