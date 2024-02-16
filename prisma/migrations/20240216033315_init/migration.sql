-- CreateEnum
CREATE TYPE "Class" AS ENUM ('ASSASSIN', 'MAGE', 'FIGHTER', 'RANGER', 'HEALER', 'TANKER', 'SHADOW_MONARCH');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "level" INTEGER NOT NULL,
    "class" "Class" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attributes" (
    "id" SERIAL NOT NULL,
    "healthPoints" INTEGER NOT NULL,
    "manaPoints" INTEGER NOT NULL,
    "fatigue" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "stamina" INTEGER NOT NULL,
    "agility" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "perception" INTEGER NOT NULL,
    "availablePoints" INTEGER NOT NULL,
    "PhysicalDmgReductionPorcentage" INTEGER NOT NULL,
    "MagicalDmgReductionPorcentage" INTEGER NOT NULL,
    "usedId" INTEGER NOT NULL,

    CONSTRAINT "Attributes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attributes_usedId_key" ON "Attributes"("usedId");

-- AddForeignKey
ALTER TABLE "Attributes" ADD CONSTRAINT "Attributes_usedId_fkey" FOREIGN KEY ("usedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
