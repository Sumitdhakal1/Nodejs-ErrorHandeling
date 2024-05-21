const customApi = require('./customApi')
const {StatusCodes}= require('http-status-codes')

class badRequest extends customApi{
    constructor(message){
        super(message)
        this.StatusCodes=StatusCodes.BAD_REQUEST
    }
}

module.exports = badRequest