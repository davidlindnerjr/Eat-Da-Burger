DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

-- for heroku
-- USE `ym1b8a5oe53md850`;
-- for local
USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY(id)
);
