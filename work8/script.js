document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Clear previous errors
    clearErrors();

    // Get form inputs
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    // Validate first name
    if (firstName.value.trim() === "") {
        showError(firstName, 'first-name-error');
        isValid = false;
    }

    // Validate last name
    if (lastName.value.trim() === "") {
        showError(lastName, 'last-name-error');
        isValid = false;
    }

    // Validate email
    if (!validateEmail(email.value)) {
        showError(email, 'email-error');
        isValid = false;
    }

    // Validate password
    if (password.value.trim() === "") {
        showError(password, 'password-error');
        isValid = false;
    }

    // If form is valid, submit or process further
    if (isValid) {
        // You can proceed with form submission or further processing here
        alert('Form Submitted Successfully');
    }
});

function showError(inputField, errorId) {
    inputField.classList.add('error');
    document.getElementById(errorId).style.display = 'block';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const inputFields = document.querySelectorAll('input');

    errorMessages.forEach(function(message) {
        message.style.display = 'none';
    });

    inputFields.forEach(function(input) {
        input.classList.remove('error');
    });
}

function validateEmail(email) {
    // Basic email validation using regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
