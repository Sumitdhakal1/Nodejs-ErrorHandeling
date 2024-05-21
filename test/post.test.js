
const  request  = require('supertest');
const User = require('../model/userModel');
const testDatabase = require('./global.test');
const app = require('../index')

// describe('post', () => {
//   testDatabase();

//   it('should check if data is posted in database', async () => {
//     const mockUser = {
//       name: "sumit"
//     };
    
//     // Create the user in the database
//     await User.create(mockUser);
    
//     // Find the created user
//     const postedData = await User.findOne({ name: "sumit" });
    
//     // Ensure the posted data matches the mock user
//     expect(postedData.name).toEqual(mockUser.name);
//   });
// });


describe('POST/SIGNUP',()=>{
   testDatabase()
   it('should check password is hashed before saving to database',async()=>{
        const signup = await request(app).post('/api/user/signup').send({email:"sumitdhakal98@gmail.com",password:"Sumit43@"})
        expect(signup.statusCode).toBe(201)
        console.log(signup.body.password)
   }) 
})