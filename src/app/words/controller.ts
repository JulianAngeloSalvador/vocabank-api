import { wordsData } from "@/lib/seed-helper";
import { Request, Response } from "express";

const getWords = (req: Request, res: Response) => {
  const words = wordsData;
  res.render("./pages/words", { words });
};

export { getWords };
