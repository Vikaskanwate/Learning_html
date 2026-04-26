const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World")
})

// routes parameters
app.get("/user/:id",(req,res)=>{
    const userId = req.params.id
    res.send(`user id is ${userId}`)
})
// query parameters
app.post("/user",(req,res)=>{
    const userData = req.query.name
    res.send(`username is ${userData}`)

})
// json data
app.post("/user/info/",(req,res)=>{
    const userInfo = req.body
    res.send(`username ${userInfo.name} , age ${userInfo.age}`)
})

// hitting the port 3000
app.listen(port,()=>{
    console.log("application started");
    
})