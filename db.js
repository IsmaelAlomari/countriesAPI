const mongoose = require("mongoose");

const connectDB = async () => {
  const uri =
    "mongodb://admin:123@cluster0-shard-00-00.hh9ok.mongodb.net:27017,cluster0-shard-00-01.hh9ok.mongodb.net:27017,cluster0-shard-00-02.hh9ok.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-m78j5a-shard-0&authSource=admin&retryWrites=true&w=majority";

  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
  }
  console.log("hello");
};

module.exports = connectDB;
