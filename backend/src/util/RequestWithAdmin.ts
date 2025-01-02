import { Request } from "express";
import {Role} from "@prisma/client";

export interface Admin {
    username: string
    role: Role
}

export interface RequestWithAdmin extends Request {
    admin: Admin
}