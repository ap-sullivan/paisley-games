import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    Subtitle: { type: String },
    Article: { type: String, required: true },
    Image_1: { type: String },
    Image_2: { type: String },
    Image_3: { type: String },
    author: { type: String },
  },
  {
    timestamps: { createdAt: true, updatedAt: false }, 
    collection: "articles"
  }
);

export default mongoose.model("article", ArticleSchema);
