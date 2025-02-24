import express from "express";
import configureEJS from "./middlewares/ejs-middleware";
import expressConfig from "./middlewares/express-middleware";
import { app_routes } from "./app/routes";

const PORT = 3000;
const app = express();

// EJS templating configuration
configureEJS(app);

// Express middleware configuration
expressConfig(app);

app.use(app_routes);

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
