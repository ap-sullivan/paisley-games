import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

const Test = mongoose.model("Test", testSchema);

export default Test;
