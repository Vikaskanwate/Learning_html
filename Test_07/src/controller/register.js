
const mongoose =  require('mongoose')

const registerUser = async (req,res)=>{
    try{
        const User = new User(req.body);
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    }catch(err){
        res.status(400).json({ error: "Registration failed" });
    }
}
