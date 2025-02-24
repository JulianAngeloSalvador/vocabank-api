import { Request, Response } from "express";

const getHomepage = (req: Request, res: Response) =>
  res.render("./pages/homepage");

export { getHomepage };
