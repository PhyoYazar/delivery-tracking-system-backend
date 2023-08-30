-- CreateEnum
CREATE TYPE "TimelineType" AS ENUM ('booking', 'start_pick_up', 'arrive_warehouse', 'start_deliver', 'finish');

-- CreateTable
CREATE TABLE "Timeline" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "type" "TimelineType" NOT NULL,
    "parcel_id" TEXT NOT NULL,

    CONSTRAINT "Timeline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Timeline" ADD CONSTRAINT "Timeline_parcel_id_fkey" FOREIGN KEY ("parcel_id") REFERENCES "Parcel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
