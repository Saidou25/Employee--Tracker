DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE IF NOT EXIST employee_db;

USE employee_db;

CREATE TABLE
    department (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30)
    );

CREATE TABLE
    role (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30),
        salary DECIMAL,
        BIGINT,
        department - id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    );

CREATE TABLE
    employee (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        manager_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    );