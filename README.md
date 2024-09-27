# Library Management System
 This is a simple backend implementation for a Library Management System built using TypeScript and Node.js. The system allows users to add, borrow, return, and view   
 available books.

## Features
1. Add Books
Users can add new books to the library by providing details such as ID, title, author, and publication year.
Each book must have a unique identifier to avoid duplicates.
2. Borrow Books
Users can borrow books from the library if they are available.
The system checks for availability before allowing a book to be borrowed.
If the book is not available, the system notifies the user.
3. Return Books
Users can return borrowed books to the library.
Upon return, the book's status is updated to available for others to borrow.
4. View Available Books
Users can view a list of all books currently available in the library.
The list includes relevant details like title, author, and publication year.

## Tech Stack
Node.js: JavaScript runtime.
TypeScript: Typed superset of JavaScript.
Express.js: Web framework for Node.js.
Local Storage: Used to store books data.
Nodemon: Development tool for auto-restarting the server.
ts-node: TypeScript execution environment for Node.js.

  
## Project Structure
 ```bash
library-management-system/
├── src/
│   ├── controllers/
│   │   └── libraryController.ts
│   ├── models/
│   │   └── book.ts
│   ├── services/
│   │   └── libraryService.ts
│   ├── index.ts
│   └── __tests__/
│       └── libraryService.test.ts
├── jest.config.js
├── .gitignore
├── nodemon.json
├── package.json
├── README.md
├── tsconfig.json

