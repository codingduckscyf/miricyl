import postgres from "postgres";

const sql =
  global.sql ||
  postgres(process.env.DATABASE_URL, {
    idle_timeout: 2,
  });

if (process.env.NODE_ENV === "development") global.sql = sql;

export default sql;
