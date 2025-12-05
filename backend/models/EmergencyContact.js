// models/EmergencyContact.js
import mongoose from "mongoose";

const emergencyContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    type: {
      type: String,
      enum: ["police", "medical", "fire", "women", "other"],
      default: "other",
    }
  },
  { timestamps: true }
);

const EmergencyContact = mongoose.model(
  "EmergencyContact",
  emergencyContactSchema
);
export default EmergencyContact;
