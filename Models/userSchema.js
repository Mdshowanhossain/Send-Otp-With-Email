const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = userSchema;
