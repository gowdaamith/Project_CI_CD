const express = require("express");

const app = express();

// Environment variables (VERY IMPORTANT)
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Node CI/CD App";

// Home route
app.get("/", (req, res) => {
  res.json({
    message: `Welcome to ${APP_NAME}`,
    status: "Running",
    timestamp: new Date()
  });
});

// Health check route (used by Docker / Jenkins / Load Balancer)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 ${APP_NAME} running on port ${PORT}`);
});
