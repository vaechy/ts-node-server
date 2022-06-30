"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var url = '127.0.0.1';
var port = 9651;
var server = http_1.default.createServer(function (req, res) {
    var url = req.url;
    res.writeHead(200, {
        'content-type': 'text/html;charset="utf-8"'
    });
    res.write('ts-node-index');
    res.end();
}).listen(port); //端口号
console.log("\u670D\u52A1\u5F00\u542F\u6210\u529F----http://".concat(url, ":").concat(port));
