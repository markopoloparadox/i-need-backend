const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    birthDate: { type: Date, required: true },
    biography: { type: String, required: false },
    img: { type: Buffer, required: false }
}, 
{
    timestamps: true,
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;