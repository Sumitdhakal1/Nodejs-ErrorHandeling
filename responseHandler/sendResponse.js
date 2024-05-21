const { response } = require("..");
const {StatusCodes}=require('http-status-codes')
class sendResponse extends response{
    constructor(data){
        this.data= data
        this.StatusCodes= StatusCodes.ACCEPTED
    }
}

module.exports=sendResponse