﻿# Library Management System
 This is a simple backend implementation for a Library Management System built using TypeScript and Node.js. The system allows users to add, borrow, return, and view   
 available books.

 Features
  -Add Books: Users can add books to the system.
  -Borrow Books: Users can borrow books if available.
  -Return Books: Users can return borrowed books.
  -View Available Books: Users can view a list of available books in the library.

  Tech Stack
  -Node.js: JavaScript runtime
  -TypeScript: Typed superset of JavaScript
  -Express.js: Web framework for Node.js
  -Local Storage: Used to store books data
  -Nodemon: Development tool for auto-restarting the server
  -ts-node: TypeScript execution environment for Node.js

  
Project Structure:
  library-management-system/
  ├── src/
  │   ├── controllers/
  │   │   ├── libraryController.ts
  │   ├── models/
  │   │   ├── book.ts
  │   ├── services/
  │   │   ├── libraryService.ts
  │   ├── tests/
  │   │   ├── libraryService.test.ts
  │   ├── index.ts
  ├── jest.config.js
  ├── nodemon.json
  ├── package.json
  ├── tsconfig.json
  ├── README.md


