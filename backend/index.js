import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogRoutes.js";
import cors from "cors";

// Express App
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handeling CORS POLICY
app.use(cors());

// Connect to MongoDB and Start Server
mongoose
  .connect(mongoDBURL)
  .then((result) => {
    console.log("Connected to mongodb");
    app.listen(PORT, () => {
      console.log(`Server listening on localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.use("/blogs", blogRoutes);
