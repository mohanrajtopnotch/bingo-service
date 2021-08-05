//Import Neccessary Packages
const express = require("express");
const BingoServer = express();
const cors = require("cors");
const { port } = require("./config");
const { InitializeDatabase } = require("./database/database");
const BingoRouter = require("./routers/index");

//Intialize requirer's
// BingoServer.use(cors());
BingoServer.use(cors({ credentials: true }));
BingoServer.use(express.json());
BingoServer.use(express.urlencoded({ extended: true }));
//Connecting Database
InitializeDatabase();

//Router
BingoServer.use(BingoRouter);

//Server Listener
BingoServer.listen(port, () => {
  console.log("Server Running Succesfully on " + port);
});
