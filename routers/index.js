const express = require("express");
const BingoRouter = express.Router();
const BingoUserRouter = require("./users.routers");
const BingoItemRouter = require("./item.routers");
const BingoOrderRouter = require("./orders.routers");

BingoRouter.use("/ping", () => {
  console.log("pong from the server");
});
BingoRouter.use(BingoUserRouter);
BingoRouter.use(BingoItemRouter);
BingoRouter.use(BingoOrderRouter);

module.exports = BingoRouter;
