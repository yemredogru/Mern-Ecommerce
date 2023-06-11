const UserModel = require('../../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const checkUser = async(req,res,next)=>{
    const email=req.body.email,password=req.body.password
    const user = UserModel.findOne({email:email},async function(err,user){
        if(err){
            res.status(404).json({err_message:err})
        }
        if(!user){
            res.status(404).json({user:'Not Found'})
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if(isEqual){
            var token = jwt.sign(
                {
                  email: email,
                  id: user._id,
                  fname: user.firstName,
                  lname: user.lastName,
                },
                "secrettoken",
                { expiresIn: "72h" }
              );
              return { userId: user._id, token: token, tokenExpiration: 1 };
        }
        return { userId: "", token: "", tokenExpiration: 72 };
    })

}

module.exports = {checkUser}
