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
          <div className='inner-content'>
            <div className='xxl-heading gradient-text'>
              Help your business<br />to become circular!
            </div>
            <div className='landingpage-logo'>
              <img src={Logo} alt="" />
            </div>
            <div className='landingpage-darktext'>
              Your best circular assistant !
            </div>
            <button className='landingpage-email-label'>
              <img src={email} alt="Email icon" />
              <span className='landingpage-email-text'>Enter your work email</span>
            </button>
            <button className='landingpage-signup-label'>
              <span className='landingpage-signup-text'>Sign up free</span>
              <img src={arrow} alt="Arrow icon" />
            </button>
          </div>
          <div className='sneakpeak'>
            <img src={Sneakpeak} alt="Sneakpeak image" />
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Landingpage