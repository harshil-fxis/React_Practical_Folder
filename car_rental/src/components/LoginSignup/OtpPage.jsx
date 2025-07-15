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
  constructor(props) {
      super(props)
      this.state = {
         otp: ['','','',''],
         timer: 60
      }
      this.inputRef = [React.createRef(), React.createRef(), React.createRef(), React.createRef()]
    }

    componentDidMount() {
      this.startTimer()
    }

    startTimer = () => {
      this.timerInterval = setInterval(() => {
        this.setState((prevState) => {
          if(prevState.timer <= 1){
            clearInterval(this.timerInterval)
            return {timer : 0 }
          }
          return { timer: prevState.timer -1 }
        })
      }, 1000)
    }

    textfieldChange = (e, index) => {
      const { value } = e.target
      if(!/^[0-9]?$/.test(value)) return
      const newOtp = [...this.state.otp]
      newOtp[index] = value
      this.setState({otp: newOtp}, () => {
        if(value && index < 3) {
          this.inputRef[index + 1].current.focus()
        }
      })
    }

    handleKeyDown = (e, index) => {
      if(e.key === 'Backspace' && !this.state.otp[index] && index > 0 ){
        this.inputRef[index - 1].current.focus()
      }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    loginHandler = async (e) => {
      const phone = localStorage.getItem("phone")
      e.preventDefault();
      const otp = this.state.otp.join("")

      const formData = new FormData()
      formData.append("phone", phone)
      formData.append("otp", otp)
      try{
        const response = await axios.post('https://8971f0061eff.ngrok-free.app/verify-otp', formData)
        console.log(formData)      
        alert(response.data.message)
        this.props.navigate('/home')
      } catch(error) {
          console.log(phone)
          console.log(error);
          alert("OTP verification failed.")
        }
    }

    resetOtpHandler = async (e) => {
      const phone = localStorage.getItem("phone")
      e.preventDefault();

      const formData = new FormData()
      formData.append("phone", phone)
      try{
        const response = await axios.post('https://8971f0061eff.ngrok-free.app/reset-otp', formData)
        console.log(formData)      
        alert(response.data.message)
        console.log(response.data.new_otp)
        this.setState({ otp: ["","","",""], timer: 60})
      } catch(error) {
          console.log(error);
          alert("OTP reset failed.")
        }
    }

  render() {
    const {otp , timer } = this.state;
    const phone = localStorage.getItem("phone")

    return (
      <div className='full-background'>
        <div className='container'>
          <form>
            <h1>OTP page</h1>
            <span className='phone-text'>We have send a code to | +{phone}</span>
            <br/><br/><br/>
            <div className='otp-row'>
              {otp.map((digit, index) => (
                <input 
                  key={index} 
                  maxLength={1} 
                  value={digit} 
                  ref={this.inputRef[index]} 
                  className='otp-field' 
                  type='text' 
                  onChange={(e) => this.textfieldChange(e, index)} 
                  onKeyDown={(e) => this.handleKeyDown(e, index)}/>
              ))}
              <p className='timer'>{timer > 0 ? `Time Remaining: 00:${timer < 10 ? '0' + timer: timer}` : "OTP expired"}</p>
            </div>
            <div className='btn'>
              <button className='btn1' onClick={this.loginHandler}>Continue</button>
            </div>
            <div className='otp-div'>
              <button className='reset-otp-text' onClick={this.resetOtpHandler}>
                Reset otp
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(OTPPage);

