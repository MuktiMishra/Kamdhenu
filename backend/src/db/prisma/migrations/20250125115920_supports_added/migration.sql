-- AlterTable
ALTER TABLE "PlacementStudentSupport" ADD COLUMN     "fees" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "EducationStudentSupport" (
    "id" TEXT NOT NULL,
    "studentAadhar" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "furtherQualification" TEXT NOT NULL,
    "fees" TEXT NOT NULL DEFAULT '',
    "FilledBy" TEXT NOT NULL,

    CONSTRAINT "EducationStudentSupport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EducationStudentSupport_studentAadhar_key" ON "EducationStudentSupport"("studentAadhar");

-- CreateIndex
CREATE UNIQUE INDEX "EducationStudentSupport_FilledBy_key" ON "EducationStudentSupport"("FilledBy");

-- AddForeignKey
ALTER TABLE "EducationStudentSupport" ADD CONSTRAINT "EducationStudentSupport_studentAadhar_fkey" FOREIGN KEY ("studentAadhar") REFERENCES "Student"("aadharNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationStudentSupport" ADD CONSTRAINT "EducationStudentSupport_FilledBy_fkey" FOREIGN KEY ("FilledBy") REFERENCES "Admin"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
