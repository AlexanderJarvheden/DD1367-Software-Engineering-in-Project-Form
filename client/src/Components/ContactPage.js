import React from 'react'
import '../Assets/Styles/ContactPage.css'
import logo from '../Assets/Images/plannerLogo.png'

import Navbar from '../Components/Navigationbar.js';

/* import Navigationbar from './Navigationbar.js'; */




const ContactPage = () => {
  return (
    <div>

    <Navbar />
    <div className='mainContainerContact'>

      /*<Navigationbar/>
      <div className='mainContainerContact'> */

        <div className='leftContainer'>
          <span className='rainbowText'>Want to get in contact?</span>
          <span className='descriptionText'>Send us an e-mail if you have questions about our service or if you want to collaborate</span>
          <span className='emailText'>loopbox.innovation@gmail.com</span>
        </div>
        <div className='image'>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactPage