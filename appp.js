// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Hide the login form and display the success message
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('loginSuccessMessage').style.display = 'block';
});

// Redirect to the next page when "Start Ride" is clicked
document.getElementById('startRideButton').addEventListener('click', function() {
    window.location.href = 'nextpage.html'; // Replace with your next page URL
});
