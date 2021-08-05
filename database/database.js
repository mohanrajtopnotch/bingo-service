const mongoose = require("mongoose");
const { url } = require("../config");
const InitializeDatabase = () => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data) => {
      console.log(
        new Date().toString() +
          url.slice(30).padStart(93, "*") +
          " Database connected"
      );
    })
    .catch((err) => {
      console.log(
        console.log(
          new Date().toString() +
            url.slice(30).padStart(93, "*") +
            " Database Not connected " +
            err
        )
      );
    });
};
module.exports = { InitializeDatabase };
