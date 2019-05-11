### Schema

DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;
USE project2_db;

CREATE TABLE tableName
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
