const express = require("express");
const router = express.Router();
// required multer middleware -- assist in uploading files
const upload = require("../middleware/multer");
const opinionsController = require("../controllers/opinions");
const feedController = require("../controllers/feed");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, opinionsController.getOpinions);

// upload.single - from multer middleware that handles file uploading.
// the upload single file is now part of the createOpinion route
router.post(
  "/createOpinion",
  upload.single("file"),
  opinionsController.createOpinion
);

// router.post("/createOpinion", opinionsController.createOpinion);

// router.put('/markIncomplete', opinionsController.markIncomplete)

router.delete("/deleteOpinion", opinionsController.deleteOpinion);

module.exports = router;
