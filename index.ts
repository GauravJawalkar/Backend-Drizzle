
import { usersTable } from "./src/drizzle/schema";
import { db } from './src/db'

interface Users {
    name: string,
    email: string,
    age: number
}

console.log("The server is running no express as of now");


async function getAllUsers() {
    try {
        const users = await db.select().from(usersTable);
        console.log("All users: ", users);
        return users
    } catch (error) {
        throw new Error("Failed to create the user");
    }
}

async function createUser({ name, email, age }: Users) {
    console.log("The new User created is: ");
    const newUser = await db.insert(usersTable).values({
        name,
        email,
        age
    });
}

// createUser({ name: "Jay Jawalkar", email: "jayjawalkar8@gmail.com", age: 20 });
getAllUsers();