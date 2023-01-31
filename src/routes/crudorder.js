const Order = require('../models/ordermodel');
const router=require('express').Router();

router.post('/createOrders',async(req,res)=>{

    try{

       const data=await Order.create(req.body)
        res.status(200).json({
            status:'success',
            data:data
        })
    }catch(e){
        res.status(400).json({
            status:"fail",
            message:e.message
          })
    }
})

router.get('/orders',async(req,res)=>{

    try{

       const data=await Order.find()
        res.status(200).json({
            status:'success',
            data:data
        })
    }catch(e){
        res.status(400).json({
          status:"fail",
          message:e.message
        })
        
    }
})


module.exports=router;