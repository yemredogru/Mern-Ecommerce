const express = require('express');
const connectDB = require('./helpers/db/connectDb')
const authRouter = require('./routes/user/authRoute')
const app = express()
app.use('/auth',authRouter)
connectDB()
app.listen(3001,()=>{
    console.log("Port 3001")
})