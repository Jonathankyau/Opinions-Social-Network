// imports the model file so our feed knows how to structure the data (image, cloudinaryId, opinion, completed, userId, likes, and createdAt...title may be uncommented later)
const Opinion = require("../models/Opinion");

module.exports = {
  // this function looks for all documents in our opinion collection and puts them into an array
  feedDisplay: async (req, res) => {
    try {
      const allOpinions = await Opinion.find({}).sort({ likes: -1 });
      res.render("feed.ejs", { allOpinions });
    } catch (err) {
      console.log(err);
    }
  },
  // this function matches the opinionId between the like button pressed and its parent element, then accesses the 'likes' property and increments the value by 1
  likeOpinion: async (req, res) => {
    try {
      await Opinion.findOneAndUpdate(
        { _id: req.body.opinionId },
        {
          $inc: { likes: 1 },
        }
      );
      res.json({ message: "successfully liked" });
    } catch (err) {
      console.log(err);
    }
  },
  // add downvote method
  downvoteOpinion: async (req, res) => {
    try {
      await Opinion.findOneAndUpdate(
        { _id: req.body.opinionId },
        {
          $inc: { downvotes: 1 },
        }
      );
      res.json({ message: "successfully disapproved" });
    } catch (err) {
      console.log(err);
    }
  },
};
