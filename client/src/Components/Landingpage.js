import React from 'react'
import '../Assets/Styles/landingpage.css'
import Navigationbar from './Navigationbar'
import Sneakpeak from '../Assets/Images/Landingpage_sneakpeak.png'
import Logo from '../Assets/Images/Landingpage_logo.png'
import email from '../Assets/Icons/Email.svg'
import arrow from '../Assets/Icons/left_arrow.svg'

const Landingpage = () => {
  return (
  <div>
    <Navigationbar />
    <div className='landingpage-background'>
      <div className='landingpage-innerbackground'>
        <div className='landingpage-signupbox d-grid gap-10'>
          <div className='xxl-heading gradient-text'>
            Help your business<br/>to become circular!
          </div>
          <div className='landingpage-logo'>
            <img src={Logo} alt="" />
          </div>
          <div className='landingpage-darktext'>
          Your best circular assistant !
          </div>
          <button className='landingpage-email-label'>
            <img src={email}/>
            <text className='landingpage-email-text'>Enter your work email</text>
          </button>
          <button className='landingpage-signup-label'>
            <text className='landingpage-signup-text'>Sign up free</text>
            <img src={arrow}/>
          </button>
        </div>
        <div className='sneakpeak'><img src={Sneakpeak} alt=""/></div>
      </div>
    </div>
  </div>
)  
}

export default Landingpage