-- AlterTable
ALTER TABLE "Parcel" ADD COLUMN     "accept_deliver" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "accept_picked_up" BOOLEAN NOT NULL DEFAULT false;
