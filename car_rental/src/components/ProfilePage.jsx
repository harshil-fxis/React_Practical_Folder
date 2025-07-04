import React from 'react'
import profile from './Assets/profile.png';
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

function ProfilePage() {
  // const userData = useSelector((state) => state.user)
  // const imageurl = userData?.user?.profilePic
  // console.log(`imageurl: ${imageurl}`)

  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const profilePic = localStorage.getItem("profilePic")
  console.log(profilePic)
  // const { userName, userEmail } = userData?.user || {}
  // console.log(`name : ${userData?.user?.userName}`)

  const logoutHandle = () => {
    // window.location.reload();
    localStorage.clear()
    navigate("/") 
  }

  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <div className='back-arrow'><IoChevronBack/></div>
        <h2>Profile</h2>
        <div className='dot-option'><BsThreeDots/></div>
      </div>
      <div className='body'> 
        <div className='body-column'>
          <div className='first-row'>
            <div className='profile-part'>
              <div className='profile-img'><img src={
                !profilePic
                  ? profile 
                  : `https://b52d-103-173-21-78.ngrok-free.app/uploads/${profilePic}`
                } 
                alt='' style={{width:"70px",height: "70px", borderRadius: "50%",objectFit: 'cover' }}/></div>
              <div className='text'>
                {/* <span className='name'>{userData?.user?.userName}</span>
                <span className='email'>{userData?.user?.userEmail}</span> */}
                
                <span className='name'>{name}</span>
                <span className='email'>{email}</span>
              </div>
            </div>
            <div className='edit-part'>
              <div className='edit-profile-button'>
                <FiEdit3/>
                <span>Edit profile</span>
              </div>
            </div>
          </div>
          <div><h4>General</h4></div>
          <div className='gap-colunm'>
            <div className='first-row'>
              <div className='merge-row'>
                <div className='back-arrow'><GoHeart/></div>
                <div>Favorite Cars</div>
              </div>
              <div className='arrow'><GrFormNext/></div>
            </div>
            <div className='first-row'>
              <div className='merge-row'>
                <div className='back-arrow'><VscHistory/></div>
                <div>Previous Rant</div>
              </div>
              <div className='arrow'><GrFormNext/></div>
            </div>
            <div className='first-row'>
              <div className='merge-row'>
                <div className='back-arrow'><IoNotificationsOutline/></div>
                <div>Notification</div>
              </div>
              <div className='arrow'><GrFormNext/></div>
            </div>
            <div className='first-row'>
              <div className='merge-row'>
                <div className='back-arrow'><TbPlugConnected/></div>
                <div>Connected to QENT Partnerships</div>
              </div>
              <div className='arrow'><GrFormNext/></div>
            </div>
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
                <div>Gelp Support</div>
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
            <br/><br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
