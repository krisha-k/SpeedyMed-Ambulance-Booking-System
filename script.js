// script.js

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const storedUser = JSON.parse(localStorage.getItem('user'));

            console.log('Login attempt:', { username, password, storedUser });

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                localStorage.removeItem('isNewUser'); // Clear the new user flag
                window.location.href = 'profile.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;

            const user = { username, email, phone, password };
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isNewUser', 'true'); // Set flag for new user
            window.location.href = 'profile.html';
        });
    }
});

