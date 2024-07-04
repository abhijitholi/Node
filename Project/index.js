import express from 'express';
//const express = require('express');
//import { DataBase } from './db.js'; // Assuming this file exports a function to connect to the database

const app = express();

// Connect to the database and start the server
// DataBase().then(() => {
    app.listen(8080, () => {
        console.log("Server is started on port 8080");
    });
// }).catch(err => {
//     console.error("Error connecting to the database:", err);
// });

