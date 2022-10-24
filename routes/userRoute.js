const { default: Password } = require("antd/lib/input/Password");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({email: req.body.email});
    if(userExists)
    {
      return res.status(400).send({message:[{ message : "User already exists", success:false}]});
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    req.body.password = hashedPassword;

    const newuser = new User({
      name: req.body.name,
      email:req.body.email,
      password: hashedPassword
    });

    await newuser.save();
    req.statusCode(200).send({ message:[{ message: "User created successfully", success:true}]});

  } catch (error) {
    console.log(error);
    res.status(500).send({message: "Error creating User", success:false});
  }
});

router.post("/login", async (req,res) =>{
  try{

    const user = await User.findOne({email : req.body.email });
    if (!user){
      return res
        .status(200)
        .send( {message:[{ message : "User does not exists", success:false}]});
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if(!isMatch){
      return res.status(200).send( {message:[{ message : "Password is incorrect", success:false}]});
    }
    else{
      const token = jwt.sign( { id: user._id }, process.env.JWT_SECRET, { expiresIn:"1d"});
      res.status(200).send( {message:[{ message:"Login successful", success: true, data:token}]});
    }
  }catch(error) {
    console.log(error);
    res.status(500).send( {message:[{message:"Error logging in", success:false, error}]});
  }
}

);

module.exports = router;
