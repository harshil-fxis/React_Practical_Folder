import React, { useEffect, useState } from 'react'
import profile from '../components/Assets/profile.png';
import { IoChevronBack } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { GrFormNext } from "react-icons/gr";
import { VscHistory } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbPlugConnected } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { BsPersonAdd } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { LuHeadset } from "react-icons/lu";
import { BiLogOutCircle } from "react-icons/bi";
import './Page.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/useSlices';
import logo from '../components/Assets/Group 1529.png';
import { NavLink } from 'react-router-dom';
import { Box, Button, Input, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios'
import { loginSuccess } from '../redux/useSlices'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { API } from '../components/LoginSignup/config';

function ProfilePage() {
  const userData = useSelector((state) => state.user)
  const imageurl = userData?.user?.profilePic
  console.log(`imageurl: ${imageurl}`)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  // const name = localStorage.getItem("name")
  // const email = localStorage.getItem("email")
  // const profilePic = localStorage.getItem("profilePic")
  // console.log(profilePic)

  const { userName, userEmail } = userData?.user || {}
  console.log(`name : ${userData?.user?.userName}`)
  const fullName = userData?.user?.userName ?? ''
  const nameParts = fullName.split(" ")
  const firstName = nameParts[0] ?? ''
  const lastName = nameParts[1] ?? ''
  const id = userData?.user?.user
  console.log(`id: ${id}`)
  console.log(`name : ${userData?.user?.name}`)

  const [isEditable, setEditable] = useState(false)
  const [userDatas, setUserDatas] = useState({
    id: id,
    name: '',
    surname: '',
    email: '',
    phone: ''
  })
  const logoutHandle = () => {
    // window.location.reload();
    localStorage.clear()
    navigate("/") 
  }
  const handleEdit = () => {
    setEditable(true)
  }
  const handleCancel = () => {
    setEditable(false)
  }
  const handleInputChange = (e) => {
    const { name , value } = e.target
    setUserDatas((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSave = async () => {
    try{
      const response = await axios.put(API.EDIT_PROFILE,userDatas)
      alert('Profile updated successfully')
      setEditable(false)
      // this.props.loginSuccess(userDatas)
      dispatch(loginSuccess(userDatas))
    }catch(error){
      console.log(console.error)
      alert('Failed to update profile')
    }
  }
  return (
    <div className='homecontainer'>
      <Stack className='profile-first-container'>
        <h1>Your Ride, Your Way.</h1>
        <br/>
        <Header />
      </Stack>
      <div className='body'> 
        <div className='body-column'>
          
          <div className='row-formate'>
            <div className='first-div'>
              <div className='first-row'>
                <div className='profile-part'>
                  <div className='profile-img'><img src={
                    !imageurl
                      ? profile 
                      : `${API.PROFILE_IMG}/${imageurl}`
                    } 
                    alt='' style={{width:"100px",height: "100px", borderRadius: "50%",objectFit: 'cover' }}/>
                  </div>
                  <div className='profile-text'>
                    <span className='name'>{userData?.user?.userName == null ? userData?.user?.name + " " + userData?.user?.surname : userData?.user?.userName}</span>
                    <span className='email'>{userData?.user?.userEmail == null ? userData?.user?.email : userData?.user?.userEmail}</span>
                    
                    {/* <span className='name'>{name}</span>
                    <span className='email'>{email}</span> */}
                  </div>
                </div>
                <div className='edit-part' onClick={handleEdit}>
                  <div className='edit-profile-button'>
                    <FiEdit3/>
                    <span>Edit profile</span>
                  </div>
                </div>
              </div>
              <Stack sx={{width:'100%', marginTop:'30px',alignItems:'start', bgcolor: !isEditable ? 'rgba(240, 247, 244, 1)' : 'rgba(233, 241, 253, 1)', padding:'20px', boxSizing:'border-box', borderTopRightRadius:'120px',borderBottomLeftRadius:'120px'}}>
                <Typography sx={{fontSize:'25px', fontWeight:'bold', color: !isEditable ? 'rgba(189, 192, 190, 1)' : 'balck'}}>Edit Profile</Typography>
                <Stack sx={{width:'100%',marginTop:'10px',display:'grid', flexDirection:'row', gridTemplateColumns:'repeat(2, 1fr)', gap:'20px',padding:'0px'}}>
                  <Box sx={{flexDirection:'column'}}>
                    <label style={{fontSize:'13px', color: !isEditable ? 'rgba(189, 192, 190, 1)' : 'black'}}>First Name:</label><br/>
                    <TextField name='name' value={userDatas.name} onChange={handleInputChange} disabled={!isEditable} style={{height:'40px',width:'100%', marginTop:'5px',borderRadius:'10px',border:'none'}} type='text' placeholder={userData?.user?.userName == null ? userData?.user?.name : firstName} size='small' variant='outlined'/>
                  </Box>
                  <Box sx={{flexDirection:'column'}}>
                    <label style={{fontSize:'13px', color: !isEditable ? 'rgba(189, 192, 190, 1)' : 'black'}}>Last Name:</label><br/>
                    <TextField name='surname' value={userDatas.surname} disabled={!isEditable} onChange={handleInputChange} style={{height:'40px', width:'100%', marginTop:'5px',borderRadius:'10px',border:'none'}} type='text' placeholder={userData?.user?.userName == null ? userData?.user?.surname : lastName} size='small'/>
                  </Box>
                  <Box sx={{flexDirection:'column'}}>
                    <label style={{fontSize:'13px', color: !isEditable ? 'rgba(189, 192, 190, 1)' : 'black'}}>Email Adress:</label><br/>
                    <TextField name='email' value={userDatas.email} disabled={!isEditable} onChange={handleInputChange} style={{height:'40px', width:'100%', marginTop:'5px',borderRadius:'10px',border:'none'}} type='email' placeholder={userData?.user?.userEmail == null ? userData?.user?.email : userData?.user?.userEmail} size='small'/>
                  </Box>
                  <Box sx={{flexDirection:'column'}}>
                    <label style={{fontSize:'13px', color: !isEditable ? 'rgba(189, 192, 190, 1)' : 'black'}}>Phone No.:</label><br/>
                    <TextField name='phone' value={userDatas.phone} disabled={!isEditable} onChange={handleInputChange} style={{height:'40px', width:'100%', marginTop:'5px',borderRadius:'10px',border:'none'}} type='tel' placeholder={userData?.user?.phone} size='small'/>
                  </Box>
                </Stack>
                <Stack sx={{width:'100%', alignItems:'center', justifyContent:'center', gap:'50px', marginTop:'30px' ,flexDirection:'row'}}>
                  <Button disabled={!isEditable} onClick={handleCancel} variant='outlined' color='primary' >Cancle</Button>
                  <Button disabled={!isEditable} onClick={handleSave} variant='contained' color='primary' >Save</Button>
                </Stack>
              </Stack>
            
            </div>

            
            <div className='second-div'>
              <div><h4>General</h4></div>
              <div className='gap-colunm'>
                <div className='first-row'>
                  <div className='merge-row'>
                    <div className='simbol'><GoHeart/></div>
                    <div>Favorite Cars</div>
                  </div>
                  <div className='arrow'><GrFormNext/></div>
                </div>
                <div className='first-row'>
                  <div className='merge-row'>
                    <div className='simbol'><VscHistory/></div>
                    <div>Previous Rant</div>
                  </div>
                  <div className='arrow'><GrFormNext/></div>
                </div>
                <div className='first-row'>
                  <div className='merge-row'>
                    <div className='simbol'><IoNotificationsOutline/></div>
                    <div>Notification</div>
                  </div>
                  <div className='arrow'><GrFormNext/></div>
                </div>
                <div className='first-row'>
                  <div className='merge-row'>
                    <div className='simbol'><TbPlugConnected/></div>
                    <div>Connected to QENT Partnerships</div>
                  </div>
                  <div className='arrow'><GrFormNext/></div>
                </div>
                <div><h4>Saport</h4></div>
              <div className='gap-colunm'>
                <div className='first-row'>
                  <div className='merge-row'>
                    <div className='back-arrow'><IoSettingsOutline/></div>
                    <div>Setting</div>
                  </div>
                  <div className='arrow'><GrFormNext/></div>
                </div>
                <div className='first-row'>
                  <div className='merge-row'>
                    <div className='back-arrow'><IoLanguageOutline/></div>
                    <div>Languages</div>
                  </div>
                  <div className='arrow'><GrFormNext/></div>
                </div>
                <div className='first-row'>
                  <div className='merge-row'>
                    <div className='back-arrow'><BsPersonAdd/></div>
                    <div>Invite Friends</div>
                  </div>
                  <div className='arrow'><GrFormNext/></div>
                </div>
                <div className='first-row'>
                  <div className='merge-row'>
                    <div className='back-arrow'><CgFileDocument/></div>
                    <div>Private policy</div>
                  </div>
                  <div className='arrow'><GrFormNext/></div>
                </div>
                <div className='first-row'>
                  <div className='merge-row'>
                    <div className='back-arrow'><LuHeadset/></div>
                    <div>Help Support</div>
                  </div>
                  <div className='arrow'><GrFormNext/></div>
                </div>
                <button className='logout-btn' onClick={logoutHandle}>
                  <div className='first-row'>
                  <div className='merge-row'>
                    <div className='back-arrow'><BiLogOutCircle/></div>
                    <div>Log out</div>
                  </div>
                  <div className='arrow'><GrFormNext/></div>
                </div>
                </button>
              </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
