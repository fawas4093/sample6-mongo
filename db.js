const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.mongodb_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB