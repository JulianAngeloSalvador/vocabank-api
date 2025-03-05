import { Request, Response } from "express";

const getDashboard = (req: Request, res: Response) => {
  res.render("./pages/dashboard");
};
const getDashboardWords = (req: Request, res: Response) => {
  res.render("./pages/dashboard");
};
const getDashboardTranslations = (req: Request, res: Response) => {
  res.render("./pages/dashboard");
};

export { getDashboard, getDashboardWords, getDashboardTranslations };
