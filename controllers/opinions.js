const Opinion = require("../models/Opinion");
const cloudinary = require("../middleware/cloudinary");
const validator = require("validator");

module.exports = {
  getOpinions: async (req, res) => {
    console.log(req.user);
    try {
      const opinionItems = await Opinion.find({ userId: req.user.id });
      const itemsLeft = await Opinion.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("opinions.ejs", {
        opinions: opinionItems,
        left: itemsLeft,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createOpinion: async (req, res) => {
    try {
      // upload image to cloudinary - upload the file that was submited with the form
      // the file gets submited to cloudinary before the post is created.
      console.log(req.file);
      const validationErrors = [];
      if (!validator.isLength(req.body.opinionTitle, { min: 1 }))
        validationErrors.push({ msg: "A title is required!" });

      if (!validator.isLength(req.body.opinionItem, { min: 1 }))
        validationErrors.push({ msg: "An opinion is required!" });
      if (!req.file) {
        validationErrors.push({ msg: "A photo is required!" });
      }
      if (validationErrors.length) {
        req.flash("errors", validationErrors);
        return res.redirect("/opinions");
      }

      const result = await cloudinary.uploader.upload(req.file.path);

      await Opinion.create({
        // grab title value from Opinion object
        title: req.body.opinionTitle,
        opinion: req.body.opinionItem,
        // grab the url that comes back as result from cloudinary --  this is the path that comes back from cloudinary
        image: result.secure_url, // plugging this info into our doc in database
        // grab the id that comes back as a result form cloudinary
        cloudinaryId: result.public_id,
        completed: false,
        // added property with user name info after creating a opinion post
        user: req.user.userName,
        userId: req.user.id,
      });
      console.log(Opinion);
      console.log("Opinion has been added!");
      res.redirect("/opinions");
    } catch (err) {
      console.log("err.errors log");
      if (err.errors) {
        req.flash("error", err.errors.title.properties.message);
        res.redirect(303, "/opinions");
      }
    }
  },
  // need to check why it is not deleting post uppon first click on delete button. It will delete after it refreshes
  /* solution: assigned 'opinion' variable to the findOneAndDelete promise in order to define line 51*/
  deleteOpinion: async (req, res) => {
    console.log(req.body);
    try {
      let opinion = await Opinion.findOneAndDelete({
        _id: req.body.opinionIdFromJSFile,
      });
      await cloudinary.uploader.destroy(opinion.cloudinaryId); // to delete the image whenever we delete the opinion post
      await Opinion.deleteOne({ _id: req.params.id });
      res.end();
    } catch (err) {
      console.log(err);
    }
  },
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
