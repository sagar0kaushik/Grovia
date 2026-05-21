const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");


// SIGNUP

router.post("/signup", async(req,res)=>{

  try{

    const {name,email,password} = req.body;

    const existingUser =
    await User.findOne({email});

    if(existingUser){

      return res.json({

        message:"User Already Exists"

      });

    }

    const hashedPassword =
    await bcrypt.hash(password,10);

    const user =
    await User.create({

      name,
      email,
      password:hashedPassword

    });

    res.json({

      message:"Signup Success",
      user

    });

  }

  catch(error){

    res.json({

      message:error.message

    });

  }

});


// LOGIN

router.post("/login", async(req,res)=>{

  try{

    const {email,password} = req.body;

    const user =
    await User.findOne({email});

    if(!user){

      return res.json({

        message:"User Not Found"

      });

    }

    const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

    if(!isMatch){

      return res.json({

        message:"Wrong Password"

      });

    }

    const token =
    jwt.sign(

      {
        id:user._id,
        role:user.role
      },

      process.env.JWT_SECRET,

      {
        expiresIn:"7d"
      }

    );

    res.json({

      message:"Login Success",

      token,

      user

    });

  }

  catch(error){

    res.json({

      message:error.message

    });

  }

});

module.exports = router;