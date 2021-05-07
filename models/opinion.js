const mongoose = require("mongoose");

const OpinionSchema = new mongoose.Schema({
  opinion: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Opinion", OpinionSchema);
