/*
  Warnings:

  - You are about to drop the `StudentSupport` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "SupportType" AS ENUM ('EDUCATION', 'TRAINING', 'PLACEMENT');

-- DropForeignKey
ALTER TABLE "StudentSupport" DROP CONSTRAINT "StudentSupport_studentId_fkey";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "supportType" "SupportType";

-- DropTable
DROP TABLE "StudentSupport";

-- CreateTable
CREATE TABLE "TrainingStudentSupport" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "supportType" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "instituteFees" TEXT NOT NULL,
    "trainingSector" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "salary" TEXT NOT NULL,

    CONSTRAINT "TrainingStudentSupport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrainingStudentSupport_studentId_key" ON "TrainingStudentSupport"("studentId");

-- AddForeignKey
ALTER TABLE "TrainingStudentSupport" ADD CONSTRAINT "TrainingStudentSupport_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
