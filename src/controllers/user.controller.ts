import { db } from "../db"
import { usersTable } from "../drizzle/schema"

const getAllUsers = async (_:any,res: any) => {
    try {
        const response = await db.select().from(usersTable);
        if (response.length == 0) {
            console.log("No Users found ");
        } else {
            console.log("The users are : ", response);
        }

        return res.json({ status: 200, data: response, message: "All users from the database " });

    } catch (error) {
        throw new Error("Failed to get all the users ")
    }
}

const createUser = async (req: any, res: any) => {
    try {
        const { name, email, age } = req.body;

        if ([name, email].some((item: string) => item.trim() === "")) {
            throw new Error("Name and Email are required");
        }

        const response = await db.insert(usersTable).values({ name, email, age });

        console.log("The created User is : ", response);

        if (response) {
            return res.json({ status: 200, message: "User created Successfully" });
        }

    } catch (error: any) {
        throw new Error(error?.message);
    }
}

export { getAllUsers, createUser }