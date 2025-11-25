import mongoose from "mongoose";

const ScheduleItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: { type: String, required: true },
});

const EventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    imageURL: {type: String},
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },

    schedule: {
      type: [ScheduleItemSchema],
      default: [],
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model("Event", EventSchema);
