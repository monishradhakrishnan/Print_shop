import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
//Database connection
//GET api/users/:phone
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB connection error:", error));

    app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use ("/api/users", userRoutes);
app.listen(5000,()=>{console.log("Server is running on port 5000!")});