const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Serve static files like HTML, CSS, JS
app.use(express.static('public'));

// Body parser to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "driverlogin.html");
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login details:', { email, password });
    res.redirect("welcome.html");
});

// Handle sign-up form submission
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    console.log('Sign-Up details:', { email, password });
    res.redirect("welcome.html");
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

