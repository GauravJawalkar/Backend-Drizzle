import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const neonPostgresPool = new Pool(
    {
        connectionString: process.env.DATABASE_URL!,
        ssl: {
            rejectUnauthorized: false
        }
    }
)

// postgres://<username>:<password>@<host>:<port>/<db_name> ---> Postgres database URL convention
const db = drizzle(neonPostgresPool);

export { db }