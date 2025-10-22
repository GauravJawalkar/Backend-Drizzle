import { db } from "../db"
import { usersTable } from "../drizzle/schema"

const getAllUsers = async () => {
    try {
        const users = await db.select().from(usersTable);
        if (users.length == 0) {
            console.log("No Users found ");
        } else {
            console.log("The users are : ", users);
        }

        return users;

    } catch (error) {
        console.log("Failed to get all the users : ", error)
    }
}

export { getAllUsers }