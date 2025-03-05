import express from "express";
import configureEJS from "./middlewares/ejs-middleware";
import expressConfig from "./middlewares/express-middleware";
import { app_routes } from "./app/routes";
import { word_routes } from "./app/words/routes";
import { dashboard_routes } from "./app/dashboard/routes";
import { globals } from "./globals";

const PORT = 3000;
const app = express();

// EJS templating configuration
configureEJS(app);

// Express middleware configuration
expressConfig(app);

// Dynamically update current url variable w/in globals
app.use((req, res, next) => {
  globals.url.current = req.originalUrl;
  next();
});

// Populate locals with global data
app.locals = { ...globals };

app.use(app_routes);
app.use("/words", word_routes);
app.use("/dashboard", dashboard_routes);

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
