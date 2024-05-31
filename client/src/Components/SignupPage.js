import React, { useState } from 'react';
import '../Assets/Styles/SignupPage.css';
import Navigationbar from './Navigationbar.js';


function SignupPage() {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		password: '',
		phonenumber: '',
		company: ''
	});
	const [termsAccepted, setTermsAccepted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs(values => ({ ...values, [name]: value }));
	}

	const handleCheckboxChange = (e) => {
		setTermsAccepted(e.target.checked);
	}

	const validatePassword = (password) => {
		const hasUpperCase = /[A-Z]/.test(password);
		const hasLowerCase = /[a-z]/.test(password);
		const hasNumber = /\d/.test(password);
		const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
		return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputs.email.includes('@')) {
			alert('Please enter a valid email address.');
			return;
		}
		if (!validatePassword(inputs.password)) {
			alert('Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
			return;
		}
		if (!termsAccepted) {
			alert('You must accept the terms and conditions.');
			return;
		}
		console.log(inputs.name);
		console.log(inputs.email);
		console.log(inputs.password);
		console.log(inputs.phonenumber);
		console.log(inputs.company);
		fetch('/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
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
			<Navigationbar />
			<div className="signup-container">
				<h2 className="signup-title">Sign up to try our tools!</h2>
				<form className="signup-form" onSubmit={handleSubmit}>
					<input type="text" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} />
					<input type="email" name="email" placeholder="Username (e-mail)" value={inputs.email} onChange={handleChange} />
					<input type="password" name="password" placeholder="Password" value={inputs.password} onChange={handleChange} />
					<input type="tel" name="phonenumber" placeholder="Phone number" value={inputs.phonenumber} onChange={handleChange} />
					<input type="text" name="company" placeholder="Company" value={inputs.company} onChange={handleChange} />
					<div className="signup-terms">
						<input type="checkbox" id="terms" checked={termsAccepted} onChange={handleCheckboxChange} />
						<label htmlFor="terms">I agree with the terms and conditions and GDPR</label>
					</div>
					<button type="submit" className="signup-button">Sign up</button>
				</form>
			</div>
		</div>
	);
}

export default SignupPage;
