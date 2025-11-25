import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Test from "./models/TestModels.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001   ;

// middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected to", process.env.MONGO_URI.split('/').pop()))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// Test route 
app.get("/test-db", async (req, res) => {
  console.log("Route /test-db hit");  // <-- log when route is accessed
  try {
    const newTest = new Test({ name: "Backend Test", value: 123 });
    const saved = await newTest.save();
    console.log("Saved document:", saved);  // <-- log saved document

    const allTests = await Test.find();
    console.log("All documents:", allTests);  // <-- log all documents

    res.json(allTests);
  } catch (err) {
    console.error("MongoDB route error:", err);
    res.status(500).json({ error: err.message });
  }
});