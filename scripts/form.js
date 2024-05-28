document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const email = document.getElementById('email');
    const message = document.getElementById('formmessage');
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

        if (!email.validity.valid) {
            valid = false;
            message.textContent = "❗Please enter a valid BYUI email address!";
            message.style.display = "block";
            email.style.backgroundColor = "#fff0f3";
            email.focus();
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    window.updateRangeValue = (value) => {
        rangeValue.innerText = value;
    };
});
