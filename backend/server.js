const express = require('express')
const connectDB = require('./helpers/db/connectDb')
const app = express()
connectDB()
app.listen(3001,()=>{
    console.log("Port 3001")
})