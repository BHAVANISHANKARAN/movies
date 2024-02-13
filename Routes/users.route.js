import express from "express";
import usersController from "../controllers/users.controller.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.route("/signup").post(usersController.createUser);
router.route("/login").post(usersController.getUser);
router.route("/").get(usersController.getAllUsers);

export default router;
