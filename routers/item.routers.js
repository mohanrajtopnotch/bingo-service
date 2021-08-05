const express = require("express");
const BingoItemRouter = express.Router();

const ItemService = require("../services/ItemServices");

BingoItemRouter.get("/item/get", ItemService.getItem);
BingoItemRouter.post("/item/create", ItemService.createItem);
BingoItemRouter.post("/item/update", ItemService.updateItem);
BingoItemRouter.post("/item/updateall", ItemService.updateAllItem);

module.exports = BingoItemRouter;
