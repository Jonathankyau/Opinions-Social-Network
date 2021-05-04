const express = require("express");
const router = express.Router();
const opinionsController = require("../controllers/opinions");
const feedController = require("../controllers/feed");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, opinionsController.getOpinions);

router.get("/opinions", opinionsController.getOpinions);

router.post("/createOpinion", opinionsController.createOpinion);

// router.put('/markIncomplete', opinionsController.markIncomplete)

router.delete("/deleteOpinion", opinionsController.deleteOpinion);

module.exports = router;
