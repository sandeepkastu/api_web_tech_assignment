const mongoose=require('mongoose');

const customer=new mongoose.Schema({
    Customer_id:{type:String ,unique:true},
    Customer_name:String,
    Email:{type:String,unique:true}

})

const Customer=new mongoose.model('Customer Table',customer);

module.exports=Customer;