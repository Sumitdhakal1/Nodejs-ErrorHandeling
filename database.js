const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'})

const DB= process.env.DATABASE

 const databaseConnect= mongoose.connect(DB)
 .then(()=> console.log('connected to database'))


 module.exports= databaseConnect