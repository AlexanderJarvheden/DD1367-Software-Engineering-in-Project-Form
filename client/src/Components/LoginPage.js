import React from 'react';
import { useState } from 'react';
import '../Assets/Styles/LoginPage.css';
import Navigationbar from './Navigationbar.js';

//import left_icon from '../Assets/left.svg'


function LoginPage() {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(values => ({...values, [name]: value}));
    }
    
    const handleSubmit = (e) => {
		e.preventDefault();
		if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(inputs.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
		if (inputs.password.length < 5) {
			alert('Your password must be at least 8 characters long.');
			return; 
		}
		console.log(inputs.email);
		console.log(inputs.password);
        fetch('/login', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(inputs),
		})
		.then(response => {
			if (!response.ok) { // Check if the response status code was not okay
				return response.json().then(errorData => {
					// Optionally, handle specific server-sent error messages
					throw new Error(`Server responded with ${response.status}: ${errorData.message}`);
				});
			}
			return response.json(); // This will only parse the response as JSON if the response was okay
		})
		.then(data => {
			// Handle success (like redirecting to a thank you page or showing a success message)
			//window.location.href = 'http://localhost:3000/contact';
		})
		.catch((error) => {
			console.error('Error:', error);
			// Handle error (like showing an error message to the user)
			//window.location.href = 'http://localhost:3000/login';
		});
	}
    return (

        <div>
            <Navigationbar/>
            <div className='login-box' style={{top: '80px', position: 'relative'}}>
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
