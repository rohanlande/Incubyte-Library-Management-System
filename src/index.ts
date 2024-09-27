import express from "express";
import {
  addBook,
  getAvailableBooks,
  returnBook,
  borrowBook,
} from "./controllers/libraryController";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.post("/books", addBook);
app.post("/books/:id/borrow", borrowBook);
app.get("/books", getAvailableBooks);
app.post("/books/:id/return", returnBook);

// Start server
app.listen(port, () => {
  console.log(`Library Management System is running on port  ${port}`);
});
