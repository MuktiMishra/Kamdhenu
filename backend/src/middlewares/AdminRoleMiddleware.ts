import {asyncHandler} from "../util/asynchandler.js";
import {RequestWithAdmin} from "../util/RequestWithAdmin.js";
import {NextFunction, Response} from "express";
import {ApiError} from "../util/ApiError.js";

//PM TESTED
const adminRoleMiddleware = (role: string) => asyncHandler(async (req: RequestWithAdmin, res: Response, next: NextFunction)=> {
    const admin = req.admin;
    console.log("came in role")

    try {
        if (!admin) {
            return res.status(400).json(new ApiError(400, "No admin found"))
        }

        if ((admin.role !== role) && (admin.role !== "MASTER")) {
            return res.status(403).json(new ApiError(403, "Roles not matched"))
        }


        next();


    } catch (err) {
        console.log("Role middleware error: ", err);
        return res.status(500).json(new ApiError(500, "Internal server error"))
    }
})

export default adminRoleMiddleware;