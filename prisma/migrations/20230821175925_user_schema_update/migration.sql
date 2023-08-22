/*
  Warnings:

  - Made the column `city_id` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `township_id` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_city_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_township_id_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "city_id" SET NOT NULL,
ALTER COLUMN "township_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_township_id_fkey" FOREIGN KEY ("township_id") REFERENCES "Township"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
