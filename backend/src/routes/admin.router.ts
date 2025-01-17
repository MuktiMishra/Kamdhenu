import express from 'express'
import {signInAdmin, verifyUser} from "../controllers/admin.controller.js";
import adminAuthMiddleware from '../middlewares/AdminAuthMiddleware.js';

const adminRouter = express.Router();

adminRouter.route('/signin').post(signInAdmin);
adminRouter.route('/verify-user').post(adminAuthMiddleware, verifyUser); 


export default adminRouter;