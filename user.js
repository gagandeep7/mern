import express from "express";

const router = express.Router();

// SCHEMA
import Company from "./models/db.js";

router.get("/listCompany", async (req, res) => {
  try {
    const exercise = await Company.find();
    const response = res.json(exercise);
    console.log(response);
    console.log("hello");
  } catch (error) {
    console.log("error", error);
  }
});

router.post("/addCompany", async (req, res) => {
  try {
    const { name, link } = req.body;
    const newCompany = new Company({
      name,
      link,
    });

    const saveData = await newCompany.save();
    console.log(saveData);
    res.json("added");
  } catch (err) {
    console.log(err);
  }
});

export default router;
