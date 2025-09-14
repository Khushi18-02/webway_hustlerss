const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/AuthRoutes");

dotenv.config();
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const startServer = async () => {
  try {
    await connectDB();
  } catch (err) {
    console.error("DB connection failed, but server will still run.");
  }

  const app = express();

  // =======================
  // Middleware
  // =======================
  app.use(express.json()); // parse JSON bodies
  app.use(express.urlencoded({ extended: true })); // parse form-urlencoded bodies

  // CORS - only enable in development
  if (process.env.NODE_ENV !== "production") {
    app.use(
      cors({
        origin: "http://localhost:5173", // Vite dev server
        credentials: true,
      })
    );
  }

  // =======================
  // API routes
  // =======================
  app.use("/api/auth", authRoutes);

  // =======================
  // Serve frontend (React build)
  // =======================
  const frontendPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(frontendPath));

  // Handle React routing (anything not starting with /api goes to frontend)
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.resolve(frontendPath, "index.html"));
  });

  // =======================
  // Start Server
  // =======================
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
};

startServer();
