import express from 'express'
import {JwtPayload} from "jsonwebtoken";

interface Student {
    aadharNumber: string,
    firstName: string,
    lastName: string,
    password: string,
    emailId: string
}

export interface RequestWithStudent extends express.Request {
    student: Student | string | JwtPayload
}