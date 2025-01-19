-- CreateTable
CREATE TABLE "PlacementStudentSupport" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "profileJob" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PlacementStudentSupport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlacementStudentSupport_studentId_key" ON "PlacementStudentSupport"("studentId");

-- AddForeignKey
ALTER TABLE "PlacementStudentSupport" ADD CONSTRAINT "PlacementStudentSupport_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
