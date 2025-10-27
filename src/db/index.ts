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

const db = drizzle(neonPostgresPool);

export { db }