-- DropForeignKey
ALTER TABLE "Timeline" DROP CONSTRAINT "Timeline_parcel_id_fkey";

-- AddForeignKey
ALTER TABLE "Timeline" ADD CONSTRAINT "Timeline_parcel_id_fkey" FOREIGN KEY ("parcel_id") REFERENCES "Parcel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
