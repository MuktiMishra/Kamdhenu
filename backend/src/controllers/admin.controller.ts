import {asyncHandler} from "../util/asynchandler.js";
import { Request, Response } from "express";
import {ApiError} from "../util/ApiError.js";
import {ApiResponse} from "../util/ApiResponse.js";
import prisma from "../util/prismaClient.js";
import jwt from 'jsonwebtoken'


const signInAdmin = asyncHandler(async (req: Request, res: Response) => {
    const { username, password, userRole } = req.body;

    if (!username || !password || !userRole) {
        return res.status(400).json(new ApiError(400, "Bad request, no data"));
    }
    try {

        const existingUser = await prisma.admin.findUnique({
            where: {
                username
            }
        })

        if (!existingUser) {
            return res.status(403).json(new ApiError(403, "No admin found"));
        }

        if (userRole !== existingUser.role) {
            return res.status(403).json(new ApiError(403, "Roles not matched"));
        }

        if (existingUser.password !== password) {
            return res.status(403).json(new ApiError(403, "Passwords don't match"));
        }
        let role = existingUser.role;
        const token = jwt.sign({username, role}, process.env.ADMIN_AUTH_TOKEN_PASS!)

        const dataToReturn = {
            username, role, token,
        }

        return res.status(200).json(new ApiResponse(200, dataToReturn, "Admin logged in"));

    } catch (err) {
        return res.status(500).json(new ApiError(500, "Internal server error"));
    }

});

export {signInAdmin}
