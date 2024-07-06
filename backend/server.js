const express = require("express");
const connectDb = require("./config/dbConnect"); // Importing the dbConnect module
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 3000;
const origin = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(express.json());
app.use(
  cors({
    origin,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!....");
});

app.use("/api", require("./router/taskRouter"));

connectDb(); // Connecting to the database

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
