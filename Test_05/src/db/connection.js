const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/user")
        console.log(`mongodb connected successfully on`,conn.connection.port);
        
    }catch(err){
        console.log(err);
    }

}

module.exports = connectDB;