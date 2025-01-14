import prisma from "../util/prismaClient.js";
import {asyncHandler} from "../util/asynchandler.js";
import { Request, Response } from "express";
import {ApiError} from "../util/ApiError.js";
import bcrypt from 'bcrypt'
import {ApiResponse} from "../util/ApiResponse.js";
import jwt from 'jsonwebtoken'
import {RequestWithStudent} from "../util/RequestWithStudent";
import {RequestWithAdmin} from "../util/RequestWithAdmin";

// PM TESTED
const signUpController = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { personalInfo, educationInfo, supportInfo } = req.body;

        console.log("Personal Info: ", personalInfo, "Education Info: ", educationInfo, "Support info: ", supportInfo)
        // if (
        //     !personalInfo.firstName ||
        //     !personalInfo.lastName ||
        //     !personalInfo.emailId ||
        //     !personalInfo.aadharNumber ||
        //     !personalInfo.phoneNo ||
        //     !personalInfo.termsAccepted
        // ) {
        //     return res.status(400).json(new ApiError(400, "Bad request, missing required fields"));
        // }
        //
        //
        // const existingStudent = await prisma.student.findUnique({
        //     where: { aadharNumber: personalInfo.aadharNumber }
        // });
        //
        // if (existingStudent) {
        //     return res.status(403).json(new ApiError(403, "Student already exists"));
        // }
        //
        // // Create student record with related education and support data
        // const student = await prisma.student.create({
        //     data: {
        //         firstName: personalInfo.firstName,
        //         lastName: personalInfo.lastName,
        //         emailId: personalInfo.emailId,
        //         aadharNumber: personalInfo.aadharNumber,
        //         phoneNo: personalInfo.phoneNo,
        //         address: personalInfo.address,
        //         state: personalInfo.state,
        //         city: personalInfo.city,
        //         dob: new Date(personalInfo.dob), // Ensure date format is valid
        //         gender: personalInfo.gender,
        //         category: personalInfo.category,
        //         religion: personalInfo.religion,
        //         residentialStatus: personalInfo.residentialStatus,
        //         financialStatus: personalInfo.financialStatus,
        //         fathersOccupation: personalInfo.fathersOccupation,
        //         guardianContactNumber: personalInfo.guardianContactNumber,
        //         termsAccepted: personalInfo.termsAccepted,
        //         education: {
        //             create: {
        //                 qualificationBoard: educationInfo.qualificationBoard,
        //                 passingYear: educationInfo.passingYear,
        //                 percentage: educationInfo.percentage,
        //                 division: educationInfo.division,
        //                 date: new Date(educationInfo.educationDate) // Ensure date format is valid
        //             }
        //         },
        //         support: {
        //             create: {
        //                 support: supportInfo.support,
        //                 supportType: supportInfo.supportType,
        //                 course: supportInfo.course,
        //                 duration: supportInfo.duration,
        //                 instituteFees: supportInfo.instituteFees,
        //                 trainingSector: supportInfo.trainingSector,
        //                 location: supportInfo.location,
        //                 mode: supportInfo.mode,
        //                 role: supportInfo.role,
        //                 salary: supportInfo.salary
        //             }
        //         }
        //     }
        // });
        //
        // if (!student) {
        //     return res.status(500).json(new ApiError(500, "Error in creating student record"));
        // }
        //
        // let aadharNumber = personalInfo.aadharNumber
        // const authToken = jwt.sign({ aadharNumber }, process.env.AUTH_TOKEN_PASS!);

        return res.status(201).json(new ApiResponse(201, { message: "hi" }, "Student registered successfully"));

    } catch (err) {
        console.error(err);
        return res.status(500).json(new ApiError(500, "Internal server error"));
    }
});


// PM TESTED
const verifyToken = asyncHandler(async (req: RequestWithStudent, res: Response)=> {
    try {
        const student = req.student;

        return res.status(200).json(new ApiResponse(200, student, "Student verified"))


    } catch (err) {
        return res.status(500).json(new ApiError(500, "Internal Server Error"))
    }
})

// PM TESTED
const getStudentDataForDashboard = asyncHandler(async (req: RequestWithAdmin, res: Response) => {

    try {
        const students = await prisma.student.findMany({});

        console.log(students);
        if (!students || students.length === 0) {
            return res.status(403).json(new ApiError(403, "No students found"));
        }

        return res.status(200).json(new ApiResponse(200, students, "Students fetched successfully"));
    } catch (err: any) {
        return res.status(500).json(new ApiError(500, "Internal server error"))
    }

})

const getDetailedStudentData = asyncHandler(async (req: Request, res: Response) => {
    const { aadhar } = req.params;

    try {

        const studentData = await prisma.student.findUnique({
            where: {
                aadharNumber: aadhar
            }
        })

        if (!studentData) {
            return res.status(403).json(new ApiError(400, "No student found"))
        }

        return res.status(200).json(new ApiResponse(200, studentData, "Student found"));

    } catch (err) {
        console.log(err)
        res.status(500).json(new ApiError(500, "Internal server error"))
    }
})

export { signUpController, verifyToken, getStudentDataForDashboard, getDetailedStudentData }