import express from "express";

const app = express();
const port = process.env.PORT! || 8000;
app.listen(port, () => console.log(`The server is runnning on PORT ${port}`))

//This middlewares tells the express to covert whatever we are sending to the server into json
app.use(express.json());

// imports for specific controllers
import getUsers from './routes/user.routes'
import createUser from "./routes/user.routes";

app.use('/api/v1/users', getUsers);
app.use('/api/v1/users', createUser)

export { app }