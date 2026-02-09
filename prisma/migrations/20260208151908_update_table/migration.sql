/*
  Warnings:

  - The `service_id` column on the `ticket_services` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "ticket_services" DROP CONSTRAINT "ticket_services_service_id_fkey";

-- AlterTable
ALTER TABLE "ticket_services" DROP COLUMN "service_id",
ADD COLUMN     "service_id" TEXT[];

-- AddForeignKey
ALTER TABLE "ticket_services" ADD CONSTRAINT "ticket_services_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
