const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const appRouter = require("./routes/router");
require("dotenv").config();

const app = express();

// CORS Middleware
app.use(
  cors({
    origin: "*",
  })
);

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define Static Files Path

app.use("/api", appRouter);
app.use(
  "/public",
  express.static(path.join(__dirname, "..", "client", "public"))
);
app.use("/src", express.static(path.join(__dirname, "..", "client", "src")));

// Main Route
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "src", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...!");
});
