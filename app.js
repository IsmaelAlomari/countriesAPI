const express = require("express");
const cors = require("cors");

// Mongo DB
const connectDB = require("./db");
connectDB();

// Routes
const countriesRoutes = require("./routes/country");

// Create App instance
const app = express();
app.use(cors());

app.use(express.json());

// Routes
app.use(countriesRoutes);

// Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Path Not Found" });
});

// Error Middleware
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
