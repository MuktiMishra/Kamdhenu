/*
  Warnings:

  - You are about to drop the column `studentId` on the `StudentEducation` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `TrainingStudentSupport` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentAadhar]` on the table `StudentEducation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[studentAadhar]` on the table `TrainingStudentSupport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentAadhar` to the `StudentEducation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentAadhar` to the `TrainingStudentSupport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StudentEducation" DROP CONSTRAINT "StudentEducation_studentId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingStudentSupport" DROP CONSTRAINT "TrainingStudentSupport_studentId_fkey";

-- DropIndex
DROP INDEX "StudentEducation_studentId_key";

-- DropIndex
DROP INDEX "TrainingStudentSupport_studentId_key";

-- AlterTable
ALTER TABLE "StudentEducation" DROP COLUMN "studentId",
ADD COLUMN     "studentAadhar" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TrainingStudentSupport" DROP COLUMN "studentId",
ADD COLUMN     "studentAadhar" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "StudentEducation_studentAadhar_key" ON "StudentEducation"("studentAadhar");

-- CreateIndex
CREATE UNIQUE INDEX "TrainingStudentSupport_studentAadhar_key" ON "TrainingStudentSupport"("studentAadhar");

-- AddForeignKey
ALTER TABLE "StudentEducation" ADD CONSTRAINT "StudentEducation_studentAadhar_fkey" FOREIGN KEY ("studentAadhar") REFERENCES "Student"("aadharNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingStudentSupport" ADD CONSTRAINT "TrainingStudentSupport_studentAadhar_fkey" FOREIGN KEY ("studentAadhar") REFERENCES "Student"("aadharNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
