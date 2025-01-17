/*
  Warnings:

  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Reg_Time` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `paid` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `phone_no` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `supportType` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `EducationDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trainingDetail` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[phoneNo]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fathersOccupation` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `financialStatus` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guardianContactNumber` to the `Student` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Student` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `religion` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `residentialStatus` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EducationDetail" DROP CONSTRAINT "EducationDetail_aadharStudent_fkey";

-- DropForeignKey
ALTER TABLE "trainingDetail" DROP CONSTRAINT "trainingDetail_aadharStudent_fkey";

-- DropIndex
DROP INDEX "Student_phone_no_key";

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
DROP COLUMN "Reg_Time",
DROP COLUMN "location",
DROP COLUMN "paid",
DROP COLUMN "phone_no",
DROP COLUMN "supportType",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "dob" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fathersOccupation" TEXT NOT NULL,
ADD COLUMN     "financialStatus" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "guardianContactNumber" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "phoneNo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "regTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "religion" TEXT NOT NULL,
ADD COLUMN     "residentialStatus" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "termsAccepted" BOOLEAN NOT NULL DEFAULT true,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "EducationDetail";

-- DropTable
DROP TABLE "trainingDetail";

-- DropEnum
DROP TYPE "Division";

-- DropEnum
DROP TYPE "Support";

-- CreateTable
CREATE TABLE "StudentEducation" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "qualificationBoard" TEXT NOT NULL,
    "passingYear" TEXT NOT NULL,
    "percentage" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentSupport" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "support" TEXT NOT NULL,
    "supportType" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "instituteFees" TEXT NOT NULL,
    "trainingSector" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "salary" TEXT NOT NULL,

    CONSTRAINT "StudentSupport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentEducation_studentId_key" ON "StudentEducation"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "StudentSupport_studentId_key" ON "StudentSupport"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_phoneNo_key" ON "Student"("phoneNo");

-- AddForeignKey
ALTER TABLE "StudentEducation" ADD CONSTRAINT "StudentEducation_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSupport" ADD CONSTRAINT "StudentSupport_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
