/*
  Warnings:

  - You are about to drop the column `like` on the `BlogPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `BlogPost` DROP COLUMN `like`,
    ADD COLUMN `view` INTEGER NOT NULL DEFAULT 0;
