import mongoose from "mongoose";

const main = async () => {
  mongoose.connect(
    "mongodb+srv://admin:1qaz2wsx3edc@cluster0.jxefpos.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("connected to mongoDB");
};

export default main;
