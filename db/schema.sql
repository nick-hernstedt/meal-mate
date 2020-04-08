DROP DATABASE IF EXISTS meal_db;

CREATE DATABASE meal_db;
USE meal_db;

CREATE TABLE match
(
	id int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (id)
);