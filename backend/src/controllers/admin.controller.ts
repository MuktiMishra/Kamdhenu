import {asyncHandler} from "../util/asynchandler.js";
import { Request, Response } from "express";
import {ApiError} from "../util/ApiError.js";
import {ApiResponse} from "../util/ApiResponse.js";
import prisma from "../util/prismaClient.js";
import jwt from 'jsonwebtoken'
import { RequestWithAdmin } from "../util/RequestWithAdmin.js";

// tested
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

const verifyUser = asyncHandler(
    async (req: RequestWithAdmin, res: Response) => {
      const admin = req.admin;
  
      if (admin) {
        return res.status(200).json(new ApiResponse(200, {}, "Good to go"));
      }
      return res.redirect("/");
    }
  );
  
const placementForm = asyncHandler(async (req: RequestWithAdmin, res: Response) => {
    const { aadharNumber } = req.params; 
    const admin = req.admin; 
    const { industry, location, salary, company, profile } = req.body; 

    try {

        if (!aadharNumber || !industry || !location || !salary || !company || !profile){
            return res.status(400).json(new ApiError(400, "Bad Request, Empty data")); 
        }

        const placementSupport = await prisma.placementStudentSupport.create({
            data: {
                industry, location, salary, company, profileJob: profile, studentAadhar: aadharNumber, FilledBy: admin.username
            }
        })

        if (!placementSupport){
            return res.status(403).json(new ApiError(403, "Error in creating placement"));
        }

        return res.status(200).json(new ApiResponse(200, placementSupport, "Form Created")); 

    } catch (err: any) {
        console.log("Placement support error: ", err)
        res.status(500).json(new ApiError(500, "Internal Server Error")); 
    }
})

const trainingForm = asyncHandler(async (req: RequestWithAdmin, res: Response) => {
    const admin = req.admin; 
    const { aadharNumber } = req.params; 
    const { mode, sector, role, organization, location } = req.body;
    let { paid, charges } = req.body; 

    paid = paid === "Paid" ? true : false; 
    charges = charges.toString(); 


    try { 
        console.log(!charges)
        if (!mode || !sector || !role || !organization || !location || (!charges && charges !== 0)) {
            return res.status(400).json(new ApiError(400, "Bad request, empty data"))
        }

        const trainingForm = await prisma.trainingStudentSupport.create({
            data: {
                mode, trainingSector: sector, role, organization, location, paid, fees: charges, FilledBy: admin.username, studentAadhar: aadharNumber  
            }
        });

        if (!trainingForm){
            return res.status(403).json(new ApiError(403, "Error in creating training"));
        }
        
        return res.status(200).json(new ApiResponse(200, trainingForm, "Form Created")); 

    } catch (err: any) {
        console.log(err)
        return res.status(500).json(new ApiError(500, "Internal Server Error")); 
    }
})

const addStaff = asyncHandler(async (req: RequestWithAdmin, res: Response) => {
    const { username, password } = req.body.formData; 

    try{ 

        if (!username || !password) {
            return res.status(400).json(new ApiError(400, "Bad Request, invalid data")); 
        }

        const alreadyExistingStaff = await prisma.admin.findUnique({
            where: {
                username: username
            }
        })

        if (alreadyExistingStaff) {
            return res.status(403).json(new ApiError(403, "Staff already exists with the same username")); 
        }

        const addStaff = await prisma.admin.create({
            data: {
                username, password, role: "STAFF"
            }
        }); 

        if (!addStaff) {
            return res.status(403).json(new ApiError(403, "Error in adding staff")); 
        }

        const dataToSend = {
            username: addStaff.username, 
            role: addStaff.role
        }
        return res.status(200).json(new ApiResponse(200, dataToSend, "Staff added successfully"))

    } catch (err) {

    }
})

export {signInAdmin, verifyUser, placementForm, trainingForm, addStaff}
