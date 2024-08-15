//database connection with mongoose
import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongose db is connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "VTCHCHAT",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("mongose db is connected");
  } catch (err) {
    console.log(err);
  }
};
