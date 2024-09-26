import fs from "fs";
import path from "path";
import { Book } from "../models/book";

const dataPath = path.join(__dirname, "../../storage.json");

export class LibraryService {
  private books: Book[] = [];

  constructor() {
    this.loadBooks();
  }

  // Load books from the storage.json file
  private loadBooks(): void {
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, "utf-8");
      const parsedData = JSON.parse(data);
      this.books = parsedData.books || [];
    }
  }

  // Save books to the storage.json file
  private saveBooks(): void {
    const data = { books: this.books };
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf-8");
  }

  addBook(book: any): void {
    const existingBook = this.books.find((b) => b.id === book.id);
    if (existingBook) {
      throw new Error("Book with this ID already exists");
    }
    book.available = true;
    this.books.push(book);
    this.saveBooks(); // Save to the local storage after adding a book
  }

  borrowBook(bookId: string): void {
    const book = this.books.find((b) => b.id === bookId);
    if (book && book.available) {
      book.available = false;
      this.saveBooks(); // Save to the local storage after updating
    } else {
      throw new Error("Book is not available");
    }
  }

  returnBook(bookId: string): void {
    const book = this.books.find((b) => b.id === bookId);
    if (book && !book.available) {
      book.available = true;
      this.saveBooks(); // Save to the local storage after updating
    } else {
      throw new Error("Book was not borrowed or does not exist");
    }
  }

  getAvailableBooks(): Book[] {
    return this.books.filter((book) => book.available);
  }

  getBooks(): Book[] {
    return this.books;
  }
}
