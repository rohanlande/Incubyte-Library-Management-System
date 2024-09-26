import express from 'express';
import { addBook, getAvailableBooks } from "./controllers/libraryController";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.post('/books', addBook);
app.get("/books", getAvailableBooks);


// Start server
app.listen(port, () => {
  console.log(`Library Management System is running on port ${port}`);
});
