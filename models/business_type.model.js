// imports
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Schema
const BusinessTypeSchema = new Schema({
    name: { type: String, required: true },
}, { timestamps: true, });

// Export
const BusinessTypeModel = mongoose.model("business_type", BusinessTypeSchema);
export { BusinessTypeModel };