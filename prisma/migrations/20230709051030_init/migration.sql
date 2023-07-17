/*
  Warnings:

  - You are about to drop the column `publisher` on the `Article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "publisher",
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;
