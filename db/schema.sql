DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE viewDepartments (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30) NOT NULL
     
    );

CREATE TABLE roles (
     id INT NOT NULL AUTO_INCREMENT,
     title VARCHAR(30) NOT NULL,
     viewDepartment_id INT, 
     salary DECIMAL NOT NULL,
     PRIMARY KEY(id),
    FOREIGN KEY (viewDepartment_id) REFERENCES viewDepartments(id)
      
    );

 CREATE TABLE employees (
     id INT NOT NULL AUTO_INCREMENT,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     viewDepartment_id INT,  
     role_id INT,
     PRIMARY KEY (id),
     manager_id INT,
     FOREIGN KEY (viewDepartment_id) REFERENCES viewDepartments(id),
     FOREIGN KEY (role_id) REFERENCES roles(id)
/*ON DELETE SET NULL*/
 );
 CREATE VIEW viewEmployees AS (
SELECT 
employees.id, 
CONCAT (
 first_name,
 ' ',
 last_name
 ) AS employee, 
/* role_id, */
title,
name,
/* department_id,  */
salary,
manager_id
 FROM employees 
JOIN roles ON employees.role_id = roles.id
JOIN viewDepartments ON roles.viewDepartment_id = viewDepartments.id);

CREATE VIEW viewRoles AS (
SELECT
roles.id,
title,
name,
salary
FROM roles JOIN viewDepartments ON roles.viewDepartment_id = viewDepartments.id
);


