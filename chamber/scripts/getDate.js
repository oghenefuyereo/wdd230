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

