const express = require('express');
const connectDB = require('./helpers/db/connectDb')
const authRouter = require('./routes/user/authRoute')
const cors = require('cors')
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true,
}));
app.use('/auth',authRouter)

connectDB()
app.listen(3001,()=>{
    console.log("Port 3001")
})