/*
  Warnings:

  - You are about to drop the column `studentId` on the `PlacementStudentSupport` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentAadhar]` on the table `PlacementStudentSupport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentAadhar` to the `PlacementStudentSupport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PlacementStudentSupport" DROP CONSTRAINT "PlacementStudentSupport_studentId_fkey";

-- DropIndex
DROP INDEX "PlacementStudentSupport_studentId_key";

-- AlterTable
ALTER TABLE "PlacementStudentSupport" DROP COLUMN "studentId",
ADD COLUMN     "studentAadhar" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PlacementStudentSupport_studentAadhar_key" ON "PlacementStudentSupport"("studentAadhar");

-- AddForeignKey
ALTER TABLE "PlacementStudentSupport" ADD CONSTRAINT "PlacementStudentSupport_studentAadhar_fkey" FOREIGN KEY ("studentAadhar") REFERENCES "Student"("aadharNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
