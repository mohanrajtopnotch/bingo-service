const ItemSchema = require("../database/schema/item.schema");
const LoggerUtils = require("../utils/LoggerUtil");

const createItem = async (req, res) => {
  try {
    const {
      itemName,
      itemDescription,
      itemCost,
      itemImageUrl,
      itemType,
      itemCount,
      itemTokenData,
      isSpecial,
      isCarted,
    } = req.body;
    const newItemSchema = new ItemSchema({
      itemName,
      itemCost,
      itemDescription,
      itemImageUrl,
      itemType,
      itemCount,
      itemTokenData,
      isSpecial,
      isCarted,
    });
    const Save = await newItemSchema.save();
    return LoggerUtils.response(req, res, {
      message: "Item created Succesfully",
    });
  } catch {
    return LoggerUtils.error(req, res, 400, {
      message: "Item not created",
    });
  }
};
const getItem = async (req, res) => {
  try {
    const getItems = await ItemSchema.find();
    return LoggerUtils.response(req, res, {
      data: getItems,
      message: "Item Found",
    });
  } catch {
    return LoggerUtils.error(req, res, 400, {
      message: "Item not found",
    });
  }
};
const updateItem = async (req, res) => {
  try {
    let data = req.body;
    const getItems = await ItemSchema.findOneAndUpdate(
      { itemId: data.itemId },
      data
    );
    return LoggerUtils.response(req, res, {
      data: getItems,
      message: "Item Updated",
    });
  } catch {
    return LoggerUtils.error(req, res, 400, {
      message: "Item not Updated",
    });
  }
};
const updateAllItem = async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    const getItems = await ItemSchema.updateMany(data);
    return LoggerUtils.response(req, res, {
      data: getItems,
      message: "All Item Updated",
    });
  } catch {
    return LoggerUtils.error(req, res, 400, {
      message: "All Item not Updated",
    });
  }
};
module.exports = { createItem, getItem, updateItem, updateAllItem };
