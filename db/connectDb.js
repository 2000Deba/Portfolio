import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        console.log("⚡ Using existing MongoDB connection");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Portfolio",
        });
        isConnected = true;
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
    }
};
