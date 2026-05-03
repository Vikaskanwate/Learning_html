const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
let users = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 30 }
  ];



app.get("/users",(req,res)=>{
    if(users.length === 0){
        return res.status(404).send({message:"users not found"})
    }
    res.status(200).json({
        users:users
    })
})

app.get("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    
    const user = users.find(u => u.id === id)
    if(id != user){
        return res.status(400).send("Id does not exists")
    }
    res.status(200).json({
        user:user,
        Message:"User found successfully."
    })
})

app.post("/users",(req,res)=>{

    const {name,age} = req.body;

    if(!name || !age){
        return res.status(500).send("name or age is not given")
    }
    
    const newUser ={
        id:users.length + 1,
        name:req.body.name,
        age:req.body.age
    }
    if (users.some(u=>u.name===newUser.name)){
        return res.status(400).send("User exists already")
    }
    users.push(newUser)
    return res.status(201).json({
        user:users,
        message:"User created successfully"
        
    })
})


app.put("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const  user = users.find(u => u.id === id)
    console.log(user);
    
    if(user){
        user.name = req.body.name || user.name;
        user.age = req.body.age || user.age;
        return res.status(200).json(user)
    }
    return res.status(400).send(`user with id : ${req.params.id} does not exists`)
})


app.delete("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const  user = users.find(u => u.id === id)
    if(user){
        const a = users.filter(u => u.id !== id)
        return res.status(200).json({
            user:users,
            message:"user deleted successfully"
        })
    }
    return res.status(404).send("User not found");
})


app.listen(port,()=>{
    console.log("application is running on port",port);
})

