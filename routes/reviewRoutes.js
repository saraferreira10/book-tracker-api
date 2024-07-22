const { Router } = require("express");

const reviewController = require(`${__dirname}/../controllers/reviewController`);

const router = Router();

router.route("/").get(reviewController.getAll).post(reviewController.save);

module.exports = router;
