/*
  Warnings:

  - A unique constraint covering the columns `[student_id]` on the table `EducationDetail` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `role` on the `Admin` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `board` to the `EducationDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `division` to the `EducationDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institute` to the `EducationDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passingYear` to the `EducationDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualification` to the `EducationDetail` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STUDENT');

-- CreateEnum
CREATE TYPE "Division" AS ENUM ('FIRST', 'SECOND', 'THIRD');

-- CreateEnum
CREATE TYPE "Support" AS ENUM ('EDUCATION', 'PLACEMENT', 'TRAINING');

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "EducationDetail" ADD COLUMN     "board" TEXT NOT NULL,
ADD COLUMN     "division" "Division" NOT NULL,
ADD COLUMN     "institute" TEXT NOT NULL,
ADD COLUMN     "passingYear" INTEGER NOT NULL,
ADD COLUMN     "percentage" DOUBLE PRECISION DEFAULT 0.00,
ADD COLUMN     "qualification" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "Reg_Time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "SupportType" (
    "support_id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "support_type" "Support" NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "SupportType_pkey" PRIMARY KEY ("support_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SupportType_student_id_key" ON "SupportType"("student_id");

-- CreateIndex
CREATE UNIQUE INDEX "EducationDetail_student_id_key" ON "EducationDetail"("student_id");

-- AddForeignKey
ALTER TABLE "SupportType" ADD CONSTRAINT "SupportType_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;
