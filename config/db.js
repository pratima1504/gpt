
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv"); 
dotenv.config({path:'./config/.env'}); 

mongoose.set("strictQuery", false);
const connectDb = async () => {
  try {
   await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};


module.exports = connectDb;
