"use strict";

const Person = require("../models/person.model");
const ROUTE = "/person";

async function display(req, h) {
    try {
        let result = await Person.find();
        console.log("Displayed all persons!");
        return h.response(result);
    }
    catch (err) {
        console.log("Failed to get all persons!");
        return h.response(JSON.stringify(err)).code(500);
    }
}
const DisplayRoute = {
    method: "GET",
    path: ROUTE,
    handler: display
}

async function addPerson(req, h) {
    try {
        let newPerson = new Person(req.payload);
        let result = await newPerson.save();
    }
    catch (err) {
        console.log("Failed to add a Person!");
        return h.response(JSON.stringify(err)).code(500);
    }

    console.log("Person added!");
    return h.response(JSON.stringify(""));
}
const AddRoute = {
    method: "POST",
    path: ROUTE + "/add",
    handler: addPerson
}

async function deletePerson(req, h) {
    try {
        let result = await Person.findByIdAndDelete(req.params.id);
        if (!result) {
            console.log(`User ${req.params.id} not found!`);
            return h.response(JSON.stringify("")).code(410);
        }

        console.log("Person deleted!");
        return h.response(JSON.stringify(""));
    }
    catch (err) {
        console.log("Failed to delete a person!");
        return h.response(JSON.stringify(err)).code(500);
    }
}
const DeleteRoute = {
    method: "DELETE",
    path: ROUTE + "/delete/{id}",
    handler: deletePerson
}

async function getPerson(req, h) {
    try {
        let result = await Person.findById(req.params.id);
        console.log("Found a person with that id!")
        return h.response(result);
    }
    catch (err) {
        console.log("Failed to get a Person!");
        return h.response(JSON.stringify(err)).code(500);
    }
}
const GetRoute = {
    method: "Get",
    path: ROUTE + "/get/{id}",
    handler: getPerson
}

module.exports = [DisplayRoute, AddRoute, DeleteRoute, GetRoute];
