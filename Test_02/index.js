const express = require('express')
const app = express();
app.use(express.json());

const port = 3000

app.get("/",(req,res)=>{
    res.send("Hii working")
})

app.get("/user/:id",(req,res)=>{
    const userId = req.params.id
    res.send(`userId = ${userId}`)
})

app.post("/user",(req,res)=>{
    res.send(`user : ${req.query.name}`)
})

app.put("/user/:id",(req,res)=>{
    res.send(`replacing ${req.params.id} with ${JSON.stringify(req.body)}`)
})

app.delete("/user/:id",(req,res)=>{
    res.send(`deleting use ${req.params.id}`)
})


app.listen(port,()=>{
    console.log("application started on port",port);
})