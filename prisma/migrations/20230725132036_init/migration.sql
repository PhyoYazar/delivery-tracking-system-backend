-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_city_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_township_id_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "city_id" DROP NOT NULL,
ALTER COLUMN "township_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_township_id_fkey" FOREIGN KEY ("township_id") REFERENCES "Township"("id") ON DELETE SET NULL ON UPDATE CASCADE;
