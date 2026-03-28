const mongoose = require("mongoose");

const connectToDB = async ()=>{
   try{
    await mongoose.connect("mongodb+srv://devendrasingh20025_db_user01:p0gEd9Hg4eBgbv9x@cluster.rawjkmv.mongodb.net/ProjectSmartCity?retryWrites=true&w=majority")
    console.log("Connected To DB")
   }catch(err){
    console.log("Err in connecting DB")
    console.log(err)
   }
}

module.exports=connectToDB;