const mongoose = require("mongoose");

const pomoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: [true, "Please add a date value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pomo", pomoSchema);
