const express = require('express')
const app = express();

app.use(express.json());

let users = [{ id: 1, name: "Arun", age: 23 }];

app.post("/users",(req,res)=>{
    const {name,age} = req.body
    if(!name || !age){
        return res.status(400).json({erorr:"name and age empty"})
    }

    const newUser = {id : users.length + 1,
        name,
        age
    }
    users.push(newUser)

    return res.status(201).json(newUser)
})

app.get("/users",(req,res)=>{
    return res.status(200).json(users)
})



app.get("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    if(!id){
        return res.status(400).json({error:"id not valid"})
    }

    const userId = users.find(u => u.id === id)

    return res.status(200).json(userId)

})

app.put("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const updateUser = req.body;
    console.log(id);
    
    if(!id){
        return res.status(200).json({error:"id not found"})
    }

    if(Object.keys(updateUser).length === 0){
        return res.status(400).json({error:"add fields"})
    }


    const user = users.find(u => u.id === id)
    console.log(user);
    
    if(!user){
        return res.status(400).json({error:"user not found with id"})
    }

    user.age = updateUser.age || user.age

    user.name = updateUser.name || user.name

    return res.status(200).json(user)

})

app.delete("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    if(!id){
        return res.status(400).json({error:"id not found"})
    }


    const user = users.filter(u => u.id !== id)

    return res.status(200).json({user,message:"User deleted"})
})

module.exports = app;
