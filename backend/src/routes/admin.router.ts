import express from 'express'
import {signInAdmin} from "../controllers/admin.controller.js";

const adminRouter = express.Router();

adminRouter.route('/signin').post(signInAdmin);

export default adminRouter;