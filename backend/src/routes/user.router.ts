import express from 'express'
import {signInController, signUpController, verifyToken} from "../controllers/student.controller.js";
import {studentAuthMiddleware} from "../middlewares/studentAuth.middleware.js";


const userRouter = express.Router();

userRouter.route('/signup').post(signUpController);
userRouter.route('/signin').post(signInController);
userRouter.route('/verify').post(studentAuthMiddleware, verifyToken);

export default userRouter;