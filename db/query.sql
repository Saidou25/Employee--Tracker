/* employeesTable
CREATE VIEW results AS
SELECT 
employees.id, 
CONCAT (
 first_name,
 ' ',
 last_name
 ) AS employee, 
role_id,
title,
name, 
/* department_id,  */
/* salary,
manager_id
 FROM employees 
JOIN roles ON employees.role_id = roles.id
JOIN departments ON roles.department_id = departments.id;
 */
/* roles table */
/* SELECT
roles.id,
title,
name,
salary
FROM roles JOIN departments ON roles.department_id = departments.id; */