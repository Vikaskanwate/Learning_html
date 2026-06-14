const express = require('express');
const { connectDB } = require('./db/connection');
const router = require('./routes/user_routes')
const app = express();
connectDB();
app.use(express.json())

app.use("",router)

module.exports = app;