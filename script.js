document.addEventListener('DOMContentLoaded', function(){
    //Select the form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    
    
    form.addEventListener('submit', function(event)
    {event.preventDefault(); // Prevent the form from submitting to the server the traditional way

//Get and trim input values
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

//Initialize validation variables
let isValid = true;
const messages = [];

//Username Validation
if (username.length < 3){
    isValid = false;
    messages.push('Username must be at least 3 characters long.');
}

//Email validation
if (!email.includes('@') || !email.includes('.')){
    isValid = false;
    messages.push('Email must contain "@" and "." characters.');
}

//Password validation
if (password.length < 8) {
    isValid = false;
    messages.push('Password must be at least 8 characters long.');
}

//Displaying feedback
feedbackDiv.style.display = 'block';
if (isValid) {
    feedbackDiv.textContent = 'Registration successful';
    feedbackDiv.style.color = '#28a745';
}
else {
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = '#dc3545';
}

     });
});