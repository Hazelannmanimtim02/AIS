// import * as UserController from '../controllers/UserContoller.js';
// import express from "express";

//     const userRoutes = express.Router();

//     userRoutes.post('/register', UserController.register);
//     userRoutes.post('/login', UserController.login);


// export default userRoutes;

import express from "express";
import userController from "../controllers/UserController.js";

const router = express.Router();

// CREATE USER
router.post("/register", async (req, res) => {
    try {
        const { userProfile, email, password } = req.body;

        const result = await userController.createUser(
            userProfile,
            email,
            password
        );

        res.status(201).json({
            success: true,
            data: result
        });

    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
});

// LOGIN USER
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const token = await userController.login(email, password);

        res.status(200).json({
            success: true,
            token: token
        });

    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
});

// GET USER BY ID
router.get("/:id", async (req, res) => {
    try {
        const user = await userController.getUser(req.params.id);

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
});

export default router;