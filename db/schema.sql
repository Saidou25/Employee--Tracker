DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL, 
        PRIMARY KEY(id)
    );

CREATE TABLE roles (
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(30) NOT NULL,
        department_id INT, /* not null isn't here so we can do associations with other tables later on*/
        salary DECIMAL NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY (department_id) REFERENCES departments(id)
      
    );


 CREATE TABLE employees (
 id INT NOT NULL AUTO_INCREMENT,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
  /* department_id INT,   */
 role_id INT,
  PRIMARY KEY (id),
 /* FOREIGN KEY (department_id) REFERENCES departments(id), */
  FOREIGN KEY (role_id) REFERENCES roles(id)
/*ON DELETE SET NULL*/
 );
/* manage_id INT, */



