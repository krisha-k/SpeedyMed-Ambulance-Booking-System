document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Store user data in localStorage
    const user = { username, email, phone, password };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isNewUser', 'true');

    window.location.href = 'profile.html'; // Redirect to profile
});
