const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS middleware to enable CORS
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

// Endpoint to receive and log data
app.post('/store-info', (req, res) => {
    const { username, password } = req.body;
    console.log(`Received data - Username: ${username}, Password: ${password}`);
    res.send('Data received and logged');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
