import React from 'react';
import '../Assets/Styles/SignupPage.css'; // Make sure the path matches your file structure

function SignupPage() {
  // Add your form handlers and state management as needed

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign up to try our tools!</h2>
      <form className="signup-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Username (e-mail)" />
        <input type="password" placeholder="Password" />
        <input type="tel" placeholder="Phone number" />
        <input type="text" placeholder="Company" />
        <div className="signup-terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I agree with the terms and conditions and GDPR</label>
        </div>
        <button type="submit" className="signup-button">Sign up free →</button>
      </form>
    </div>
  );
}

export default SignupPage;