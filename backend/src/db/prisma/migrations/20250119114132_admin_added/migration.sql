/*
  Warnings:

  - A unique constraint covering the columns `[FilledBy]` on the table `PlacementStudentSupport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `FilledBy` to the `PlacementStudentSupport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlacementStudentSupport" ADD COLUMN     "FilledBy" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PlacementStudentSupport_FilledBy_key" ON "PlacementStudentSupport"("FilledBy");

-- AddForeignKey
ALTER TABLE "PlacementStudentSupport" ADD CONSTRAINT "PlacementStudentSupport_FilledBy_fkey" FOREIGN KEY ("FilledBy") REFERENCES "Admin"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
