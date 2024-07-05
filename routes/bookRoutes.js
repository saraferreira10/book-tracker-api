const { Router } = require("express");

const bookController = require(`${__dirname}/../controllers/bookController`);

const router = Router();

router.param("id", bookController.checkID);

router.route("/").get(bookController.getAll).post(bookController.save);

router
  .route("/:id")
  .get(bookController.getById)
  .delete(bookController.delete)
  .put(bookController.update);

module.exports = router;
