const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://kommurinagaprasanna_db_user:prasanna123@cluster0.uuwjfft.mongodb.net/query_token");
  console.log("MongoDB Connected");
};

module.exports = connectDB;
