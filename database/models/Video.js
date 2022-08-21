import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 1,
      max: 255,
    },
    description: {
      type: String,
      required: true,
      min: 1,
    },
    likes: {
      type: Array,
      default: [],
    },
    dislikes: {
      type: Array,
      default: [],
    },
    views: {
      type: Number,
      default: 0,
    },
    ownerId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Video || mongoose.model("Video", videoSchema);
