const express = require("express");
const app = express();
const cors = require("cors");
var morgan = require("morgan");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const whitelist = ["http://localhost:3000", "http://127.0.0.1:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
// morgan('tiny')
app.use(morgan("tiny"));

// importing routes from routes folder
const user = require("./routes/user");

app.use("/api/v1/auth", user);
module.exports = app;
