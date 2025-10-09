import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

// Middleware untuk membaca JSON
app.use(express.json());

// CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://<NEXT_FRONTEND_DOMAIN>"],
    credentials: true, // for COOKIE
  })
);

// Routing
app.use("/api/users", userRoutes);

// Test endpoint
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
