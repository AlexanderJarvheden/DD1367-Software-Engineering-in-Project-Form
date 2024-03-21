import React from 'react'
import '../Assets/Styles/styles.css'
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
        <div className='landingpage-signupbox'>
          <text className='xxl-heading gradient-text'>
            Help your business to become circular!
          </text>
          <div className='landingpage-logo'>
            <img src={Logo} alt="" />
          </div>
          <text className='landingpage-darktext'>
          Your best circular assistant!
          </text>
          <div className='landingpage-email-label'>
            <img src={email}/>
            <text className='landingpage-email-text'>Enter your work email</text>
          </div>
          <div className='landingpage-signup-label'>
            <text className='landingpage-signup-text'>Sign up free</text>
            <img src={arrow}/>
          </div>
        </div>
        <div className='sneakpeak'><img src={Sneakpeak} alt=""/></div>
      </div>
    </div>
  </div>
)  
}

export default Landingpage