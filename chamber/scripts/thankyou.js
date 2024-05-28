document.addEventListener('DOMContentLoaded', function() {
    // Get the current date and time in ISO format
    var currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // Set the value of the hidden input field with id 'timestamp'
    document.getElementById('timestamp').value = currentDateTime;
});
