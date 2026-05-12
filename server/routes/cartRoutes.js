const express = require("express");

const router = express.Router();

const Cart = require("../models/Cart");

const auth =
require("../middleware/auth");


// ADD TO CART

router.post("/", auth, async(req,res)=>{

  try{

    const cart =
    await Cart.create({

      userId:req.user.id,

      products:req.body.products

    });

    res.json(cart);

  }

  catch(error){

    res.json({

      message:error.message

    });

  }

});

module.exports = router;