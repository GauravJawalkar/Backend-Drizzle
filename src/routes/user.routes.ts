import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller";

const router = Router();

router.route('/getAllUsers').get(getAllUsers);

export default router