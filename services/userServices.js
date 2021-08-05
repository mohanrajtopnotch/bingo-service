const bcrpyt = require("bcryptjs");
const UserSchema = require("../database/schema/user.schema");
const LoggerUtils = require("../utils/LoggerUtil");
const jwt = require("jsonwebtoken");
const { jsk } = require("../config");
const registerUser = async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;
    console.log(isAdmin)
    const encryptPassword = await bcrpyt.hash(password, 10);
    const newUser = new UserSchema({
      username,
      email,
      password: encryptPassword,
      isAdmin,
    });
    const Save = await newUser.save();
    return LoggerUtils.response(req, res, {
      message: "User Register Succesfully",
    });
  } catch (err) {
    return LoggerUtils.error(req, res, 400, {
      message: "User Register Failed",
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const findUser = await UserSchema.findOne({ email: req.body.email });
    if (!findUser) {
      return LoggerUtils.error(req, res, 400, {
        message: "User Not Registered",
      });
    }
    const passwordCheck = await bcrpyt.compare(
      req.body.password,
      findUser.password
    );
    console.log(passwordCheck);
    if (!passwordCheck) {
      return LoggerUtils.error(req, res, 400, { message: "Password Is Wrong" });
    }
    const jwtUser = {
      _id: findUser._id,
    };
    const { username, isAdmin, email, _id } = findUser;
    const createdToken = await jwt.sign(jwtUser, jsk);
    return LoggerUtils.response(req, res, {
      message: "User Login Succesfully",
      userDetails: {
        username,
        email,
        isAdmin,
        createdToken,
        id: _id,
      },
    });
  } catch (err) {
    return LoggerUtils.error(req, res, 400, { message: "User Login Failed" });
  }
};
const checkUser = async (req, res) => {
  try {
    const data = jwt.decode(req.body.token);
    const IsToken = await jwt.verify(req.body.token, jsk);
    if (!IsToken) {
      throw "Authentication Failed";
    }
    return LoggerUtils.response(req, res, {
      message: "User Verified",
      status: "Success",
    });
  } catch (err) {
    return LoggerUtils.error(req, res, 400, {
      message: "Authentication Failed",
    });
  }
};
module.exports = { registerUser, loginUser, checkUser };
