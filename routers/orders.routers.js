const express = require("express");
const BingoOrderRouter = express.Router();

const OrderServices = require("../services/OrderServices");

BingoOrderRouter.post("/order/create", OrderServices.createOrder);
BingoOrderRouter.get("/order/get", OrderServices.getOrder);

module.exports = BingoOrderRouter;
