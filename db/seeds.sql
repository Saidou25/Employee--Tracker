USE employee_db;

INSERT INTO
    viewDepartments (name)
VALUES ('Engineering'), ('Finance'), ('Legal'), ('Sales');

INSERT INTO
    roles (
        title,
        salary,
        viewDepartment_id
    )
VALUES ('Lead Engineering', 150000, 1), ('Software Engineer', 120000, 1),
 ('Account Manageer', 160000, 2), ('Acountant', 12500, 2), ('Legal Team Lead', 250000, 3), ('Lawyer', 190000, 4);

INSERT INTO
    employees (
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES 
('Ashley', 'Rodriguez', 3, 2), 
('Kevin', 'Tupik', 2, 4), 
('Kunal', 'Sigh', 3, null), 
('Nalia', 'Brown', 4, 5), 
('Lara', 'Lourd', 5, 4), 
('Tom', 'Allen', 6, 6), 
('Alice', 'Joke', 6, 6);