import React from 'react'
import './Page.css'
import { IoChevronBack } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import profile from '../components/Assets/profile.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import { Box, Stack } from '@mui/material'
import { purple } from '@mui/material/colors';
import car from '../components/Assets/fortuner1.png'
import aboutCar from '../components/Assets/about.png'

// brand
import mahindra from '../components/Assets/Brands/mahindra.png'
import suzuki from '../components/Assets/Brands/suzuki.png'
import bmw from '../components/Assets/Brands/bmw.png'
import hyundai from '../components/Assets/Brands/hyundai.png'
import toyota from '../components/Assets/Brands/toyota.png'
import kia from '../components/Assets/Brands/kia.png'
import honda from '../components/Assets/Brands/honda.png'
import tata from '../components/Assets/Brands/tata.png'
import w from '../components/Assets/Brands/w.png'
import mg from '../components/Assets/Brands/mg.png'

// car
import car1 from '../components/Assets/Cars/city1.jpg'
import car12 from '../components/Assets/Cars/city i.jpg'
import car123 from '../components/Assets/Cars/city i1.jpg'
import car2 from '../components/Assets/Cars/innova 1.jpg'
import car22 from '../components/Assets/Cars/innova i.jpg'
import car223 from '../components/Assets/Cars/innova i1.jpg'
import car3 from '../components/Assets/Cars/fortuner 1.jpg'
import car32 from '../components/Assets/Cars/fortuner i.jpg'
import car323 from '../components/Assets/Cars/fortuner i1.jpg'
import car4 from '../components/Assets/Cars/swift1.jpg'
import car42 from '../components/Assets/Cars/swift i.jpg'
import car423 from '../components/Assets/Cars/swift i1.jpg'
import car5 from '../components/Assets/Cars/thar rox1.jpg'
import car52 from '../components/Assets/Cars/roxx.jpg'
import car523 from '../components/Assets/Cars/roxx i1.jpg'
import car6 from '../components/Assets/Cars/baleno1.jpg'
import car62 from '../components/Assets/Cars/baleno i.jpg'
import car623 from '../components/Assets/Cars/baleno i1.jpg'
import car7 from '../components/Assets/Cars/xuv700.jpeg'
import car72 from '../components/Assets/Cars/xuv700 i.jpg'
import car723 from '../components/Assets/Cars/xuv700 i1.jpg'

// icon
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GiCarSeat } from "react-icons/gi";
import { LiaCitySolid } from "react-icons/lia";
import SecurityIcon from '@mui/icons-material/SecurityOutlined'
import CleanIcon from '@mui/icons-material/CleaningServicesRounded'
import MoneyIcon from '@mui/icons-material/AttachMoneyOutlined'
import MicIcon from '@mui/icons-material/HeadsetMic'
import PhoneIcon from '@mui/icons-material/EventAvailable'
import CarIcon from '@mui/icons-material/DirectionsCarFilled'
import { GrTextAlignLeft } from 'react-icons/gr';
import Facebook from '../components/Assets/Icons/facebook.png'
import Instagram from '../components/Assets/Icons/instagram.png'
import Twitter from '../components/Assets/Icons/twitter.png'
import Header from '../components/Header';
import Footer from '../components/Footer';



const HomePage = () => {
  return (
   <div className='homecontainer'>
    <Stack className='first-container'>
      <h1>Your Ride, Your Way.</h1>
      <br/>
      <Header />
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
                    <span style={{fontSize:'18px', fontWeight:500}}>{car.carName}</span>
                    <span ><LiaCitySolid/>  {car.city}   <span style={{paddingLeft:100}}> <GiCarSeat/>  {car.seats}</span></span>
                    <span></span>
                    <span><FaIndianRupeeSign/>  {car.price}</span>
                  </Stack>
                </Box>
              )))
            }
          </Stack>
      </Stack>
      <Stack className='about-section'>
        <div className='about-detail-container'>
          <Stack className='home-about-first-row'>
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
          <Stack className='home-about-img-section'>
            <img src={aboutCar}></img>
          </Stack>
          <Stack className='home-about-second-row'>
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
      </Stack>
      <Stack className='feature-section'>
        <h2>Features</h2><br/>
        <Stack sx={{flexDirection:'row',gap:10}}>
          <Stack className='feature-container'>
              <SecurityIcon sx={{width:40,height:40,bgcolor:'#9dd99cff',color:'#08651cff',padding:'10px',borderRadius:'10px'}}/>
              <h3>Security</h3>
              <span>All cars are sanitized, inspected, and tracked to ensure passenger safety.</span>
          </Stack>
          <Stack className='feature-container'>
              <CleanIcon sx={{width:40,height:40,bgcolor:'#b19cd9',color:'#3b0e82ff',padding:'10px',borderRadius:'10px'}}/>
              <h3>Clean Cars</h3>
              <span>We provide thoroughly cleaned and well-maintained cars for your comfort.</span>
          </Stack>
          <Stack className='feature-container'>
              <MoneyIcon sx={{width:40,height:40, bgcolor:'#efbdbdff',color:'#f41d1dff',padding:'10px',borderRadius:'10px'}}/>
              <h3>Affordable Price</h3>
              <span>Enjoy competetive pricing with no hidden charges.</span>
          </Stack>
          <Stack className='feature-container'>
              <MicIcon sx={{width:40,height:40, bgcolor:'#96cee8ff',color:'#0e1a82ff',padding:'10px',borderRadius:'10px'}}/>
              <h3>Security</h3>
              <span>All cars are sanitized, inspected, and tracked to ensure passenger safety.</span>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
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
        "price": 10000,
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
        "price": 4500,
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
  },
  {
    "id": 4,
    "profilePic": "",
    "name": "Malay Patel",
    "email": "malay@gamil.com",
    "contact": "9988642896",
    "licenseNo": "JG7567JFG",
    "cars": [
      {
        "id": 5,
        "carName": "Thar Rox",
        "brandName": "Mahindra",
        "price": 6000,
        "seats": 5,
        "mileage": 16,
        "city": "Gandhinagar",
        "maxSpeed": 190,
        "engineOut": 700,
        "advance": "Autopilot",
        "feature": "Auto Parking",
        "registrationNo": "8372vb6s5335f34",
        "color": "Gray",
        "fuel": "petrol",
        "detail": "This car is spoty look and comfortable car.A car with high specs that are rented an affordable price.",
        "image_urls": [
          car5,car52,car523
        ]
      },
      {
        "id": 6,
        "carName": "Baleno",
        "brandName": "Suzuki",
        "price": 4700,
        "seats": 5,
        "mileage": 18,
        "city": "Gandhinagar",
        "maxSpeed": 140,
        "engineOut": 500,
        "advance": "Autopilot",
        "feature": "Auto Parking",
        "registrationNo": "djb73s3235f34",
        "color": "Blue",
        "fuel": "Diesel",
        "detail": "This car is spoty look and comfortable car.A car with high specs that are rented an affordable price.",
        "image_urls": [
          car6,car62,car623
        ]
      },
      {
        "id": 7,
        "carName": "XUV 700",
        "brandName": "Mahindra",
        "price": 6700,
        "seats": 7,
        "mileage": 15,
        "city": "Gandhinagar",
        "maxSpeed": 140,
        "engineOut": 500,
        "advance": "Autopilot",
        "feature": "Auto Parking",
        "registrationNo": "djb73s3235f34",
        "color": "Blue",
        "fuel": "Diesel",
        "detail": "This car is spoty look and comfortable car.A car with high specs that are rented an affordable price.",
        "image_urls": [
          car7,car72,car723
        ]
      },
    ]
  },
  
]

export default HomePage
