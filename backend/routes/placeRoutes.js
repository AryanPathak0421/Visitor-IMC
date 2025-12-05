// routes/placeRoutes.js
import express from "express";
import Place from "../models/Place.js";

const router = express.Router();

// GET /api/places?time=morning&category=food
router.get("/", async (req, res) => {
  try {
    const { time, category } = req.query;
    const filter = {};

    if (time) {
      filter.bestTime = time; // matches array containing time
    }
    if (category) {
      filter.category = category;
    }

    const places = await Place.find(filter).sort({ isPopular: -1, rating: -1 });
    res.json(places);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/places/:id
router.get("/:id", async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }
    res.json(place);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
