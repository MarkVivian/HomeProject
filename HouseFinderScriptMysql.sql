DROP DATABASE IF EXISTS HouseFinder;
CREATE DATABASE HouseFinder;
USE HouseFinder;

CREATE TABLE userDetails(
	userId INT AUTO_INCREMENT PRIMARY KEY,
	firstName VARCHAR(30),
    lastName VARCHAR(30),
    userName VARCHAR(30),
    userPassword VARCHAR(30),
    userEmail VARCHAR(30),
    userNumber VARCHAR(30)
);

INSERT INTO userDetails VALUES(
	DEFAULT,
    "Mark",
    "Vivian",
    "MarkOriginal",
    "1234",
    "Admin@test.com",
    "+254716939459"
);

CREATE TABLE ownerDetails(
	ownerId INT AUTO_INCREMENT PRIMARY KEY,
	firstName VARCHAR(30),
    lastName VARCHAR(30),
    ownerPassword VARCHAR(30),
    ownerEmail VARCHAR(30),
    ownerNumber VARCHAR(30)
);

INSERT INTO ownerDetails VALUES(
	DEFAULT,
    "Mark",
    "Vivian",
    "1234",
    "Admin@test.com",
    "+254716939459"
);

CREATE TABLE houseGroup(
	GroupId INT AUTO_INCREMENT PRIMARY KEY,
    GroupName VARCHAR(30)
);

INSERT INTO houseGroup VALUES(
	DEFAULT,
    "BedSitter"
),(
DEFAULT,
"Single"
),(
DEFAULT,
"One Bedroom"),(
DEFAULT,
"Two Bedroom");

CREATE TABLE houseDetails(
-- this is the foreign key for houseImages
	houseId INT AUTO_INCREMENT PRIMARY KEY,
    houseName VARCHAR(30),
    freeHouses INT,
    houseLocation VARCHAR(30),
    GroupId INT,
    FOREIGN KEY(GroupId) REFERENCES houseGroup(GroupId) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO houseDetails VALUES(
DEFAULT,
"Gelest Hostel",
2,
"mombasa",
1
);

CREATE TABLE houseImages(
	imageId INT AUTO_INCREMENT PRIMARY KEY,
	houseId INT,
    FOREIGN KEY(houseId) REFERENCES houseDetails(houseId) ON DELETE CASCADE ON UPDATE CASCADE,
    imageUrl VARCHAR(30)
);

INSERT INTO houseImages VALUES(
	DEFAULT,
	1,
    "image url"
);