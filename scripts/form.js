document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const email = document.getElementById('email');
    const message = document.getElementById('formmessage');
    const rangeInput = document.getElementById('rating');
    const rangeValue = document.getElementById('rangeValue');

    confirmPassword.addEventListener('input', () => {
        if (confirmPassword.value !== password.value) {
            message.textContent = "❗Passwords DO NOT MATCH!";
            message.style.display = "block";
            confirmPassword.style.backgroundColor = "#fff0f3";
        } else {
            message.style.display = "none";
            confirmPassword.style.backgroundColor = "#fff";
        }
    });

    form.addEventListener('submit', (event) => {
        let valid = true;

        if (confirmPassword.value !== password.value) {
            valid = false;
            message.textContent = "❗Passwords DO NOT MATCH!";
            message.style.display = "block";
            confirmPassword.style.backgroundColor = "#fff0f3";
            confirmPassword.focus();
        }

        if (!email.validity.valid || !isValidBYUIEmail(email.value)) {
            valid = false;
            message.textContent = "❗Please enter a valid BYUI email address!";
            message.style.display = "block";
            email.style.backgroundColor = "#fff0f3";
            email.focus();
        }

        // Range input validation
        const rangeVal = parseInt(rangeInput.value);
        if (isNaN(rangeVal) || rangeVal < 1 || rangeVal > 10) {
            valid = false;
            message.textContent = "❗Please select a number between 1 and 10.";
            message.style.display = "block";
            rangeInput.style.backgroundColor = "#fff0f3";
            rangeInput.focus();
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    // Update range value display on input
    rangeInput.addEventListener('input', () => {
        updateRangeValue(rangeInput.value);
    });

    // Function to update the displayed range value
    function updateRangeValue(value) {
        rangeValue.textContent = value;
    }

    // Function to validate BYUI email format
    function isValidBYUIEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        return emailPattern.test(email);
    }
});
