import express from 'express'
import {signUpController} from "../controllers/student.controller.js";

const userRouter = express.Router();

userRouter.route('/signup').post(signUpController);

export default userRouter;