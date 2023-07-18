-- CreateEnum
CREATE TYPE "Role" AS ENUM ('deliver', 'admin');

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "body" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sender" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "township" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Sender_pkey" PRIMARY KEY ("name","phone_number")
);

-- CreateTable
CREATE TABLE "Receiver" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "township" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Receiver_pkey" PRIMARY KEY ("name","phone_number")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "township" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parcel" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" INTEGER NOT NULL,
    "picked_up" BOOLEAN NOT NULL,
    "arrived_warehouse" BOOLEAN NOT NULL,
    "finish" BOOLEAN NOT NULL,
    "sender_name" TEXT NOT NULL,
    "sender_phone_number" TEXT NOT NULL,
    "receiver_name" TEXT NOT NULL,
    "receiver_phone_number" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_key" ON "Article"("title");

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_sender_name_sender_phone_number_fkey" FOREIGN KEY ("sender_name", "sender_phone_number") REFERENCES "Sender"("name", "phone_number") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_receiver_name_receiver_phone_number_fkey" FOREIGN KEY ("receiver_name", "receiver_phone_number") REFERENCES "Receiver"("name", "phone_number") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
