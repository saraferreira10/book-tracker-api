const { Router } = require("express");
const { body } = require("express-validator");

const bookController = require(`${__dirname}/../controllers/bookController`);

const router = Router();

router.param("id", bookController.checkID);

router
  .route("/")
  .get(bookController.getAll)
  .post(
    [
      body("title").trim().notEmpty().withMessage("title cannot be null"),
      body("author").trim().notEmpty().withMessage("author cannot be null"),
      body("description")
        .trim()
        .notEmpty()
        .withMessage("description cannot be null"),
    ],
    bookController.save
  );

router
  .route("/:id")
  .get(bookController.getById)
  .delete(bookController.delete)
  .put(
    [
      body("title")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("title cannot be null"),
      body("author")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("author cannot be null"),
      body("description")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("description cannot be null"),
      body("imgUrl")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("image url cannot be null"),
      body("status")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("status cannot be null"),
    ],
    bookController.update
  );

module.exports = router;
