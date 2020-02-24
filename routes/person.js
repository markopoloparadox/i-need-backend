"use strict";

const Person = require("../models/person.model");
const ROUTE = "/person";

function display(req, h) {
    return Person.find()
    .then((res) => h.response(res))
    .catch((err) => h.response(JSON.stringify(err)).code(500));
}
const DisplayRoute = {
    method: "GET",
    path: ROUTE,
    handler: display
}

function addPerson(req, h) {
    let newPerson = new Person(req.payload);
    return newPerson.save()
    .then(() => "Person added!" )
    .catch((err) => h.response(JSON.stringify(err)).code(500));
}
const AddRoute = {
    method: "POST",
    path: ROUTE + "/add",
    handler: addPerson
}

function deletePerson(req, h) {
    return Person.findByIdAndDelete(req.params.id)
    .then((res) => {
        if (!res) {
            return h.response(`User ${req.params.id} not found!`).code(410);
        }
        return h.response("Person deleted!").code(200);
    })
    .catch((err) => h.response(JSON.stringify(err)).code(500));
}
const DeleteRoute = {
    method: "DELETE",
    path: ROUTE + "/delete/{id}",
    handler: deletePerson
}

function getPerson(req, h) {
    return Person.findById(req.params.id)
    .then((res) => h.response(res))
    .catch((err) => h.response(JSON.stringify(err)).code(500));
}
const GetRoute = {
    method: "Get",
    path: ROUTE + "/get/{id}",
    handler: getPerson
}

module.exports = [DisplayRoute, AddRoute, DeleteRoute, GetRoute];
