const {StatusCodes} = require('http-status-codes')
const CustomApi = require('./customApi')

class unAuthorized extends CustomApi{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.FORBIDDEN
    }
}

module.exports= unAuthorized