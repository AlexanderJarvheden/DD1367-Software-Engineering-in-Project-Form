import React from 'react';
import { useState } from 'react';
import '../Assets/Styles/SignupPage.css';

function SignupPage() {
	const [value, setValue] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		console.log('Submitted: ' + value)
	}
	return (
		<div className="signup-container">
		<h2 className="signup-title">Sign up to try our tools!</h2>
			<form className="signup-form" onSubmit={handleSubmit}>
				<input type="text" placeholder="Name" value={value} onChange={(e) => setValue(e.target.value)}/>
				<input type="email" placeholder="Username (e-mail)" />
				<input type="password" placeholder="Password" />
				<input type="tel" placeholder="Phone number" />
				<input type="text" placeholder="Company" />
				<div className="signup-terms">
					<input type="checkbox" id="terms" />
					<label htmlFor="terms">I agree with the terms and conditions and GDPR</label>
				</div>
				<button type="submit" className="signup-button">Sign up</button>
			</form>
		</div>
	);
}
export default SignupPage;