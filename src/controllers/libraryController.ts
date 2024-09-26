import { Request, Response } from "express";
import { LibraryService } from "../services/libraryService";

const libraryService = new LibraryService();

export const addBook = (req: Request, res: Response): void => {
  try {
    const { id, title, author, year } = req.body;
    console.log(req.body);
    libraryService.addBook({ id, title, author, year, available: true });
    res.status(201).json({ message: "Book added successfully!" });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const borrowBook = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    libraryService.borrowBook(id);
    res.status(200).json({ message: "Book borrowed successfully!" });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getAvailableBooks = (_req: Request, res: Response): void => {
  const availableBooks = libraryService.getAvailableBooks();
  res.status(200).json(availableBooks);
};
