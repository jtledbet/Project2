### Schema

DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;
USE project2_db;

CREATE TABLE pets
(
	id int NOT NULL AUTO_INCREMENT,
	pet_name varchar(255) NOT NULL,
	species varchar(255) NOT NULL,
	bio varchar(255) DEFAULT 'loves hang-gliding',
	scores varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	pass varchar(255) NOT NULL,
	scores varchar(255) NOT NULL,
	PRIMARY KEY (id)
)