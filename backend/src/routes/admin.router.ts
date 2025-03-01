import express from 'express'
import {addStaff, deleteAdmin, deleteImage, educationSupportAdmin, getGalleryImages, getStaffList, placementForm, placementSupportAdmin, signInAdmin, trainingForm, trainingSupportAdmin, uploadGalleryImage, verifyUser} from "../controllers/admin.controller.js";
import adminAuthMiddleware from '../middlewares/AdminAuthMiddleware.js';
import adminRoleMiddleware from '../middlewares/AdminRoleMiddleware.js';
import { uploadImage } from '../middlewares/multer.middleware.js';

const adminRouter = express.Router();

adminRouter.route('/signin').post(signInAdmin);
adminRouter.route('/verify-user').post(adminAuthMiddleware, verifyUser); 
adminRouter.route('/placementForm/:aadharNumber').post(adminAuthMiddleware, adminRoleMiddleware('STAFF'), placementForm)
adminRouter.route('/training/update/:aadharNumber').post(adminAuthMiddleware, adminRoleMiddleware('STAFF'), trainingForm)
adminRouter.route('/addStaff').post(adminAuthMiddleware, adminRoleMiddleware("MASTER"), addStaff); 
adminRouter.route('/getStaffList').post(adminAuthMiddleware, adminRoleMiddleware("MASTER"), getStaffList); 
adminRouter.route('/deleteAdmin').post(adminAuthMiddleware, adminRoleMiddleware("MASTER"), deleteAdmin); 
adminRouter.route('/updateEducationSupport').post(adminAuthMiddleware, adminRoleMiddleware("STAFF"), educationSupportAdmin); 
adminRouter.route('/updateTrainingSupport').post(adminAuthMiddleware, adminRoleMiddleware("STAFF"), trainingSupportAdmin); 
adminRouter.route('/updatePlacementSupport').post(adminAuthMiddleware, adminRoleMiddleware("STAFF"), placementSupportAdmin); 
adminRouter.route('/uploadGalleryImage').post(uploadImage, uploadGalleryImage)
adminRouter.route('/getGalleryImages').get(getGalleryImages); 
adminRouter.route('/deleteImage').post(adminAuthMiddleware, adminRoleMiddleware("MASTER"), deleteImage)

export default adminRouter;