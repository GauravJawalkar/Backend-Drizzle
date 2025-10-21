import { defineConfig } from 'drizzle-kit'

const config = defineConfig(
    {
        dialect: 'postgresql',
        out: './src/drizzle',
        schema: "./src/drizzle/schema.ts",
        dbCredentials: {
            url: process.env.DATABASE_URL!
        }
    }
)

export default config