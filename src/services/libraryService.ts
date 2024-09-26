import { Book } from "../models/book";

export class LibraryService {
  private books: Book[] = [];

  addBook(book: Book): void {
    const existingBook = this.books.find((b) => b.id === book.id);
    if (existingBook) {
      throw new Error("Book with this ID already exists");
    }
    this.books.push(book);
  }

}
