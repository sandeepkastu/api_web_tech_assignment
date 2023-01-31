const mongoose=require('mongoose');

const order=new mongoose.Schema({
    Customer_id:{type:String,unique:true},
    Inventory_id:{type:String,unique:true},
    item_name:String,
    Quantity:Number

})

const Order=new mongoose.model('Order Table',order);

module.exports=Order;