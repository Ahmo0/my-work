document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const queryType = document.querySelector('input[name="queryType"]:checked').value;
    const message = document.getElementById('message').value;
    const consent = document.getElementById('consent').checked;
    console.log({
        firstName,
        lastName,
        email,
        queryType,
        message,
        consent
    });
    alert('Form submitted successfully!');
});
