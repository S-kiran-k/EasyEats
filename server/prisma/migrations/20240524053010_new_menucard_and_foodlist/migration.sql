-- CreateTable
CREATE TABLE "Menucard" (
    "id" TEXT NOT NULL,
    "menu_name" TEXT NOT NULL,
    "menu_image" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "FoodList" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "offer" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Menucard_id_key" ON "Menucard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FoodList_id_key" ON "FoodList"("id");
