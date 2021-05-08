// heroku - the images that we upload to heroku will eventually desapear. heroku will always use the last push to upload the server.
// if there are not photos in the last push.... then no photos will appear
// sss we want to store our images elsewhere. --- we are using cloudinary --- it is FREEEE -- a plac eot sotre your media-- in our case will be photos
// assists in uploading files --
const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
