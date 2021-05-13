const feedController = require("../controllers/feed");

const express = require("express");
const router = express.Router();

router.get("/", feedController.feedDisplay);
router.put("/like", feedController.likeOpinion);
router.put("/downvote", feedController.downvoteOpinion);

module.exports = router;
