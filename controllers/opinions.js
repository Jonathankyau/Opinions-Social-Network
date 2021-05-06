const Opinion = require("../models/Opinion");

module.exports = {
  getOpinions: async (req, res) => {
    console.log(req.user);
    try {
      const opinionItems = await Opinion.find({ userId: req.user.id });
      const itemsLeft = await Opinion.countDocuments({
        userId: req.user.id,
        completed: false
      });
      res.render("opinions.ejs", {
        opinions: opinionItems,
        left: itemsLeft,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },
  createOpinion: async (req, res) => {
    try {
      await Opinion.create({
        opinion: req.body.opinionItem,
        completed: false,
        userId: req.user.id
      });
      console.log("Opinion has been added!");
      res.redirect("/opinions");
    } catch (err) {
      console.log(err);
    }
  },

  deleteOpinion: async (req, res) => {
    console.log(req.body.opinionIdFromJSFile);
    try {
      await Opinion.findOneAndDelete({ _id: req.body.opinionIdFromJSFile });
      console.log("Deleted Opinion");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  }
};

//   likeOpinion: async (req, res) => {
//     try {
//         await Opinion.findOneAndUpdate(
//         { _id: req.body.opinionIdFromJSFile },
//         {
//            $set: {
//                likes: true
//             }
//         }
//         );
//         console.log("Marked Complete");
//         res.json("Marked Complete");
//     } catch (err) {
//         console.log(err);
//     }
// };
// markIncomplete: async (req, res)=>{
//     try{
//         await Opinion.findOneAndUpdate({_id:req.body.opinionIdFromJSFile},{
//             completed: false
//         })
//         console.log('Marked Incomplete')
//         res.json('Marked Incomplete')
//     }catch(err){
//         console.log(err)
//     }
// },
