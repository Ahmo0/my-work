document.addEventListener('DOMContentLoaded', function() {
    var notifyButton = document.getElementById('notifyButton');
    var emailInput = document.getElementById('email');

    notifyButton.addEventListener('click', function() {
        var emailValue = emailInput.value.trim();

        if (isValidEmail(emailValue)) {
            emailInput.classList.remove('invalid');
            alert('Notification will be sent to: ' + emailValue);
        } else {
            emailInput.classList.add('invalid');
            alert('Please enter a valid email address.');
        }
    });
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});




