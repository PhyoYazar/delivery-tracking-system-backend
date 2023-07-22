/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Parcel` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Receiver` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Sender` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `Parcel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Receiver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Sender` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'super_admin';

-- AlterTable
ALTER TABLE "Parcel" DROP COLUMN "updatedAt",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Receiver" DROP COLUMN "updatedAt",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Sender" DROP COLUMN "updatedAt",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "updatedAt",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Township" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Township_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Township_name_key" ON "Township"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
