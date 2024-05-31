import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Assets/Styles/LoginPage.css';
import Navbar from '../Components/Navigationbar.js';

//import left_icon from '../Assets/left.svg'


function LoginPage({ handleLogin }) {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: inputs.email,
                password: inputs.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                handleLogin();  // This should update the login state in App.jsx
                navigate('/dashboardPage');  // Navigate to the dashboard page after successful login
            } else {
                alert('Login failed: ' + (data.message || 'Invalid credentials'));
            }
        })
        .catch(error => {
            console.error('Login Error:', error);
            alert('Login error: ' + error.message);
        });
    };
    return (

        <div>
            <Navbar />
            <div className='login-box'>
                <span className="login-title">
                    Log in to use all tools!
                </span>
                <div className="inputs">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Username (e-mail)" value={inputs.email} onChange={handleChange}/>
                    <input type="password" name="password" placeholder="Password" value={inputs.password} onChange={handleChange}/>
                    <button className="submit-login">
                        <div className="submit">Log in</div>
                        {/* <img src={left_icon} alt="" /> */}
                    </button>
                </form> 
                </div>
            </div>
        </div>
    )
}

export default LoginPage