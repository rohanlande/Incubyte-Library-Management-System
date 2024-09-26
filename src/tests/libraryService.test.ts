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

  
});
