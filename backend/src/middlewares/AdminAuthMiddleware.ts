import {asyncHandler} from "../util/asynchandler.js";
import { RequestWithAdmin} from "../util/RequestWithAdmin.js";
import {NextFunction, Response} from "express";
import jwt from "jsonwebtoken";
import {ApiError} from "../util/ApiError.js";

// PM TESTED
const adminAuthMiddleware = asyncHandler(async (req: RequestWithAdmin, res: Response, next: NextFunction) => {
    const { authToken } = req.body;

    try {

        const verify: any = jwt.verify(authToken, process.env.ADMIN_AUTH_TOKEN_PASS!)

        console.log(verify)

        req.admin = verify;

        console.log(req.admin)
        next();



    } catch (err: any) {
        console.log("admin role error: ", err.name)
        if (err.name === "JsonWebTokenError") {
            return res.status(401).json(new ApiError(401, "token is bad"))
        }
        return res.status(500).json(new ApiError(500, "Internal server error"))
    }
})

export default adminAuthMiddleware