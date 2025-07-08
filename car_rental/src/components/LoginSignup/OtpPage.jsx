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

class OTPPage extends Component {
  otpHandler = (e) => {
    return this.props.navigate('/home')
  }
  render() {
    return (
      <div className='full-background'>
        <div className='container'>
          <form>
            <h1>OTP page</h1>
            <div className='opt-row'>
              <input className='otp-field' type='number'/>
              <input className='otp-field' type='number'/>
              <input className='otp-field' type='number'/>
              <input className='otp-field' type='number'/>
            </div>
            <div className='btn'>
              <button className='btn1' onClick={this.otpHandler}>Continue</button>
            </div>
            <div className='reset-otp-text'>Reset otp</div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(OTPPage);

