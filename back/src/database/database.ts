import mongoose, { ConnectOptions } from "mongoose";
import config from "../config";
(async () => {
  try {
    const db = await mongoose.connect(
      `mongodb://${config.LOCAL_HOST}/${config.MONGO_DATABASE}`
    );
    console.log("Database is connected to:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
