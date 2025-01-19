/*
  Warnings:

  - You are about to drop the column `course` on the `TrainingStudentSupport` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `TrainingStudentSupport` table. All the data in the column will be lost.
  - You are about to drop the column `instituteFees` on the `TrainingStudentSupport` table. All the data in the column will be lost.
  - You are about to drop the column `salary` on the `TrainingStudentSupport` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TrainingStudentSupport" DROP COLUMN "course",
DROP COLUMN "duration",
DROP COLUMN "instituteFees",
DROP COLUMN "salary",
ADD COLUMN     "fees" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "paid" BOOLEAN NOT NULL DEFAULT false;
