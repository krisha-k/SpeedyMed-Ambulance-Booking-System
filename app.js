// Signup Form Submit
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Signup form submitted');
    // Redirect to create profile page after signup
    window.location.href = 'create-profile.html';
});

// Profile Form Submit
document.getElementById('profileForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect profile details
    const name = document.getElementById('driverName').value;
    const phone = document.getElementById('phoneNumber').value;
    const ambulanceNumber = document.getElementById('ambulanceNumber').value;
    const photo = document.getElementById('photo').files[0];
    const license = document.getElementById('license').files[0];

    console.log('Profile Form Submit: ', { name, phone, ambulanceNumber, photo, license });

    if (photo && license) {
        // Save profile details in localStorage
        localStorage.setItem('driverName', name);
        localStorage.setItem('phoneNumber', phone);
        localStorage.setItem('ambulanceNumber', ambulanceNumber);

        // Convert photo and license to URLs and save in localStorage
        const photoUrl = URL.createObjectURL(photo);
        localStorage.setItem('photoUrl', photoUrl); // Save the URL of the photo
        localStorage.setItem('photoName', photo.name); // Save the file name of the photo

        const licenseUrl = URL.createObjectURL(license);
        localStorage.setItem('licenseUrl', licenseUrl); // Save the URL of the license

        console.log('Profile data saved in localStorage');
        
        // Redirect to view profile page
        window.location.href = 'view-profile.html';
    } else {
        alert('Please upload both the photo and driving license!');
    }
});

// View Profile Page - Load Details
if (window.location.pathname.includes('view-profile.html')) {
    console.log('View Profile page loading...');
    // Check if data exists
    const driverName = localStorage.getItem('driverName');
    const phoneNumber = localStorage.getItem('phoneNumber');
    const ambulanceNumber = localStorage.getItem('ambulanceNumber');
    const photoUrl = localStorage.getItem('photoUrl');
    const photoName = localStorage.getItem('photoName');
    const licenseUrl = localStorage.getItem('licenseUrl');

    console.log('Retrieved data from localStorage: ', { driverName, phoneNumber, ambulanceNumber, photoUrl, photoName, licenseUrl });

    if (driverName && phoneNumber && ambulanceNumber && photoUrl && photoName && licenseUrl) {
        // Populate the fields
        document.getElementById('profileName').textContent = driverName;
        document.getElementById('profilePhone').textContent = phoneNumber;
        document.getElementById('profileAmbulance').textContent = ambulanceNumber;

        // Create a clickable link for the uploaded photo
        const photoLink = document.createElement('a');
        photoLink.href = photoUrl;
        photoLink.textContent = photoName;
        photoLink.target = '_blank'; // Open the photo in a new tab
        document.getElementById('profilePhoto').appendChild(photoLink);

        // Create a clickable link for the driving license
        document.getElementById('profileLicense').href = licenseUrl;
    } else {
        alert('No profile data found. Please create your profile first.');
        window.location.href = 'create-profile.html';
    }
}
