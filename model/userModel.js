const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const userSchema = mongoose.Schema({
    email:{
       type:String
    },   
    name:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    address:{
        type:String
    },
    password:{
        type:String,
        select:false
    }
})

userSchema.pre('save',async function(next){
    const user=this
    // if(!user.isModified('password')) return(next)
    try{
      const hashedPassword =await bcrypt.hash(user.password, 12)
      user.password= hashedPassword
    }catch(err){
        console.log('error',err)
    }
})

const User = mongoose.model('UnitTestingWithJest',userSchema)

module.exports=User