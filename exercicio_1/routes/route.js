const express = require("express");
const routerApp = express.Router();
const appCalculadora = require("../controller/ctlCalculadora");

// Configura as rotas
routerApp.post("/calcular", appCalculadora.operacoes);

// Exporta a variável com as rotas
module.exports = routerApp;
