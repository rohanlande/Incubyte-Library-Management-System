import express from "express";
import {
  addBook,

} from "./controllers/libraryController";

const app = express();
app.use(express.json());

app.post("/books", addBook);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
