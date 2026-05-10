const mongoose = require('mongoose')

exports.connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/newUser")
    }catch(er){
        console.log(er);
        process.exit(1);
    }
}