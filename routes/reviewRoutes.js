const { Router } = require("express");

const reviewController = require(`${__dirname}/../controllers/reviewController`);

const router = Router();

router.param("id", reviewController.checkID);
router.route("/").get(reviewController.getAll).post(reviewController.save);

module.exports = router;
