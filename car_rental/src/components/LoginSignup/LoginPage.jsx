import React, { Component, useState } from 'react'
import logo from '../Assets/Group 1529.png';
import './Login.css'
import { FaApple,FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
      super(props)
      this.state = {
         username: '',
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
        e.preventDefault();
        // username: "mor_2314",
        //password: "83r5^_"
        axios.post('https://fakestoreapi.com/auth/login', {
          username: this.state.username,
          password: this.state.password
          // email: this.state.email,
          // password: this.state.password
        })
        .then(response => {
          console.log(response.data)
          alert("Login successfully!")
          // this.props.navigate('/home')
        })
        .catch(error => {
          console.log(error);
          alert("Loging failed. Check your email and password.")
        })
    }



  render() {
    const {username, password, error} = this.state;
    return (
      <div className='container'>
        <div className='header'>
          <div className='text'> <img src={logo} alt=''/><h2>Qent</h2></div>
        </div>
        <div className='header1'><h2>Welcome Back <br/>Ready to hit the road.</h2></div>
        <div className='form'>
          <input className='input-field' type='text' name='username' value={username} onChange={this.changeHandler} placeholder='Email/Phone Number' />
          <input className='input-field' type='password' name='password' value={password} onChange={this.changeHandler} placeholder='Password'/>
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
          <button className='btn2' onClick={() => this.props.navigate('/signup')}>Sing up</button>
        </div>
        <div className='divider'>
          <span>Or</span>
        </div>
        <div className='btn-with'>
          <button className='btn3'><FaApple className='icon1'/> Apple pay</button>
          <button className='btn4'><FaGoogle className='icon2'/> Google pay</button>
        </div>
        <div className='btm-text'>
          <div>Dont't have an account?</div>
          <a href='#' className='forgot'>Sign Up.</a>
          

        </div>
      </div>
    )
  }
}

export default LoginPage

