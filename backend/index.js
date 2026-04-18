const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const aiRoutes = require("./src/routes/ai.routes");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use("/src", express.static(path.join(__dirname, "../frontend/src")));

// API route
app.use("/ai", aiRoutes);

// serve index.html
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/public/index.html")
  );
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
