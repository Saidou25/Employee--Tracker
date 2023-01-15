USE employee_db;
        

        INSERT INTO departments (id, name)
        VALUES
        (1, 'Engineering'),
        (2, 'Finance'),
        (3, 'Legal');

        INSERT INTO roles (id, title, salary, department_id)
        VALUES
         (4, 'Lead' 'Engineering', 150000, 1),
         (5, 'Software' 'Engineer', 120000, 1),
         (6, 'Account' 'Manageer', 160000, 2),
         (7, 'Acountant', 12500, 2),
         (8, 'Legal' 'Team Lead', 250000, 3),
          (9, 'Lawyer', 190000, 3);

            INSERT INTO employees (id, first_name, last_name, role_id)
        VALUES
             (10, 'Ashley', 'Rodriguez', 6),
             (11, 'Kevin', 'Tupik', 5),
             (12, 'Kunal', 'Sigh', null),
             (13, 'Nalia', 'Brown', 7),
              (14, 'Lara', 'Lourd', 9),
              (15, 'Tom', 'Allen', 8),
             (16, 'Felicia', 'Grant', null);