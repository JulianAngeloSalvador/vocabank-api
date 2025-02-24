import express from "express";
import configureEJS from "./middlewares/ejs-middleware";
import expressConfig from "./middlewares/express-middleware";

const PORT = 3000;
const app = express();

// EJS templating configuration
configureEJS(app);

// Express middleware configuration
expressConfig(app);

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
