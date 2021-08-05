const express = require("express");
const BingoUserRouter = express.Router();

const userServices = require("../services/userServices");

BingoUserRouter.post("/register", userServices.registerUser);

BingoUserRouter.post("/login", userServices.loginUser);

BingoUserRouter.get("/checkUser", userServices.checkUser);

module.exports = BingoUserRouter;
