const admin = (req,res,next)=>{

  try{

    if(req.user.role !== "admin"){

      return res.status(403).json({

        message:"Admin Access Only"

      });

    }

    next();

  }

  catch(error){

    res.json({

      message:error.message

    });

  }

};

module.exports = admin;