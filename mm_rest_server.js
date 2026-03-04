// Marvelmind REST API example
// Just returns echo of the request

const express = require("express");
const app = express();

const PORT = 8080;

// Middleware to parse JSON
app.use(express.json());

// Basic health check
app.get("/", (req, res) => {
  res.json({
    status: "running",
    message: "Marvelmind test REST API Server is working"
  });
});

// Main POST endpoint to process incoming data via REST API
app.post("/api/process", (req, res) => {
  const receivedData = req.body;

  console.log("Received JSON:", JSON.stringify(receivedData, null, 2));

  // Example response JSON
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(req.body, null, 2));
});

// Start server
app.listen(PORT, () => {
  console.log(`"Marvelmind test REST API running on http://localhost:${PORT}`);
});
