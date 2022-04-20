const mongoose=require("mongoose");
const mongoURL="mongodb+srv://shalem:shalem@cluster0.kikmv.mongodb.net/pizza-app?retryWrites=true&w=majority"


mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection;

db.on("connected",()=>{
    console.log("DB Connection succesfull");
})
db.on("error",(error)=>{
    console.log(error);
});

module.exports=mongoose;
      