import React from 'react'
import '../screens/Page.css'
import { Stack } from '@mui/material'
import Facebook from '../components/Assets/Icons/facebook.png'
import Instagram from '../components/Assets/Icons/instagram.png'
import Twitter from '../components/Assets/Icons/twitter.png'

const Footer = () => {
  return (
    <div>
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

export default Footer