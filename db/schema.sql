DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE roles (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES departments(id)
    );

CREATE TABLE employees (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT,
        CONSTRAINT employees_ibfk_1
        FOREIGN KEY (role_id) REFERENCES roles(id)
        /* manage_id INT, */
       
    );

    /* SELECT 
     id,
     first_name,
     last_name,
    FROM employees 
    JOIN roles ON role_id = roles.id */
    /* JOIN departments ON  */

SELECT DATABASE();