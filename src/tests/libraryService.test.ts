import { LibraryService } from '../services/libraryService';

describe('Library Service', () => {
  let library: LibraryService;

  beforeEach(() => {
    library = new LibraryService();
  });

  it('should add a new book to the library', () => {
    const book = { id: '123', title: 'Test Book', author: 'John Doe', year: 2020 };
    library.addBook(book);
    expect(library.getBooks().length).toBe(1);
    expect(library.getBooks()[0]).toEqual(book);
  });

  it("should allow a user to borrow an available book", () => {
    const book = {
      id: "123",
      title: "Test Book",
      author: "John Doe",
      year: 2020,
    };
    library.addBook(book);
    library.borrowBook("123");
    expect(library.getBooks()[0].available).toBe(false);
  });

  it("should raise an error if the book is already borrowed", () => {
    const book = {
      id: "123",
      title: "Test Book",
      author: "John Doe",
      year: 2020,
    };
    library.addBook(book);
    library.borrowBook("123");
    expect(() => library.borrowBook("123")).toThrowError(
      "Book is not available"
    );
  });
    it("should add a new book to the library", () => {
      const book = {
        id: "123",
        title: "Test Book",
        author: "John Doe",
        year: 2020,
      };
      library.addBook(book);
      expect(library.getBooks().length).toBe(1);
      expect(library.getBooks()[0]).toEqual(book);
    });

});
