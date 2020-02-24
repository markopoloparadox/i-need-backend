const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const businessTypeSchema = new Schema({
    name: { type: String, required: true },
}, 
{
    timestamps: true,
});

const BusinessType = mongoose.model("BussinessType", businessTypeSchema);
module.exports = BusinessType;