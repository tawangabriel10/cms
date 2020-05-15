
-- Create table users
CREATE TABLE IF NOT EXISTS user (
userId INTEGER PRIMARY KEY,
username varchar(255) NOT NULL,
password varchar(255) NOT NULL);

-- Insert register first user on table
INSERT INTO user (userId, username, password) VALUES (1, "tawan.souza", "1234");

-- create table Access Group at users
CREATE TABLE IF NOT EXISTS access_group (
accessGroupId INTEGER PRIMARY KEY,
access VARCHAR(50) NOT NULL);

-- insert registers roles on table access group
INSERT INTO access_group (accessGroupId, access) VALUES (1, "User manager");
INSERT INTO access_group (accessGroupId, access) VALUES (2, "Content manager");
INSERT INTO access_group (accessGroupId, access) VALUES (3, "Content curator");

-- create table relational at users and access group
CREATE TABLE IF NOT EXISTS user_access_group (
userId INTEGER,
accessGroupId INTEGER);


-- add foreign key relational on table between  user and access group
ALTER TABLE user_access_group ADD CONSTRAINT FK_user
FOREIGN KEY (userId) REFERENCES user(userId);
ALTER TABLE user_access_group ADD CONSTRAINT FK_access_group
FOREIGN KEY (accessGroupId) REFERENCES access_group(accessGroupId);

-- insert relational between user and access group
INSERT INTO user_access_group (userId, accessGroupId) VALUES (1, 1);
INSERT INTO user_access_group (userId, accessGroupId) VALUES (1, 2);
INSERT INTO user_access_group (userId, accessGroupId) VALUES (1, 3);


-- Create table post
CREATE TABLE IF NOT EXISTS post (
postId INTEGER PRIMARY KEY,
title VARCHAR(255) NOT NULL,
subtitle VARCHAR(255),
content TEXT NOT NULL,
imgUrl TEXT,
creationDate DATE NOT NULL,
userId INTEGER);

-- add foreign key relational between user
ALTER TABLE post ADD CONSTRAINT FK_user
FOREIGN KEY (userId) REFERENCES user(userId);