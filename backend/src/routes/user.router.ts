import express from 'express'
import {
    getDetailedStudentData,
    getStudentDataForDashboard,
    signUpController,
    userLogin,
    verifyToken
} from "../controllers/student.controller.js";
import {studentAuthMiddleware} from "../middlewares/studentAuth.middleware.js";
import adminAuthMiddleware from "../middlewares/AdminAuthMiddleware.js";
import adminRoleMiddleware from "../middlewares/AdminRoleMiddleware.js";


const userRouter = express.Router();

userRouter.route('/signup').post(signUpController);
// userRouter.route('/signin').post(signInController);
userRouter.route('/verify').post(studentAuthMiddleware, verifyToken);
userRouter.route('/getStudents').post(getStudentDataForDashboard);
userRouter.route('/test').post(adminAuthMiddleware, adminRoleMiddleware("MASTER"));
userRouter.route('/detailedStudent/:aadhar').get(getDetailedStudentData);
userRouter.route('/login').post(userLogin); 

export default userRouter;