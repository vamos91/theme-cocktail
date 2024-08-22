CREATE TABLE `cocktail_recipe`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `alcool` TINYINT(1) NOT NULL,
    `rating` ENUM('1', '2', '3', '4', '5') NOT NULL,
    `description` TEXT NOT NULL,
    `difficulty_level` ENUM('easy', 'medium', 'hard') NOT NULL,
    `rate` ENUM('1', '2', '3') NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL
);
ALTER TABLE
    `cocktail_recipe` ADD INDEX `cocktail_recipe_id_index`(`id`);
CREATE TABLE `ingredient`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL
);
ALTER TABLE
    `ingredient` ADD INDEX `ingredient_id_index`(`id`);
CREATE TABLE `measurement`(
    `cocktail_recipe_id` INT NOT NULL,
    `ingredient_id` INT NOT NULL,
    `quantity_amount` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL
);
ALTER TABLE
    `measurement` ADD INDEX `measurement_cocktail_recipe_id_index`(`cocktail_recipe_id`);
ALTER TABLE
    `measurement` ADD INDEX `measurement_ingredient_id_index`(`ingredient_id`);
ALTER TABLE
    `measurement` ADD CONSTRAINT `measurement_ingredient_id_foreign` FOREIGN KEY(`ingredient_id`) REFERENCES `ingredient`(`id`);
ALTER TABLE
    `measurement` ADD CONSTRAINT `measurement_cocktail_recipe_id_foreign` FOREIGN KEY(`cocktail_recipe_id`) REFERENCES `cocktail_recipe`(`id`);