/*
  Warnings:

  - A unique constraint covering the columns `[FilledBy]` on the table `TrainingStudentSupport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `FilledBy` to the `TrainingStudentSupport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TrainingStudentSupport" ADD COLUMN     "FilledBy" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TrainingStudentSupport_FilledBy_key" ON "TrainingStudentSupport"("FilledBy");

-- AddForeignKey
ALTER TABLE "TrainingStudentSupport" ADD CONSTRAINT "TrainingStudentSupport_FilledBy_fkey" FOREIGN KEY ("FilledBy") REFERENCES "Admin"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
