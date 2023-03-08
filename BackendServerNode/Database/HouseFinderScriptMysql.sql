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
    "John",
    "Doe",
    "MarkOriginal",
    "1234",
    "JohnDoe@test.com",
    "+123456789"
),(
	DEFAULT,
    "Mark",
    "Vivian",
    "Admin",
    "root",
    "Admin@Admin.co",
    "+25471939459"
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

CREATE TABLE sliderImages(
	imageId INT AUTO_INCREMENT PRIMARY KEY,
    imageUrl VARCHAR(300),
    imageText VARCHAR(300)
);

INSERT INTO sliderImages VALUES(
DEFAULT,
"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
"Do dolor qui eiusmod dolor do cillum consectetur ex ad."
),(
DEFAULT,
"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
"Laboris deserunt eiusmod eu duis commodo enim velit."
),(
DEFAULT,
"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
"Sint dolor anim dolore qui amet do irure pariatur irure nostrud."
),(
DEFAULT,
"https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
"Eu pariatur pariatur cupidatat aliquip ipsum. Laboris voluptate sit labore aliquip exercitation laborum nostrud nisi irure. Amet dolor est ullamco deserunt id "
);