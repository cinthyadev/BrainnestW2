import dotenv from "dotenv";
dotenv.config();

export default {
  LOCAL_HOST: process.env.MONGO_HOST || "localhost",
  MONGO_DATABASE: process.env.MONGO_DATABASE || "ps-app",
  PORT: process.env.PORT || 3001,
  // USER: process.env.USER || '',
  // USER_PASSWORD: process.env.USER_PASSWORD || '',
  // MONGO_HOST: process.env.MONGO_HOST || ''
};
