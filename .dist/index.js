"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require("express"); //CJS - Common JS -> No lo soporta TS
const express_1 = __importDefault(require("express")); // ESM EcmaScript modules
const app = (0, express_1.default)();
//Routing
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express / TypeScript");
});
const port = 4000;
app.listen(port, () => {
    console.log("Servidor funcionando en el puerto:", port);
});
