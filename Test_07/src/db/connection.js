const mongoose = require('mongoose')

exports.connectDB = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/newUser")
        console.log('mongodb connected successfully',conn.connection.port);
    }catch(er){
        console.log(er);
        process.exit(1);
    }
}