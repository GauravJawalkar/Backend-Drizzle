import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

const usersTable = pgTable("users",
    {
        id: uuid().primaryKey().defaultRandom(),
        name: varchar({ length: 100 }).notNull(),
        email: varchar({ length: 100 }).notNull().unique(),
        age: integer().notNull(),
    }
)

export { usersTable }