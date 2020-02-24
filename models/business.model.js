const mongoose = require("mongoose");
let Person = require("./person.model");
let BusinessType = require("./businessType.model");

const Schema = mongoose.Schema;

const businessSchema = new Schema({
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    owners: [{ type: mongoose.Schema.Types.ObjectId, ref: Person }],
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: Person }],
    location: { type: String, required: true },
    type: { type: mongoose.Schema.Types.ObjectId, ref: BusinessType },
    description: { type: String, required: false }
},
{
    timestamps: true,
});

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;