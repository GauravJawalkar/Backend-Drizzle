import { drizzle } from "drizzle-orm/node-postgres";

// postgres://<username>:<password>@<host>:<port>/<db_name> ---> Postgres database URL convention
const db = drizzle(process.env.DATABASE_URL! || "postgres://gaurav:admin@localhost:5432/learndb");

export { db }