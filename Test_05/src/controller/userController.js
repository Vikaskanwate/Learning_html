const { default: mongoose } = require("mongoose");
const User = require("../model/user")

exports.getAllUsers = async (req,res)=>{
    try{
        const allUsers = await User.find({});
        return res.status(200).json(allUsers);
    }catch(err){
        console.log(err);
        return res.status(500).json({error:err.message})
    }
}


exports.createUser = async (req,res)=>{
    try{
        const {userName,password} = req.body  
        if(!userName || !password){
            return res.status(400).json({error:"missing fields"})
        }
        const newUser = await User.create({userName,password})

        return res.status(201).json(newUser)

    }catch(err){    
        console.log(err);
        return res.status(500).json({error:err.message})
    }

}

exports.getUserById = async (req,res)=>{
    try{
        const id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error:"invalid id"})
        }
        const found = await User.findById(id);
        if(!found){
            return res.status(400).json({error:"User with id not found"})
        }
        return res.status(200).json(found)
    }catch(err){
        console.log(err);
        return res.status(500).json({error:err.message})
    }
}


exports.updateUsers = async (req,res)=>{
    try{
        const id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error:"invalid id"})
        }
        const updateData = req.body;
        if(!updateData || Object.keys(updateData).length === 0){
            return res.status(400).json({error:"missing field"})
        }
        const updatedData = await User.findByIdAndUpdate(id,updateData,{new:true});
        if(!updatedData){
            return res.status(404).json({error:"user not found"})
        }
        return res.status(200).json(updatedData);
    }catch(err){
        console.log(err);
        return res.status(500).json({error:err.message})
    }
}

exports.deleteById = async (req,res)=>{
    try{
        const id = req.params.id;
        if(!id || !mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({erorr:"invalid id"})
        }
        await User.findByIdAndDelete(id);
        return res.status(200).send({message:"User deleted"})
    }catch(err){
        console.log(err);
        return res.status(500).json({error:err.message})
    }
}