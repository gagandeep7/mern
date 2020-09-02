import express from "express";
import cors from "cors";
import path from "path";
import router from "./user.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 5000;

// cors middlewares
app.use(cors());
app.use(express.json());

const {
  parsed: { URL: URL },
} = dotenv.config();
console.log(URL);
// database
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// API

app.use("/api", router);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  });
}

// listen port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
