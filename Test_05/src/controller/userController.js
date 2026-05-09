const model = require("../model/user")

exports.getAllUsers = async (req,res)=>{
    
    const users = await model.find();
    return res.send(users)
}


