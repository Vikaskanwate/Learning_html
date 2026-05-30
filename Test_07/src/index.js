const express = require('express');
const { connectDB } = require('./db/connection');
const app = express();
connectDB();




module.exports = app;