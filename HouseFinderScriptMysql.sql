DROP DATABASE IF EXISTS HouseFinder;
CREATE DATABASE HouseFinder;
USE HouseFinder;

CREATE TABLE userDetails(
	userId INT AUTO_INCREMENT PRIMARY KEY,
	firstName VARCHAR(30),
    lastName VARCHAR(30),
    ownerPassword VARCHAR(30),
    ownerEmail VARCHAR(30),
    onwerNumber VARCHAR(30)
);

CREATE TABLE ownerDetails(
	ownerId INT AUTO_INCREMENT PRIMARY KEY,
	firstName VARCHAR(30),
    lastName VARCHAR(30),
    userPassword VARCHAR(30),
    userEmail VARCHAR(30),
    userNumber VARCHAR(30)
);

CREATE TABLE houseDetails(
-- this is the foreign key for houseImages
	houseId INT AUTO_INCREMENT PRIMARY KEY,
    houseName VARCHAR(30),
    freeHouses INT,
    houseLocation VARCHAR(30)
);

CREATE TABLE houseImages(
	imageId INT AUTO_INCREMENT PRIMARY KEY,
	houseId INT,
    FOREIGN KEY(houseId) REFERENCES houseDetails(houseId) ON DELETE CASCADE ON UPDATE CASCADE,
    imageUrl VARCHAR(30)
);