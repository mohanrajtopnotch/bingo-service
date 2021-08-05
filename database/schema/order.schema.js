const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let mongooseHidden = require("mongoose-hidden")();

const OrderSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    orderDetails: [
      {
        type: Array,
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
OrderSchema.plugin(mongooseHidden);
module.exports = mongoose.model("OrderSchema", OrderSchema);
