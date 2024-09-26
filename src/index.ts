import express from 'express';
import { addBook, } from './controllers/libraryController';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.post('/books', addBook);


// Start server
app.listen(port, () => {
  console.log(`Library Management System is running on port ${port}`);
});
