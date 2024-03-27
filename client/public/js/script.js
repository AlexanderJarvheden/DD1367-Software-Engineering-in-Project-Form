// Listen for input on signup page
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    var name = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var password = document.querySelector('input[type="password"]').value;
    var phone = document.querySelector('input[type="tel"]').value;
    var company = document.querySelector('input[type="text"][placeholder="Company"]').value;
    var termsChecked = document.querySelector('input[type="checkbox"]').checked;

    // Basic validation
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return; 
    }
    if (password.length < 5) {
        alert('Your password must be at least 8 characters long.');
        return; 
    }

    console.log("Validation passed", {name, email, password, phone, company, termsChecked});

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            phone: phone,
            company: company,
            termsAccepted: termsChecked,
        }),
    })
    .then(response => {
        if (!response.ok) { // Check if the response status code was not okay
            return response.json().then(errorData => {
                // Optionally, handle specific server-sent error messages
                throw new Error(`Server responded with ${response.status}: ${errorData.message}`);
            });
        }
        console.log("Nu är vi nära");
        return response.json(); // This will only parse the response as JSON if the response was okay
    })
    .then(data => {
        console.log('Success:', data);
        // Handle success (like redirecting to a thank you page or showing a success message)
        window.location.href = 'http://localhost:3000/signup/contact';
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error (like showing an error message to the user)
        window.location.href = 'http://localhost:3000/signup/login';
    });
});