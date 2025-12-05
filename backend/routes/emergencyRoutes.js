// routes/emergencyRoutes.js
import express from "express";
import EmergencyContact from "../models/EmergencyContact.js";

const router = express.Router();

// GET /api/emergency
router.get("/", async (req, res) => {
  try {
    const contacts = await EmergencyContact.find({});
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
