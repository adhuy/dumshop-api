import express from "express";
import userRoutes from "./routes/users.js";

const app = express();

// Middleware untuk membaca JSON
app.use(express.json());

// Routing
app.use("/api/users", userRoutes);

// Test endpoint
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
