document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the current date
    var currentDate = new Date();

    // Retrieve the last visit date from localStorage
    var lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        // Calculate the difference in milliseconds between current and last visit
        var msDifference = currentDate - new Date(lastVisit);

        // Calculate the difference in days
        var daysDifference = Math.floor(msDifference / (1000 * 60 * 60 * 24));

        // Display appropriate message based on daysDifference
        var message;
        if (daysDifference === 0) {
            message = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = "You last visited " + daysDifference + " days ago.";
        }
    } else {
        // First visit scenario
        message = "Welcome! Let us know if you have any questions.";
    }

    // Display the message in the specified h1 element
    var h1Element = document.querySelector(".visit-event h1");
    if (h1Element) {
        h1Element.textContent = message;
    }

    // Update localStorage with current visit date
    localStorage.setItem("lastVisit", currentDate.toString());
});
