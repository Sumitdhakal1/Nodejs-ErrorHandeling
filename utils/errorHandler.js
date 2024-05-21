const {StatusCodes} = require('http-status-codes')

const CustomErrorHandler = (err,req,res,next)=>{

    let CustomError ={
    statusCode :err.statusCode ||StatusCodes.INTERNAL_SERVER_ERROR ,
    msg :err.message || 'something went wrong try again later',
    }


if(err.name === 'CastError'){
    CustomError.msg =`no user found with id ${err.value}`;
    CustomError.statusCode = 404
}

return res.status(CustomError.statusCode).json({msg: CustomError.msg})

};

module.exports = CustomErrorHandler