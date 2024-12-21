/*
  Warnings:

  - The primary key for the `EducationDetail` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "EducationDetail" DROP CONSTRAINT "EducationDetail_pkey",
ADD CONSTRAINT "EducationDetail_pkey" PRIMARY KEY ("eform_id");
