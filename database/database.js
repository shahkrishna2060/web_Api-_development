const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Database connected!");
  });
};

module.exports = connectDatabase
