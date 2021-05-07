const mongoose = require("mongoose");

const OpinionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Opinion", OpinionSchema);
