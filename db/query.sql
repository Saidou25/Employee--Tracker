
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
salary
/* manager_id */
 FROM employees 
JOIN roles ON employees.role_id = roles.id
JOIN departments ON roles.department_id = departments.id;
