/*
  Warnings:

  - The `id` column on the `FoodList` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `id` column on the `Menucard` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[foodlist]` on the table `FoodList` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[menu_card_id]` on the table `Menucard` will be added. If there are existing duplicate values, this will fail.
  - The required column `foodlist` was added to the `FoodList` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `menu_card_id` was added to the `Menucard` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Menucard_id_key";

-- AlterTable
ALTER TABLE "FoodList" ADD COLUMN     "foodlist" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "FoodList_pkey" PRIMARY KEY ("foodlist");

-- AlterTable
ALTER TABLE "Menucard" ADD COLUMN     "menu_card_id" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FoodList_id_key" ON "FoodList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FoodList_foodlist_key" ON "FoodList"("foodlist");

-- CreateIndex
CREATE UNIQUE INDEX "Menucard_menu_card_id_key" ON "Menucard"("menu_card_id");
