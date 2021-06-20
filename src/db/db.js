const mongoose = require("mongoose");

require("dotenv").config();
const db = process.env.DB_URL;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB Connection Established...")
    }catch(err){
        console.error(err.message);
    }
}

module.exports = connectMongoDB;