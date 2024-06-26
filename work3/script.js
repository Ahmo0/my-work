// script.js
document.getElementById('emailform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the email input value
    var email = document.getElementById('email').value;

    // Optional: Validate email format if needed
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Redirect to the next page (replace 'next-page.html' with your actual next page URL)
    window.location.href = 'next-page.html';
});

function validateEmail(email) {
    // Regular expression for basic email validation
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


