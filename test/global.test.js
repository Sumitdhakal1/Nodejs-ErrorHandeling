
const User = require('../model/userModel');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
// require('dotenv').config();

const database = process.env.DATABASE;


const testDatabase = () => {
    beforeAll(async () => {
      await mongoose.connect(database);
    });
  
    afterAll(async () => {
      await mongoose.connection.close();
    });
  
    // afterEach(async () => {
    //   await User.deleteMany();
    // });
  };
   
  module.exports= testDatabase



