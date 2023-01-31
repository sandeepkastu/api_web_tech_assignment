const Inventory = require('../models/inventory');
const router=require('express').Router();

router.post('/createinventory',async(req,res)=>{

    try{

       const data=await Inventory.create(req.body)
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

router.get('/getinventory/',async(req,res)=>{

    try{

       const data=await Inventory.find()
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
router.get('/getAvailableQuantity/:Item_Name',async(req,res)=>{

    try{
    

       const data=await Inventory.find(req.params)
        res.status(200).json({
            status:'success',
            Quantity:data.Available_Quantity
        })
    }catch(e){
        res.status(400).json({
            status:"fail",
            message:e.message
          })
    }
})

module.exports=router;