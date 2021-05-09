// ensures each opinion that is posted follows this structure
const mongoose = require("mongoose");

const OpinionSchema = new mongoose.Schema({
  // title: {
  //   type: String,
  //   required: true,
  // },
  image: {
    type: String,
    require: true
  },
  cloudinaryId: {
    type: String,
    require: true
  },
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
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Opinion", OpinionSchema);
