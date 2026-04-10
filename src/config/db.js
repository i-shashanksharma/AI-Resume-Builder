import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

  } catch (error) {
    console.error("DB Error:", error.message);
    process.exit(1); // server band kar dega agar DB connect na ho
  }
};

export default connectDB;