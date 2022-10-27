-- Active: 1666828453889@@127.0.0.1@3306@employeetraining
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Pastrana
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Pastrana
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Pastrana` DEFAULT CHARACTER SET utf8 ;
USE `Pastrana` ;

-- -----------------------------------------------------
-- Table `Pastrana`.`Pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pastrana`.`Pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `folio` INT NULL,
  `hora` VARCHAR(6) NULL,
  `nombreCompleto` VARCHAR(45) NULL,
  `telefono` VARCHAR(15) NULL,
  `paquete` INT NULL,
  `polloRelleno` INT NULL,
  `lomo` DOUBLE NULL,
  `pierna` DOUBLE NULL,
  `costilla` DOUBLE NULL,
  `polloAdobado` DOUBLE NULL,
  `polloNatural` DOUBLE NULL,
  `manzana` DOUBLE NULL,
  `espaguetti` DOUBLE NULL,
  `codo` DOUBLE NULL,
  `rusa` DOUBLE NULL,
  `chiles` DOUBLE NULL,
  `otros` VARCHAR(100) NULL,
  `total` DOUBLE NULL,
  `anticipo` DOUBLE NULL,
  `resta` DOUBLE NULL,
  `entregado` TINYINT NULL,
  `pagado` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

