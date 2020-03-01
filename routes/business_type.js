// Imports
import { BusinessTypeModel } from "../models/business_type.model.js";
const DEFAULT_PATH = "/businesstype";

// Route -> /businesstype
async function findAllRouteFn(req, h) {
    try {
        let result = await BusinessTypeModel.find();
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

// Route -> /businesstype/add
async function addRouteFn(req, h) {
    try {
        await BusinessTypeModel.create(req.payload); // MyModel.create(docs) does new MyModel(doc).save() for every doc in docs.
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

// Route -> /businesstype/delete/{id}
async function deleteRouteFn(req, h) {
    try {
        let result = await BusinessTypeModel.findByIdAndDelete(req.params.id);
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

// Route -> /businesstype/find/{id}
async function findRouteFn(req, h) {
    try {
        let result = await BusinessTypeModel.findById(req.params.id);
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

// Route -> /businesstype/update/{id}
async function updateRouteFn(req, h) {
    try {
        let result = await BusinessTypeModel.findByIdAndUpdate(req.params.id, req.payload)
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