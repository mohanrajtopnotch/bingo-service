const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let mongooseHidden = require("mongoose-hidden")();

const UserSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
UserSchema.plugin(mongooseHidden);
module.exports = mongoose.model("UserSchema", UserSchema);
