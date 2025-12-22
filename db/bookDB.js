const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/bookDB")
        .then(() => console.log("Mongoose connected"))
        .catch((err) => console.log("Mongoose connection error",err));
}

module.exports = connectDB;