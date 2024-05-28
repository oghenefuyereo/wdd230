document.addEventListener("DOMContentLoaded", function () {
    const joinForm = document.getElementById("joinForm");
    const emailInput = document.getElementById("email");
    const rangeInput = document.getElementById("yearsInBusiness");
    const rangeValueSpan = document.getElementById("selectedYears");

    // Update range value display
    rangeInput.addEventListener("input", function () {
        updateSelectedYears();
    });

    // Form submission event
    joinForm.addEventListener("submit", function (event) {
        if (!isValidEmail(emailInput.value)) {
            event.preventDefault(); // Prevent form submission
            alert("Please enter a valid @byui.edu email address.");
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        return emailPattern.test(email);
    }

    // Function to update the selected years value when the range input changes
    function updateSelectedYears() {
        var selectedValue = rangeInput.value;
        rangeValueSpan.textContent = selectedValue;
    }

    // Function to set the current timestamp value in the hidden input field
    var currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    document.getElementById('timestamp').value = currentDateTime;
});
