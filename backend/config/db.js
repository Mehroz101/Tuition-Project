const mongoose = require("mongoose")

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/tuition"
let isDatabaseConnected = false;
 const connectDB =async () =>{
    try {
        const connection = await mongoose.connect(URI)

        if(connection){
            console.log("Database connected")
            isDatabaseConnected = true
        }
        else{
            console.log("Database connection fail")
        }
        
    } catch (error) {
      console.log(error.message)
        console.log("error while connecting to database")
    }
}
const checkDatabaseConnection = (req, res, next) => {
    if (!isDatabaseConnected) {
      return res.status(503).send(
        "Service unavailable: Database connection is not established yet. Please try again later."
      );
    }
   
    next();
  };
module.exports = {
    connectDB,
    checkDatabaseConnection
}