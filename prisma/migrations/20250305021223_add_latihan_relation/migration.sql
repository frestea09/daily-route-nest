/*
  Warnings:

  - You are about to alter the column `qty` on the `product` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `qty` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameItem` VARCHAR(191) NOT NULL,
    `qty` INTEGER NOT NULL,

    UNIQUE INDEX `Item_nameItem_key`(`nameItem`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoleItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameRole` VARCHAR(191) NOT NULL,
    `itemId` INTEGER NOT NULL,

    UNIQUE INDEX `RoleItem_itemId_key`(`itemId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoleItem` ADD CONSTRAINT `RoleItem_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
