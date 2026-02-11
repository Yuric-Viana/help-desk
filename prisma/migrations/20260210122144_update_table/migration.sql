/*
  Warnings:

  - You are about to drop the column `time` on the `technician_availabilities` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_technician_id_fkey";

-- AlterTable
ALTER TABLE "technician_availabilities" DROP COLUMN "time",
ADD COLUMN     "schedules" TEXT[];

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
