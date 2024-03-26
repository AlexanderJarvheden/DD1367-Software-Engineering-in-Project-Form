import React from 'react'
import './LoginPage.css'
import left_icon from '../Assets/left.svg'


const LoginPage = () => {


    return (
        <div className='login-box'>
            <div className="login-title">
                Log in to use all tools!
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="email" placeholder="Username (e-mail)" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="submit-login">
                    <div className="submit">Log in</div>
                    <img src={left_icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
