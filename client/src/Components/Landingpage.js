import React from 'react'
import { Outlet } from 'react-router-dom'
import '../Assets/Styles/landingpage.css'
import Navigationbar from './Navigationbar'
import Sneakpeak from '../Assets/Images/Landingpage_sneakpeak.png'
import Logo from '../Assets/Images/Landingpage_logo.png'
import email from '../Assets/Icons/Email.svg'
import arrow from '../Assets/Icons/left_arrow.svg'

const Landingpage = () => {
  return (
	<>
	<div>
		<Outlet/>
	</div>
	{
	<div>
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
            
            <div type='email' className='landingpage-email-label'>
              <img src={email} alt="Email icon" />
              <input type="email" placeholder="Enter your work email" className='landingpage-email-text'/>
            </div>
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
	}
	</>
  )
} 

export default Landingpage