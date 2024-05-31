import React from 'react'
import '../Assets/Styles/PostSignUpPage.css'
import Navbar from '../Components/Navigationbar.js';

const PostSignUpPage = () => {
  return (
    <div>
    <Navbar />
    <div className='mainContainerPostSignup'>
        <span className='thankYouText'>Thanks for signing up!</span>
        <span className='instructionsText'>You can now log in with your username (e-mail) and password!</span>
    </div>
    </div>
  )
}

export default PostSignUpPage