const express = require('express')
const connectDB = require('./db/connection')
const router = require("../src/routes/userRoutes")
const app = express()
connectDB()
app.use(express.json())
const port = 3000

app.use("/api",router);

app.listen(port,(req,res)=>{
    console.log('application is running on port',port);
    
})
