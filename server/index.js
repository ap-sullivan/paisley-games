/* eslint-disable no-undef */

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import eventsRouter from "./routes/events.js";
import articlesRoute from "./routes/articles.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001   ;

// middleware
app.use(cors());
app.use(express.json());


// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected to", process.env.MONGO_URI.split('/').pop()))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// default route
app.get("/", (req, res) => {
  res.send("Backend is up.");
});

// events route
app.use("/api/events", eventsRouter);

// articles route
app.use("/api/articles", articlesRoute);
