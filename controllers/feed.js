const Opinion = require("../models/Opinion");

module.exports = {
  feedDisplay: async (req, res) => {
    try {
      const allOpinions = await Opinion.find({});
      res.render("feed.ejs", { allOpinions });
    } catch (err) {}
    //get opinion array from the database to put in your ejs
  }
};
