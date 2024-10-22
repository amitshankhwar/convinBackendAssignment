require("dotenv").config();

const environment = process.env.NODE_ENV;
const port = process.env.PORT;
const timezone = process.env.TIMEZONE;
const corsURL = process.env.CORS_URL;

const db = {
  name: process.env.DB_NAME || "",
  host: process.env.DB_HOST || "",
  port: process.env.DB_PORT || "",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  minPoolSize: parseInt(process.env.DB_MIN_POOL_SIZE || "2"),
  maxPoolSize: parseInt(process.env.DB_MAX_POOL_SIZE || "5"),
};

module.exports = { environment, port, timezone, corsURL, db };
