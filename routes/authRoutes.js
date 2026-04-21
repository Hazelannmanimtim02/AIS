import * as AuthController from "../controllers/authController.js";
import express from "express";

const userRoutes = express.Router();

userRoutes.post('/register', AuthController.registerStudent);

export default userRoutes;
