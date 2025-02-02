const User = require("../model/User");
const response = require("../utils/responseHandler");
const { generateToken } = require("../utils/generateToken");
const bcrypt = require('bcryptjs');

const registerUser = async(req,res) =>{
    try{
        const {username,email,password,gender,dateOfBirth} = req.body;

        // check the existing with email
        const existingUser = await User.findOne({email});
        if(existingUser){
            return response(res,400,'User with this email already exists')
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            gender,
            dateOfBirth
        })
await newUser.save();

const accessToken = generateToken(newUser);

res.cookie("auth_token", accessToken,{
    httpOnly: true,

})

return response(res,201, "User registered successfully",{
    username: newUser.username,
    email: newUser.email
})


    } catch(error){
            console.log(error)
            return response(res,500, "Internal server error", error.message)
    }
}

module.exports = {registerUser}