import "dotenv/config";
import express from "express";
import blogRoutes from "./routes/blogsRoute.js";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";

// Express App
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for logging Traffic
app.use(morgan("dev"));

// Routes
app.use("/api/blogs", blogRoutes);

// Error handler
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

app.use((error, req, res, next) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  if (error instanceof Error) errorMessage = error.message;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
