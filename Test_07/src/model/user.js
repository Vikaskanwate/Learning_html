const mongoose = require('mongoose')
const bcrypt  = require('bcrypt')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
// when we are using async there is no need to use the next()
userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password ,salt)
})

module.exports  =  mongoose.model("User",userSchema);