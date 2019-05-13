### Schema

DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;
USE project2_db;

CREATE TABLE pets
(
	id int NOT NULL AUTO_INCREMENT,
	pet_name varchar(255) NOT NULL,
	species varchar(255) NOT NULL,
	scores varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
