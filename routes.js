const express = require("express");
const routes = express.Router();

const produtoController = require("./controllers/produtoController");

routes.get("/produtos", produtoController.index);
routes.post("/produtos", produtoController.store);
routes.put("/produtos/:id", produtoController.update);
routes.delete("/produtos/:id", produtoController.destroy);

module.exports = routes;
