-- CreateTable
CREATE TABLE `Product` (
    `idProduct` INTEGER NOT NULL,
    `nameProduct` VARCHAR(191) NOT NULL,
    `qty` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`idProduct`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
