const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');


app.use('/', express.static(path.join(__dirname, '../src/login/')));
app.use('/home', express.static(path.join(__dirname, '../src/home/')));

app.use('/advice_generator', express.static(path.join(__dirname, '../src/advice_generator/')));
app.use('/binary_search', express.static(path.join(__dirname, '../src/binary_search/')));
app.use('/Cart_challenge', express.static(path.join(__dirname, '../src/Cart_challenge/')));
app.use('/Order_Summary', express.static(path.join(__dirname, '../src/Order_Summary/')));
app.use('/social_links_profile', express.static(path.join(__dirname, '../src/social_links_profile/')));



module.exports = app;