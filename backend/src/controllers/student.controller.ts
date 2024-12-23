import prisma from "../util/prismaClient.js";
import {asyncHandler} from "../util/asynchandler.js";
import { Request, Response } from "express";
import {ApiError} from "../util/ApiError.js";
import bcrypt from 'bcrypt'
import {ApiResponse} from "../util/ApiResponse.js";
import jwt from 'jsonwebtoken'
import {RequestWithStudent} from "../util/RequestWithStudent";

// PM TESTED
const signUpController = asyncHandler(async (req: Request, res: Response)=> {
    try{

        const { firstName, lastName, emailId, aadharNumber, password, confirmPassword } = req.body;

        if (!firstName || !lastName || !emailId || !aadharNumber || !password || !confirmPassword ) {
            return res.status(400).json(new ApiError(400, "Bad request, empty data"));
        }

        if (password !== confirmPassword) {
            return res.status(400).json(new ApiError(400, "password and confirmpassword don't match"));
        }

        const existingUser = await prisma.student.findUnique({
            where: {
                aadharNumber
            }
        })

        if (existingUser) {
            return res.status(403).json(new ApiError(403, "User already exists"));
        }

        const salt = await bcrypt.genSalt(10);

        console.log(salt)


        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await prisma.student.create({
            data: {
                firstName, lastName, emailId, aadharNumber, password: hashedPassword
            }
        })

        console.log(user);

        if (!user) {
            return res.status(404).json(new ApiError(404, "Error in creating user"));
        }

        const authToken = jwt.sign({aadharNumber}, process.env.AUTH_TOKEN_PASS!);

        return res.status(200).json(new ApiResponse(200, {user, authToken}, "user created successfully"));

    } catch (err) {

        console.log(err);
        return res.status(500).json(new ApiError(500, "Internal server error"))
    }


})

// PM TESTED
const signInController = asyncHandler(async (req: Request, res: Response)=> {
    try{
        const { aadharNumber, password } = req.body;

        if (!aadharNumber || !password) {
            return res.status(400).json(new ApiError(400, "No aadhar number or password"));
        }

        const user = await prisma.student.findUnique({
            where: {
                aadharNumber,
            },

        })

        if (!user) {
            return res.status(403).json(new ApiError(403, "No user exists"))
        }

        const compare = bcrypt.compare(password, user.password);

        if (!compare) {
            return res.status(403).json(new ApiError(403, "Passwords do not match"));
        }

        const dataToSend = {
            aadharNumber: user.aadharNumber,
            firstName: user.firstName,
            lastName: user.lastName,
            emailId: user.emailId
        }

        return res.status(200).json(new ApiResponse(200, dataToSend, "User logged in"));

    } catch(err) {
        console.log(err)
        return res.status(500).json(new ApiError(500, "Internal Server Error"))

    }
})

// PM TESTED
const verifyToken = asyncHandler(async (req: RequestWithStudent, res: Response)=> {
    try {
        const student = req.student;

        return res.status(200).json(new ApiResponse(200, student, "Student verified"))


    } catch (err) {
        return res.status(500).json(new ApiError(500, "Internal Server Error"))
    }
})

export { signUpController, signInController, verifyToken }