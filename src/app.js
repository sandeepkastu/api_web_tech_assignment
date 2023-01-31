const express=require('express');
const mongoose=require('mongoose')
const router1=require('./routes/crudinventory')
const router2=require('./routes/crudCustomer')
const router3=require('./routes/crudorder')

const app=express();

app.use(express.json());


mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/web_tech' ,{useNewUrlParser:true,useUnifiedTopology:true})

app.use(router1);
app.use(router2);
app.use(router3)

app.listen(3005,()=>{console.log('server running  at 3005')})