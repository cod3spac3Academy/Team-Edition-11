/**
 * @fileoverview: Main entry point for the application
 */

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = require("./config/dbConn");

connectDB();

const db = mongoose.connection;

const PORT = process.env.PORT || 8001;
const app = express();
app.use(cors());


app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/auth", require("./routes/auth.routes"));

/**
 * @desc: Connect to MongoDB
 * @event: "open" - Connection is open
 * @event: "error" - Connection error
 * @event: "disconnected" - Connection is lost
 * 
 */
db.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });
  
  db.on("error", (err) => {
    console.log(err);
    logEvents(
      `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
      "mongoErrLog.log"
    );
  });

  db.on("disconnected", () => {
    console.log("Mongoose default connection is lost");
    logEvents(
      `Database connection is lost`,
      "mongoErrLog.log"
    );
  });
  





