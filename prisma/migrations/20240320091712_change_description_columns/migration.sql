/*
  Warnings:

  - Added the required column `text` to the `Description` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Description` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Description" ADD COLUMN     "text" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
