const Opinion = require("../models/Opinion");

module.exports = {
  feedDisplay: async (req, res) => {
    try {
      const allOpinions = await Opinion.find({}).sort({ likes: -1 });
      res.render("feed.ejs", { allOpinions });
    } catch (err) {
      console.log(err);
    }
  },
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
};
