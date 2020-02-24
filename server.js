"use strict";

const mongoose = require("mongoose");
const Hapi = require("@hapi/hapi");
const ENV = require("./config");

const server = new Hapi.Server({
    host: "localhost",
    port: 3000
});

const uri = ENV.MONGODBURI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});



const routes = require("./routes/index");
server.route(routes);
server.start();