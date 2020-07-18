import express from "express";
import cors from "cors";
import path from "path";
import router from "./user.js";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;

// cors middlewares
app.use(cors());
app.use(express.json());

// connection flags for new mongo db driver
mongoose.connect(
  "mongodb+srv://gag7:ronaldo786@yelp-ixz5i.mongodb.net/Company?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// API

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./frontend/build"));
}

app.use("/api", router);

// listen port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
