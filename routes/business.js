// Imports
import { BusinessModel } from "../models/business.model.js";
import { BusinessTypeModel } from "../models/business_type.model.js";
import { PersonModel } from "../models/person.model.js"

const DEFAULT_PATH = "/business";

// Route -> /business
async function findAllRouteFn(req, h) {
    try {
        let result = await BusinessModel.find();
        return h.response(result);
    } catch (err) {
        return h.response(JSON.stringify(err)).code(500);
    }
}
const rootRoute = {
    method: "GET",
    path: DEFAULT_PATH,
    handler: findAllRouteFn
};

// Route -> /business/add
async function addRouteFn(req, h) {
    try {
        if (req.payload.hasOwnProperty("type")) {
            let result = await BusinessTypeModel.findById(req.payload.type);
        }

        await BusinessModel.create(req.payload); // MyModel.create(docs) does new MyModel(doc).save() for every doc in docs.
        return h.response();
    } catch (err) {
        return h.response(JSON.stringify(err)).code(500);
    }
}
const addRoute = {
    method: "POST",
    path: DEFAULT_PATH + "/add",
    handler: addRouteFn
};

// Route -> /business/delete/{id}
async function deleteRouteFn(req, h) {
    try {
        let result = await BusinessModel.findByIdAndDelete(req.params.id);
        if (!result) {
            return h.response().code(410);
        }
        return h.response();
    } catch (err) {
        return h.response(JSON.stringify(err)).code(500);
    }
}
const deleteRoute = {
    method: "DELETE",
    path: DEFAULT_PATH + "/delete/{id}",
    handler: deleteRouteFn
};

// Route -> /business/find/{id}
async function findRouteFn(req, h) {
    try {
        let result = await BusinessModel.findById(req.params.id);
        return h.response(result);
    } catch(err) {
        return h.response(JSON.stringify(err)).code(500);
    }
}
const findRoute = {
    method: "GET",
    path: DEFAULT_PATH + "/find/{id}",
    handler: findRouteFn
};

// Route -> /business/update/{id}
async function updateRouteFn(req, h) {
    try {
        let result = await BusinessModel.findByIdAndUpdate(req.params.id, req.payload)
        return h.response(result);
    } catch(err) {
        return h.response(JSON.stringify(err)).code(500);
    }
}
const updateRoute = {
    method: "POST",
    path: DEFAULT_PATH + "/update/{id}",
    handler: updateRouteFn
}


export default [rootRoute, addRoute, deleteRoute, findRoute, updateRoute];