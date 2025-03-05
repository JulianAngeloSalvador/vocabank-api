import { Request, Response } from "express";

const getDashboard = (req: Request, res: Response) => {
  res.render("./pages/dashboard");
};

export { getDashboard };
