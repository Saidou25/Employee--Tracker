USE employee_db;
SELECT * FROM employees 
/* JOIN departments ON employees.department_id = departments.id */
JOIN roles ON employees.role_id = roles.id;
/* employees.id, */
/* CONCAT (
 first_name,
 ' ',
 last_name
 ) AS employee, */
/* role_id,
title,
salary */
/* department, */
/* salary */
/* manager */
 /* FROM employees JOIN roles ON employees.role_id = roles.id; */