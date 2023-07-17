-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SENDER', 'RECEIVER', 'PICKER', 'DELIVER');

-- CreateTable
CREATE TABLE "User" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "township" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("name","phone_number")
);

-- CreateTable
CREATE TABLE "Parcel" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" INTEGER NOT NULL,
    "picked_up" BOOLEAN NOT NULL,
    "arrived_warehouse" BOOLEAN NOT NULL,
    "finish" BOOLEAN NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_phone_number" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,

    CONSTRAINT "Parcel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_user_name_user_phone_number_fkey" FOREIGN KEY ("user_name", "user_phone_number") REFERENCES "User"("name", "phone_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
