import { Request, Response } from "express";
import { LibraryService } from "../services/libraryService";

const libraryService = new LibraryService();

export const addBook =(req: Request, res: Response): void => {
  const { id, title, author, year } = req.body;
  try {
    libraryService.addBook({ id,  title, author, year, available: true });
    res.status(200).json({ message: "Book added successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


