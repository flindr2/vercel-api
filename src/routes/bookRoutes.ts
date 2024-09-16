import express, { Request, Response } from "express";
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookControllers";

const router = express.Router();

// GET /books
router.get("/books", getBooks);

// GET /books/:id
router.get("/books/:id", getBook);

// POST /books
router.post("/books", createBook);

// PUT /books/:id
router.put("/books/:id", updateBook);

// DELETE /books/:id
router.delete("/books/:id", deleteBook);

export default router;