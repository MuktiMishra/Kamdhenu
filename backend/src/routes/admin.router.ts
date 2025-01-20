import express from 'express'
import {addStaff, placementForm, signInAdmin, trainingForm, verifyUser} from "../controllers/admin.controller.js";
import adminAuthMiddleware from '../middlewares/AdminAuthMiddleware.js';
import adminRoleMiddleware from '../middlewares/AdminRoleMiddleware.js';

const adminRouter = express.Router();

adminRouter.route('/signin').post(signInAdmin);
adminRouter.route('/verify-user').post(adminAuthMiddleware, verifyUser); 
adminRouter.route('/placementForm/:aadharNumber').post(adminAuthMiddleware, adminRoleMiddleware('STAFF'), placementForm)
adminRouter.route('/training/update/:aadharNumber').post(adminAuthMiddleware, adminRoleMiddleware('STAFF'), trainingForm)
adminRouter.route('/addStaff').post(adminAuthMiddleware, adminRoleMiddleware("MASTER"), addStaff); 


export default adminRouter;