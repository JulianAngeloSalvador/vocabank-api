import express from "express";
import configureEJS from "./middlewares/ejs-middleware";
import expressConfig from "./middlewares/express-middleware";
import { app_routes } from "./app/routes";
import { word_routes } from "./app/words/routes";
import { dashboard_routes } from "./app/dashboard/routes";
import { globals } from "./globals";
import db from "./lib/postgres";

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
  db.query("SELECT NOW()", (err, res) => {
    if (err) {
      console.error("Error connecting to database:", err);
      console.error("Error details:", err.stack);
    } else {
      console.log("Database connected successfully:", res.rows[0]);
    }
  });
});

// Close the pool on application shutdown
process.on("SIGINT", async () => {
  console.log("Closing database pool...");
  await db.end();
  console.log("Database pool closed.");
  process.exit();
});
