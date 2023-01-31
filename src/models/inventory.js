const mongoose=require('mongoose');

const inventory=new mongoose.Schema({
    Inventory_id:{type:String,unique:true},
    Inventory_Type:String,
    Item_Name:String,
    Available_Quantity:Number

})

const Inventory=new mongoose.model('Inventory Table',inventory);

module.exports=Inventory;