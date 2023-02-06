SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS HouseFinder;
USE HouseFinder;

SHOW TABLES;

CREATE TABLE userDetails(
	userId INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    userNumber INT
);

CREATE TABLE ownerDetails(
	ownerId INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    ownerNumber INT
);

CREATE TABLE tenantDetails(
    tenantId INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    tenantNumber INT
);

CREATE TABLE roomDetails(
	ownerId INT,
    houseName VARCHAR(30),
    houseId INT AUTO_INCREMENT PRIMARY KEY,
    EmptyRooms INT,
    tenantId INT,
    FOREIGN KEY(ownerId) REFERENCES ownerDetails(ownerId) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(tenantId) REFERENCES tenant(tenantId) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE roomLocation(
	county VARCHAR(30),
    location VARCHAR(30),
    googleLocation VARCHAR(30),
    houseId INT PRIMARY KEY,
    FOREIGN KEY(houseId) REFERENCES roomDetails(houseId) ON UPDATE CASCADE
);

CREATE TABLE chosenHome(
	userId INT,
    houseId INT,
    roomId INT PRIMARY KEY
);