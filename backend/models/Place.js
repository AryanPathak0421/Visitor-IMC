// models/Place.js
import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: {
      type: String,
      enum: [
        "temple",
        "food",
        "park",
        "shopping",
        "historic",
        "viewpoint",
        "other",
      ],
      default: "other",
    },
    bestTime: [
      {
        type: String,
        enum: ["morning", "evening", "night", "weekend"],
      },
    ],
    address: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    imageUrl: { type: String },
    rating: { type: Number, default: 4.5 },
    isPopular: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", placeSchema);
export default Place;
