"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs = require("fs");
var path = require("path");
var app = (0, express_1.default)();
var port = 9651;
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.get("/api/user_list", function (req, res) {
    var users = fs.readFileSync(path.resolve(__dirname, "../data/users.json"), "utf-8");
    res.json(JSON.parse(users));
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
