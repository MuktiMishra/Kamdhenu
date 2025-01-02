import prisma from "../../util/prismaClient.js";
import dotenv from "dotenv";

dotenv.config();

async function seed() {
    await prisma.admin.create({
        data: {
            username: "rupesh",
            password: "kamdhenu@123",
            role: "MASTER"
        }
    })
    console.log("Admin table seeded");
}

seed().catch(err => console.log(err));