const express = require("express");
const booksControllers = require("../controllers/booksControllers");
const router = express.Router()

router.post("/books", booksControllers.addBook)
router.get("/books", booksControllers.getAllBooks)
router.get("/books/:id", booksControllers.getBookById)
router.put("/books/:id", booksControllers.updateBook)
router.delete("/books/:id", booksControllers.deleteBook)


module.exports = router