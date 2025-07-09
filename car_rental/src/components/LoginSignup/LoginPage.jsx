import React, { Component, useState } from 'react'
import logo from '../Assets/Group 1529.png';
import './Login.css'
import { FaApple,FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginSuccess } from '../../redux/useSlices';
import { connect } from 'react-redux';
import withRouter from '../withRouter';
import backgroundImg from '../Assets/login&signup_Img.jpg'

class LoginPage extends Component {
  constructor(props) {
      super(props)
      this.state = {
         email: '',
         password: '',
         isChecked: false
      }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleCheckboxChange = (e) => {
      this.setState({isChecked: e.target.checked})
    }
    loginHandler = (e) => {
      localStorage.clear()
        e.preventDefault();
        axios.post('https://7442ac3f5bea.ngrok-free.app/login', {
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          
          // this.props.loginSuccess(response.data)
          const data = response.data
          const token = response.data.access_token
          const name = response.data.userName
          const email = response.data.userEmail
          const profilePic = response.data.profilePic
          const phone = response.data.phone
          
          localStorage.setItem("token", token)
          localStorage.setItem("name", name)
          localStorage.setItem("email", email)
          localStorage.setItem("profilePic", profilePic)
          localStorage.setItem("phone", phone)
          
          console.log(response.data)
          alert("Login successfully!")
          this.props.loginSuccess(data)
          return this.props.navigate('/otp')
          
          // this.props.navigate('/home')
        })
        .catch(error => {
          console.log(error);
          alert("Loging failed. Check your email and password.")
        })
    }

  render() {
    const {email, password, error} = this.state;

    return (
      <div className='full-background'>
        <div className='container'>
          <form>
            <h1>Login</h1>
            <div className='input-fields'>
              <input className='input-type' type='email' name='email' value={email} onChange={this.changeHandler} placeholder='Email/Phone Number' />
            </div>
            <div className='input-fields'>  
              <input className='input-type' type='password' name='password' value={password} onChange={this.changeHandler} placeholder='Password'/>
            </div>
            <div className='row-options'>
              <label className='remember'>
              <input  type='checkbox' checked={this.state.isChecked} onChange={this.handleCheckboxChange} />
                Remember Me
              </label>
              <a href='#' className='forgot'>Forgot Passord</a>
            </div>
            <div className='btn'>
              <button className='btn1' onClick={this.loginHandler}>Login</button>
              <button className='btn2' onClick={() => this.props.navigate('/signup')}>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = {
      loginSuccess,
}

export default connect(null, mapDispatchToProps)(withRouter(LoginPage));

