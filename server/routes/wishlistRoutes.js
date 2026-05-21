const express = require("express");

const router = express.Router();

const Wishlist =
require("../models/Wishlist");

const auth =
require("../middleware/auth");


// GET WISHLIST

router.get("/", auth, async(req,res)=>{

  try{

    let wishlist =
    await Wishlist.findOne({

      userId:req.user.id

    });

    if(!wishlist){

      wishlist =
      await Wishlist.create({

        userId:req.user.id,

        products:[]

      });

    }

    res.json(wishlist);

  }

  catch(error){

    res.json({

      message:error.message

    });

  }

});


// SAVE WISHLIST

router.post("/", auth, async(req,res)=>{

  try{

    const wishlist =
    await Wishlist.findOneAndUpdate(

      {

        userId:req.user.id

      },

      {

        products:req.body.products

      },

      {

        new:true,

        upsert:true

      }

    );

    res.json(wishlist);

  }

  catch(error){

    res.json({

      message:error.message

    });

  }

});

module.exports = router;