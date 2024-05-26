/*
  Warnings:

  - The primary key for the `FoodList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `foodlist` on the `FoodList` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[foodlist_id]` on the table `FoodList` will be added. If there are existing duplicate values, this will fail.
  - The required column `foodlist_id` was added to the `FoodList` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "FoodList_foodlist_key";

-- AlterTable
ALTER TABLE "FoodList" DROP CONSTRAINT "FoodList_pkey",
DROP COLUMN "foodlist",
ADD COLUMN     "foodlist_id" TEXT NOT NULL,
ADD CONSTRAINT "FoodList_pkey" PRIMARY KEY ("foodlist_id");

-- CreateIndex
CREATE UNIQUE INDEX "FoodList_foodlist_id_key" ON "FoodList"("foodlist_id");
