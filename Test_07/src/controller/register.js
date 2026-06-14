const User = require('../model/user')
exports.registerUser = async (req,res)=>{
    try{
        const user = new User(req.body);
        console.log(req.body);
        
        const newuser = await user.save();
        console.log(newuser);
        
        res.status(201).json({ message: "User registered successfully" ,newuser});
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}
