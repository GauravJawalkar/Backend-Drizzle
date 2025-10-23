import { db } from "../db"
import { usersTable } from "../drizzle/schema"

const getAllUsers = async () => {
    try {
        const response = await db.select().from(usersTable);
        if (response.length == 0) {
            console.log("No Users found ");
        } else {
            console.log("The users are : ", response);
        }

        return response;

    } catch (error) {
        throw new Error("Failed to get all the users ")
    }
}

export { getAllUsers }