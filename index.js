const express =  require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes')
const databaseConnect = require('./database')
const RouteNotFound = require('./utils/notFound')
const errorHandlerMiddleware = require('./utils/errorHandler')
dotenv.config({path:'./config.env'})
const cors = require('cors')

const app=express();
app.use(express.json());

app.use(cors({
    origin:'http://localhost:5173',
    methods:["GET","POST","PUT","DELETE"],
   allowedHeaders:["Content-type", "Authorization"],
  
  }))

const port = 3006


databaseConnect

app.use('/api',userRouter)

app.use(RouteNotFound)
 app.use(errorHandlerMiddleware)

app.listen(port,()=>{
  
    console.log(`server is running on port ${port}`)
})

module.exports= app
