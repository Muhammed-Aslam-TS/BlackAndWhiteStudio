import mongoose from "mongoose";
import dbOptions from "../types/connectionInterface";

const MongoUrl:string = "mongodb+srv://aslam5588:aslam5588@cluster0.re2ljg7.mongodb.net/black&white"
// const MongoUrl:string = "mongodb://127.0.0.1:27017/black&white"

const dbOpt: dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectDb = async () => {
    try {
      // mongodb connection string
      mongoose.set("strictQuery", false);
       await mongoose.connect(MongoUrl,dbOpt);
      // eslint-disable-next-line no-console
      console.log("MongoDB connected");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      process.exit(1);
    }
  };
  export default connectDb;