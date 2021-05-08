const mongoose = require("mongoose");

const OpinionSchema = new mongoose.Schema({
<<<<<<< HEAD
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
=======
  // title: {
  //   type: String,
  //   required: true,
  // },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
>>>>>>> a18241bee3149e1ed483196324d2318e7d6c861f
  },
  opinion: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
<<<<<<< HEAD
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
=======
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
>>>>>>> a18241bee3149e1ed483196324d2318e7d6c861f
});

module.exports = mongoose.model("Opinion", OpinionSchema);
