// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import placeRoutes from "./routes/placeRoutes.js";
import emergencyRoutes from "./routes/emergencyRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Indore Visitor API is running...");
});

app.use("/api/places", placeRoutes);
app.use("/api/emergency", emergencyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
