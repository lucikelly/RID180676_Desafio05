import { Router } from "express";
import bookController from "../controller/book.controller.js";

const router = Router();

router.post('/books', bookController.createBookController);
router.get("/books", bookController.findAllBooksController);
router.get("/books/:id", bookController.findByIdBookController);
router.patch("/books/:id", bookController.updateBookController);
router.delete("/books/:id", bookController.deleteBookController);

export default router;