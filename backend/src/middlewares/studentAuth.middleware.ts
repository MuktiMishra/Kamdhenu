import {ApiError} from "../util/ApiError.js";
import {asyncHandler} from "../util/asynchandler.js";
import { Response, NextFunction } from "express";
import { RequestWithStudent } from "../util/RequestWithStudent.js";
import jwt from 'jsonwebtoken'

const studentAuthMiddleware = asyncHandler(async (req: RequestWithStudent, res: Response, next: NextFunction) => {
    try {
        const { token } = req.body;

        const verify = jwt.verify(token, process.env.AUTH_TOKEN_PASS!);

        if (!verify) {
            return res.status(400).json(new ApiError(400, "Bad Request, token not verified"));
        }

        req.student = verify
        next();

    } catch (err) {

        console.log(err)
        return res.status(500).json(new ApiError(500, " failed at verification Wrong Token"))

    }
})

export { studentAuthMiddleware }