const mongoose = require("mongoose");

const connectToDB = async ()=>{
   try{
    await mongoose.connect(process.env.URI)
   //  console.log(process.env.URI)
    console.log("Connected To DB")
   }catch(err){
    console.log("Err in connecting DB")
    console.log(err)
   }
}

module.exports=connectToDB;