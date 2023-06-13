const UserModel = require('../../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const checkUser = async(req,res,next)=>{
    const email=req.body.email,password=req.body.password
    await UserModel.findOne({email:email}).then(async function(err,user){
        if(err){
            res.status(401).json({err_message:err})
        }
        if(!user || user == undefined){
            res.status(404).json({user:'Not Found'})
        }
        else{
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
              res.status(200).json({ userId: user._id, token: token, tokenExpiration: 1 });
        }
        res.status(401).json({ userId: "", token: "", tokenExpiration: 72 });
        }
    })

}

module.exports = {checkUser}
