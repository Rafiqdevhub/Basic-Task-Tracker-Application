const express = require("express");
const connectDb = require("./config/dbConnect"); // Importing the dbConnect module

require("dotenv").config();

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!....");
});

app.use("/api", require("./router/taskRouter"));

connectDb(); // Connecting to the database

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
