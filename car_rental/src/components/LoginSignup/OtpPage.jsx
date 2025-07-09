import React, { Component, useState } from 'react'
import './Login.css'

import logo from '../Assets/Group 1529.png';
import { FaApple,FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginSuccess } from '../../redux/useSlices';
import { connect } from 'react-redux';
import withRouter from '../withRouter';
import backgroundImg from '../Assets/login&signup_Img.jpg'

// const OTPPage = () => {
//   const [otp, setotp] = useState("")
//   const [error, setError] = useState("")
//   const navigate = useNavigate()
  
//   const otpHandler = async (e) => {
//     const phone = localStorage.getItem("phone")
//     try{
//       const response = await axios.post("https://7442ac3f5bea.ngrok-free.app/verify-otp", new URLSearchParams({
//         phone,
//         otp
//       }))
//       alert(response.data.message);
//       navigate('/home');
//     }catch{
//       // setError(error.response?.data?.detail || "OTP verification failed")
//       alert("OTP verification failed")
//     }
//   }
class OTPPage extends Component {
  constructor(props) {
      super(props)
      this.state = {
         otp: '',
      }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    loginHandler = (e) => {
      const phone = localStorage.getItem("phone")
        e.preventDefault();
        axios.post('https://7442ac3f5bea.ngrok-free.app/verify-otp', new URLSearchParams({
          phone,
          otp: this.state.otp
        }))

        .then(response => {         
          alert(response.data.message)
          return this.props.navigate('/home')
        })
        .catch(error => {
          console.log(phone)
          console.log(error);
          alert("OTP verification failed.")
        })
    }

  render() {
    const {otp} = this.state;

    return (
      <div className='full-background'>
        <div className='container'>
          <form>
            <h1>OTP page</h1>
            <div className='otp-row'>
              <input type='text' value={otp} name='otp' placeholder='Enter otp' onChange={this.changeHandler}/>
              {/* <input className='otp-field' type='text'/>
              <input className='otp-field' type='text'/>
              <input className='otp-field' type='text'/>
              <input className='otp-field' type='text'/> */}
            </div>
            <div className='btn'>
              <button className='btn1' onClick={this.loginHandler}>Continue</button>
            </div>
            <div className='reset-otp-text'>Reset otp</div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(OTPPage);

