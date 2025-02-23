document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const username = document.getElementById('username').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Create an object with form data
        const bookingData = {
            username,
            phoneNumber,
            date,
            time
        };

        // Save data to local storage
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(bookingData);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        // Optionally, you can clear the form
        form.reset();

        // Notify the user
        alert('Booking has been saved!');
    });
});


