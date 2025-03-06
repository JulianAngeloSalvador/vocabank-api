import pg from "pg";
import * as dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGSQL,
  port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
});

export default db;
