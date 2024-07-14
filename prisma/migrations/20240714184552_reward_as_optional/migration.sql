-- DropForeignKey
ALTER TABLE "Reward" DROP CONSTRAINT "Reward_itemId_fkey";

-- AlterTable
ALTER TABLE "Reward" ALTER COLUMN "itemId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
