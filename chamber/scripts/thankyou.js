document.addEventListener("DOMContentLoaded", function () {
    const joinForm = document.getElementById("joinForm");
    const emailInput = document.getElementById("email");
    const rangeInput = document.getElementById("yearsInBusiness");
    const rangeValueSpan = document.getElementById("selectedYears");


    rangeInput.addEventListener("input", function () {
        updateSelectedYears();
    });


    joinForm.addEventListener("submit", function (event) {
        if (!isValidEmail(emailInput.value)) {
            event.preventDefault();
            alert("Please enter a valid @byui.edu email address.");
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        return emailPattern.test(email);
    }


    function updateSelectedYears() {
        var selectedValue = rangeInput.value;
        rangeValueSpan.textContent = selectedValue;
    }


    var currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    document.getElementById('timestamp').value = currentDateTime;
});
