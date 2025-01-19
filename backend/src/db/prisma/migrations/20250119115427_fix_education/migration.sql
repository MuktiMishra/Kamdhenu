/*
  Warnings:

  - You are about to drop the column `studentAadhar` on the `StudentEducation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId]` on the table `StudentEducation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentId` to the `StudentEducation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StudentEducation" DROP CONSTRAINT "StudentEducation_studentAadhar_fkey";

-- DropIndex
DROP INDEX "StudentEducation_studentAadhar_key";

-- AlterTable
ALTER TABLE "StudentEducation" DROP COLUMN "studentAadhar",
ADD COLUMN     "studentId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "StudentEducation_studentId_key" ON "StudentEducation"("studentId");

-- AddForeignKey
ALTER TABLE "StudentEducation" ADD CONSTRAINT "StudentEducation_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
