DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE roles (
        id INT NOT NULL PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT,/* not null isn't here so we can do associations with other tables later on*/
        FOREIGN KEY (department_id) REFERENCES departments(id)
    );

CREATE TABLE employees (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        department_id INT,
        role_id INT,/* not null isn't here so we can do associations with other tables later on*/
        FOREIGN KEY (role_id) REFERENCES roles(id), /*ON DELETE SET NULL*/
        FOREIGN KEY ( department_id) REFERENCES departments(id)

        /* manage_id INT, */
       
    );

     SELECT 
     employees.id,
     name,
     first_name,
     last_name,
     title,
     salary
    FROM employees 
    JOIN roles ON employees.role_id = roles.id
    JOIN departments ON employees.department_id = departments.id;
    /* JOIN departments ON  */

SELECT DATABASE();