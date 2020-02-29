// Imports
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
}, { timestamps: true, });

const PersonModel = mongoose.model("person", PersonSchema);
export { PersonModel };