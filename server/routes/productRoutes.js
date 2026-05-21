const auth =
require("../middleware/auth");

const admin =
require("../middleware/admin");

const express = require("express");

const router = express.Router();

const Product =
require("../models/Product");


// GET PRODUCTS

router.get("/", async(req,res)=>{

  try{

    const products =
    await Product.find();

    res.json(products);

  }

  catch(error){

    res.json({

      message:error.message

    });

  }

});


// ADD PRODUCT

router.post(
  "/",
  auth,
  admin,
  async(req,res)=>{

  try{

    const product =
    await Product.create({

      name:req.body.name,

      price:req.body.price,

      description:req.body.description,

      image:req.body.image,

      category:req.body.category

    });

    res.json({

      message:"Product Added",

      product

    });

  }

  catch(error){

    res.json({

      message:error.message

    });

  }

});


// DELETE PRODUCT

router.delete(
  "/:id",
  auth,
  admin,
  async(req,res)=>{

  try{

    await Product.findByIdAndDelete(

      req.params.id

    );

    res.json({

      message:"Product Deleted"

    });

  }

  catch(error){

    res.json({

      message:error.message

    });

  }

});

module.exports = router;