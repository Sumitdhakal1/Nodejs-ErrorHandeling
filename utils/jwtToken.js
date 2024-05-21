const jwt = require('jsonwebtoken');
const dotenv= require('dotenv')

dotenv.config({path:'../config.env'})

exports.createSendToken =(userid)=>{
  return new Promise((resolve,reject)=>{
    const payload ={
        id:userid
    }
    const secrete = process.env.JWT_SECRET;
    const options ={
        expiresIn:process.env.JWT_EXPIRES_IN
    }

    jwt.sign(payload,secrete,options,(err, token)=>{
        if(err){
            reject(err)
        }else{
            resolve(token)
        }
    })

  })
}

exports.decodeToken = async(token, secrete,next)=>{
    const decodeToken = jwt.verify(token,secrete,(err,payload)=>{
        if(err){
            return next(new Error('incorrect token', err))
        }else{
            payload
            next()
        }
    })
    return decodeToken
}