const customApi = require('./customApi')
const {StatusCodes} =require ('http-status-codes')

class notFound extends customApi{
    constructor(message){
        super(message)
        this.StatusCodes=StatusCodes.NOT_FOUND
        
    }
}

module.exports= notFound