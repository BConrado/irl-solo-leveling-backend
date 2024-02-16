/*
  Warnings:

  - The primary key for the `Attributes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Attributes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Attributes" DROP CONSTRAINT "Attributes_pkey",
DROP COLUMN "id";

-- CreateTable
CREATE TABLE "Quest" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "acceptedTime" TIMESTAMP(3) NOT NULL,
    "expirationTime" TIMESTAMP(3),

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reward" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "upgradePoints" INTEGER,
    "itemId" INTEGER NOT NULL,
    "questId" INTEGER,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penality" (
    "title" TEXT NOT NULL,
    "degradePoints" INTEGER DEFAULT 0,
    "questId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "OwnEvent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "rewardId" INTEGER NOT NULL,

    CONSTRAINT "OwnEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemStatus" (
    "itemId" INTEGER NOT NULL,
    "healthPointsBonus" INTEGER,
    "manaPointsBonus" INTEGER,
    "fatigueBonus" INTEGER,
    "strengthBonus" INTEGER,
    "staminaBonus" INTEGER,
    "agilityBonus" INTEGER,
    "intelligenceBonus" INTEGER,
    "perceptionBonus" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Reward_itemId_key" ON "Reward"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "Reward_questId_key" ON "Reward"("questId");

-- CreateIndex
CREATE UNIQUE INDEX "Penality_questId_key" ON "Penality"("questId");

-- CreateIndex
CREATE UNIQUE INDEX "OwnEvent_rewardId_key" ON "OwnEvent"("rewardId");

-- CreateIndex
CREATE UNIQUE INDEX "ItemStatus_itemId_key" ON "ItemStatus"("itemId");

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_questId_fkey" FOREIGN KEY ("questId") REFERENCES "Quest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penality" ADD CONSTRAINT "Penality_questId_fkey" FOREIGN KEY ("questId") REFERENCES "Quest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnEvent" ADD CONSTRAINT "OwnEvent_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "Reward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemStatus" ADD CONSTRAINT "ItemStatus_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
