const User = require('../model/userModel');
const {createSendToken, decodeToken} = require('../utils/jwtToken')

exports.signup=async(req,res)=>{
    const{email,password}=req.body;
       if(!email){
       return res.send('please enter your email')
       }
       if(!password){
        return res.send('please enter your password')
       }

    const newUser = await User.create({email,password})

    res.status(201).json({
        status:"success",
        data:{
            user:newUser
        }
    })
}


exports.login=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.send('please enter your email or password')
    }
    const user = await User.findOne({email}).select('+password')
    const token =await createSendToken(User.id)


    res.status(200).json({
        status:'success',
        user,
        token
    })
}

exports.protect=(req,res,next)=>{
   let token;
   if(req.headers.authorization 
    && req.headers.authorization.startsWith('Bearer ')){
    token =req.headers.authorization.split(' ')[1];
   }
   if(!token){
    return next(new Error('you are logged out! please login'))
   }
   const data = process.env.JWT_SECRET
   decodeToken(token,data,next)

}