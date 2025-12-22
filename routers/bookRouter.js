const express = require('express');
const controller = require("../controllers/controller");

const router = express.Router();

router.get("/", controller.showAllBooks);
router.post("/createBook", controller.createBook);
router.get("/edit/:id", controller.editBookForm);
router.get("/delete/:id", controller.deleteBook)

module.exports = router;
