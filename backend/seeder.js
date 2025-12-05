// seeder.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Place from "./models/Place.js";
import EmergencyContact from "./models/EmergencyContact.js";
import places from "./data/places.js";
import emergencyContacts from "./data/emergencyContacts.js";

dotenv.config();

const importData = async () => {
  try {
    await connectDB();
    await Place.deleteMany();
    await EmergencyContact.deleteMany();

    await Place.insertMany(places);
    await EmergencyContact.insertMany(emergencyContacts);

    console.log("Data Imported!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
