document.addEventListener('DOMContentLoaded', function() {
    const profileInfo = document.getElementById('profileInfo');
    const profileHeader = document.getElementById('profileHeader');
    const profilePic = document.getElementById('profilePic');
    const user = JSON.parse(localStorage.getItem('user'));
    const isNewUser = localStorage.getItem('isNewUser');

    if (user) {
        if (isNewUser === 'true') {
            profileHeader.textContent = `Welcome new to Speedy, ${user.username}!`;
            localStorage.removeItem('isNewUser'); // Remove flag after first visit
        } else {
            profileHeader.textContent = `Welcome back, ${user.username}`;
        }

        profilePic.style.backgroundImage = `url('profile.png')`;
        profileInfo.innerHTML = `
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
        `;
    } else {
        profileHeader.textContent = 'No user data found';
        profileInfo.innerHTML = '<p>No user data found.</p>';
    }
});
