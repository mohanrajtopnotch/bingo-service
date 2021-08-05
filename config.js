const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  port: process.env.PORT,
  url: process.env.MONGODB_URL,
  jsk: process.env.JSK
};
