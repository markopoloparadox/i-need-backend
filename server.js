// imports
import mongoose from "mongoose";
import Hapi from "@hapi/hapi";
import { ENV } from "./config.js";
import { Routes } from "./routes/index.js";
import { ConnectToDatabase } from "./helper/common.js"

// Server configuration
const server = new Hapi.Server({
    host: "localhost",
    port: 8000,
    routes: { cors: true }
});

// Database 
if (!ConnectToDatabase(mongoose, ENV.MONGODBURI)) {
    console.log("Server failed to start!");
}
else {
    server.route(Routes);
    server.start();
}

