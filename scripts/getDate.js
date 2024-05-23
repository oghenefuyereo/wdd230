// Get the current year and update the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Populate the last modified information in the second paragraph
document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
});

// Function to toggle dark mode and switch button image
function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.getElementById('darkModeButton');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        darkModeButton.src = 'images/dark-theme-svgrepo-com.svg';
    } else {
        body.classList.add('dark-mode');
        darkModeButton.src = 'images/dark-theme-svgrepo-com.svg';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const visitsDisplay = document.querySelector(".visits");
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    if (numVisits !== 0) {
        visitsDisplay.textContent = `Visit Count: ${numVisits} times.`;
    } else {
        visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
    }

    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
});
