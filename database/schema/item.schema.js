const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let mongooseHidden = require("mongoose-hidden")();

const ItemSchema = new Schema(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      required: true,
      auto: true,
    },
    itemName: {
      type: String,
    },
    itemDescription: {
      type: String,
    },
    itemCost: {
      type: Number,
    },
    itemImageUrl: {
      type: String,
    },
    itemType: {
      type: String,
    },
    isSpecial: {
      type: Boolean,
    },
    isCarted: {
      type: Boolean,
    },
    itemCount: {
      type: Number,
    },
    itemTokenData: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
ItemSchema.plugin(mongooseHidden);
module.exports = mongoose.model("ItemSchema", ItemSchema);
