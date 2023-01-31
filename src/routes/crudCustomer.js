const Customer = require('../models/customermodel');
const router=require('express').Router();

router.post('/createCustomer',async(req,res)=>{

    try{

       const data=await Customer.create(req.body)
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

router.get('/customerDetails/',async(req,res)=>{

    try{
       //const {InventoryType,ItemName,AvailableQuantity}=req.body

       const data=await Customer.find()
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