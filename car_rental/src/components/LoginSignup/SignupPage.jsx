import React, { Component, useState } from 'react'
import logo from '../Assets/Group 1529.png';
import './Login.css'
import { FaApple,FaGoogle } from "react-icons/fa";
import { useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';
import axios from 'axios'
import withRouter from '../withRouter';


class SignupPage extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name: '',
         email: '',
         password: '',
         country: '',
         phone: ''
      }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        const {name, email, password, country, phone} = this.state;
        console.log(this.state)
        axios.post('https://e4cef5192058.ngrok-free.app/signup', {
            name,email,password,country,phone})
            .then(response => {
                alert("Signup Successful!")
                console.log(response)
                this.props.navigate('/')
            })
            .catch(error => {
                alert('Try again')
                console.log(error)
            }
        )

    }
    render() {
        const {name, email, password, country, phone} = this.state;
        return(
            <div className='full-background'>
                <div className='container'>
                <form>
                    <h1>Sign Up</h1>
                    <div className='input-fields'>
                        <input className='input-type' name='name' type='text' value={name} onChange={this.changeHandler} placeholder='Full Name' />
                    </div>
                    <div className='input-fields'>  
                        <input className='input-type' name='email' type='email' value={email} onChange={this.changeHandler} placeholder='Email Address'/>
                    </div>
                    <div className='input-fields'> 
                        <input className='input-type' name='password' type='password' value={password} onChange={this.changeHandler} placeholder='Password'/>
                    </div>
                    <div className='input-fields'>
                        <input className='input-type' name='country' type='text' value={country} onChange={this.changeHandler} placeholder='Country' />
                    </div>
                    <div className='input-fields'>
                        <input className='input-type' name='phone' type='text' value={phone} onChange={this.changeHandler} placeholder='phone No.' />
                    </div>
                    <div className='btn'>
                        <button className='btn1' onClick={this.submitHandler}>Sing up</button>
                        <button className='btn2' onClick={() => this.props.navigate('/')}>Login</button>
                    </div>
                </form>
                </div>
            </div>
        )
        // return (
        // <div className='container'>
        //     <div className='header'>
        //         <div className='text'> <img src={logo} alt=''/><h2>Qent</h2></div>
        //     </div>
        //     <div><h2>Sign Up</h2></div>
        //     <div className='form'>
        //         <input className='input-field' name='name' type='text' value={name} onChange={this.changeHandler} placeholder='Full Name' />
        //         <input className='input-field' name='email' type='email' value={email} onChange={this.changeHandler} placeholder='Email Address'/>
        //         <input className='input-field' name='password' type='password' value={password} onChange={this.changeHandler} placeholder='Password'/>
        //         <input className='input-field' name='country' type='text' value={country} onChange={this.changeHandler} placeholder='Country' />
        //     </div>
        //     <div className='btn'>
        //         <button className='btn1' onClick={this.submitHandler}>Sing up</button>
        //         <button className='btn2' onClick={() => this.props.navigate('/')}>Login</button>
        //     </div>
        //     <div className='divider'>
        //         <span>Or</span>
        //     </div>
        //     <div className='btn-with'>
        //         <button className='btn3'><FaApple className='icon1'/> Apple pay</button>
        //         <button className='btn4'><FaGoogle className='icon2'/> Google pay</button>
        //     </div>
        //     <div className='btm-text'>
        //         <div>Already have an account?</div>
        //         <a href='#' className='forgot'>Login.</a>
        //     </div>
        //     </div>
        // )
    }
}

export default withRouter(SignupPage)
