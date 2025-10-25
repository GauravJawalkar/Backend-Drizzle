import { Request, Response } from "express";
import { db } from "../db"
import { usersTable } from "../drizzle/schema"

const getAllUsers = async (_: Request, res: Response) => {
    try {
        const response = await db.select().from(usersTable);
        if (response.length == 0) {
            console.log("No Users found ");
        } else {
            console.log("The users are : ", response);
        }

        return res.json({ status: 200, data: response, message: "All users from the database " });

    } catch (error) {
        console.error("Failed to get all the users ", error)
        return res.status(500).json({ status: 500, message: "Failed to get all the users. Internal Server Error" })
    }
}

const createUser = async (req: Request, res: Response) => {
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

    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ status: 500, message: "Failed to create the user" })
    }
}

export { getAllUsers, createUser }