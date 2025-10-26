import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

const usersTable = pgTable("users",
    {
        id: uuid('id').primaryKey().defaultRandom(),
        name: varchar('name', { length: 100 }).notNull(),
        email: varchar('email', { length: 100 }).notNull().unique(),
        age: integer('age').notNull(),
    }
)

export { usersTable }