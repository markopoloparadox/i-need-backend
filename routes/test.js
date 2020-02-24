"use strict";

function rootGet(req, res)
{
    console.log("Hello World!!!");
    return "Soon tm.";
}

const TestRoute = {
    method: "GET",
    path: "/",
    handler: rootGet
}

module.exports = [TestRoute];