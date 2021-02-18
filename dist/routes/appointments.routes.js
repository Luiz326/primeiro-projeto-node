"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointementsRouter = express_1.Router();
appointementsRouter.post('/', function (request, response) {
    return response.json({ message: "hello World" });
});
exports.default = appointementsRouter;
