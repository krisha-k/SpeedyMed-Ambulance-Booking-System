// Function to initialize the map
function initMap() {
    // Set the initial view of the map (latitude, longitude and zoom level)
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Array of user requests (replace with dynamic data if needed)
    const userRequests = [
        { name: "Karthik", phone: "9498454593", address: "bharathi nagar, chrompet", lat: 51.505, lon: -0.09 },
        { name: "kayal", phone: "8124966644", address: "SRM Ramapuram, chennai", lat: 51.515, lon: -0.1 },
        { name: "Mithra", phone: "7538870969", address: "ganapathi nagar, alapakkam", lat: 51.495, lon: -0.08 }
    ];

    // Add green markers to the map for each user request
    userRequests.forEach(request => {
        var marker = L.circle([request.lat, request.lon], {
            color: 'green',
            fillColor: '#0f0',
            fillOpacity: 0.5,
            radius: 200
        }).addTo(map);
    });

    // Populate the user list with request details and an "Accept" button
    const userList = document.getElementById('userList');
    userRequests.forEach(request => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <p><strong>Name:</strong> ${request.name}</p>
            <p><strong>Phone:</strong> ${request.phone}</p>
            <p><strong>Address:</strong> ${request.address}</p>
            <button class="accept-btn" onclick="acceptRequest('${request.name}')">Accept</button>
        `;
        userList.appendChild(userDiv);
    });
}

// Function to handle accepting a request
function acceptRequest(name) {
    // Find the user div where the accept button was clicked
    const userDivs = document.querySelectorAll('.user');
    userDivs.forEach(userDiv => {
        if (userDiv.innerHTML.includes(name)) {
            // Change the button text to "Accepted"
            const acceptButton = userDiv.querySelector('.accept-btn');
            acceptButton.textContent = 'Accepted';
            acceptButton.disabled = true; // Disable the button after acceptance

            // Add the "Have a safe ride!" message below the button
            const messageBox = document.createElement('div');
            messageBox.style.border = '1px solid #28a745';
            messageBox.style.padding = '10px';
            messageBox.style.marginTop = '10px';
            messageBox.style.color = '#28a745';
            messageBox.style.backgroundColor = '#f0fff0';
            messageBox.textContent = 'Have a safe ride!';

            // Append the message box to the userDiv
            userDiv.appendChild(messageBox);

            // Display the accepted message box in the center of the page
            showAcceptedMessage();
        }
    });
}

// Function to show an accepted message box in the center of the page
function showAcceptedMessage() {
    // Create an overlay div
    const overlay = document.createElement('div');
    overlay.id = 'acceptedOverlay';
    overlay.innerHTML = `
        <div id="acceptedMessage">
            <p>Request Accepted!</p>
            <p>Have a safe ride!</p>
            <button onclick="closeAcceptedMessage()">Close</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

// Function to close the accepted message box
function closeAcceptedMessage() {
    const overlay = document.getElementById('acceptedOverlay');
    if (overlay) {
        overlay.remove();
    }
}

// Initialize the map and the user list
initMap();
