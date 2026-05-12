const express = require("express");

const router = express.Router();

const Order =
require("../models/Order");

const auth =
require("../middleware/auth");


// PLACE ORDER

router.post("/", auth, async(req,res)=>{

  try{

    const order =
    await Order.create({

      userId:req.user.id,

      products:req.body.products,

      total:req.body.total,

      paymentMethod:"COD"

    });

    res.json({

      message:"Order Placed",

      order

    });

  }

  catch(error){

    res.json({

      message:error.message

    });

  }

});

module.exports = router;