const OrderSchema = require("../database/schema/order.schema");
const LoggerUtils = require("../utils/LoggerUtil");

const createOrder = async (req, res) => {
  try {
    const orderDetails = { orderDetails: req.body };
    console.log(orderDetails);
    const newOrderSchema = new OrderSchema(orderDetails);
    const Save = await newOrderSchema.save();
    return LoggerUtils.response(req, res, {
      message: "Order created Succesfully",
    });
  } catch {
    return LoggerUtils.error(req, res, 400, {
      message: "Order not created",
    });
  }
};
const getOrder = async (req, res) => {
  try {
    const getOrders = await OrderSchema.find();
    return LoggerUtils.response(req, res, {
      data: getOrders,
      message: "Order Found",
    });
  } catch {
    return LoggerUtils.error(req, res, 400, {
      message: "Order not found",
    });
  }
};

module.exports = { createOrder, getOrder };
