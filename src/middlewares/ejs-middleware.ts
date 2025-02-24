import { _src } from "@/lib/path-resolver";
import { Express } from "express";
import path from "path";

export default function configureEJS(app: Express) {
  // set default templating to ejs
  app.set("view engine", "ejs");

  // define the path to the views directory
  app.set("views", path.join(_src, "views"));
}
