import mongoose from "mongoose";
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

const Company = mongoose.model("Company", companySchema);

export default Company;
