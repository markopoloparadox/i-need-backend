// Imports
import mongoose from "mongoose";
import { PersonModel } from "./person.model.js";
import { BusinessTypeModel } from "./business_type.model.js";
const Schema = mongoose.Schema;

// Schema
const BusinessSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: mongoose.Schema.Types.ObjectId, ref: BusinessTypeModel, required: true },
    owners: [{ type: mongoose.Schema.Types.ObjectId, ref: PersonModel, required: false }],
}, { timestamps: true, });

// Exports
const BusinessModel = mongoose.model("business", BusinessSchema);
export { BusinessModel };