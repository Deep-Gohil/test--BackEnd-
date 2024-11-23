const User = require("../models/userModel")

const getAllUsers = async(req,res)=>{
    let data = await User.find();
    res.send(data)
}

const Signup = async(req,res)=>{
    const {email} = req.body;

    let user = await User.findOne({email});

    if(user){
        return res.status(400).send({message: "User already exists"})
    }
    user = await User.create(req.body)
}

module.exports = {getAllUsers,Signup}