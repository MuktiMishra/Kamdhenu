/*
  Warnings:

  - You are about to drop the column `student_id` on the `EducationDetail` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `student_id` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `SupportType` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[aadharStudent]` on the table `EducationDetail` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone_no]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aadharStudent` to the `EducationDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EducationDetail" DROP CONSTRAINT "EducationDetail_student_id_fkey";

-- DropForeignKey
ALTER TABLE "SupportType" DROP CONSTRAINT "SupportType_student_id_fkey";

-- DropIndex
DROP INDEX "EducationDetail_student_id_key";

-- DropIndex
DROP INDEX "Student_student_id_key";

-- AlterTable
ALTER TABLE "EducationDetail" DROP COLUMN "student_id",
ADD COLUMN     "aadharStudent" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "password",
DROP COLUMN "student_id",
ADD COLUMN     "location" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "paid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phone_no" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "supportType" "Support" NOT NULL DEFAULT 'EDUCATION';

-- DropTable
DROP TABLE "SupportType";

-- CreateTable
CREATE TABLE "trainingDetail" (
    "tform_id" SERIAL NOT NULL,
    "aadharStudent" TEXT NOT NULL,
    "isRegularTraining" BOOLEAN NOT NULL DEFAULT false,
    "sector" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "trainingLocation" TEXT NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "payAmt" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "trainingDetail_pkey" PRIMARY KEY ("tform_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trainingDetail_aadharStudent_key" ON "trainingDetail"("aadharStudent");

-- CreateIndex
CREATE UNIQUE INDEX "EducationDetail_aadharStudent_key" ON "EducationDetail"("aadharStudent");

-- CreateIndex
CREATE UNIQUE INDEX "Student_phone_no_key" ON "Student"("phone_no");

-- AddForeignKey
ALTER TABLE "EducationDetail" ADD CONSTRAINT "EducationDetail_aadharStudent_fkey" FOREIGN KEY ("aadharStudent") REFERENCES "Student"("aadharNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainingDetail" ADD CONSTRAINT "trainingDetail_aadharStudent_fkey" FOREIGN KEY ("aadharStudent") REFERENCES "Student"("aadharNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
