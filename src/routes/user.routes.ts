import { Router } from "express";
import { getAllUsers, createUser } from "../controllers/user.controller";

const router = Router();

router.route('/getAllUsers').get(getAllUsers);
router.route('/createUser').post(createUser)

export default router