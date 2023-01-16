USE employee_db;
        

        INSERT INTO departments (name)
        VALUES
        ('Engineering'),
        ('Finance'),
        ('Legal');

        INSERT INTO roles (title, salary, department_id)
        VALUES
         ('Lead Engineering', 150000, 1),
         ('Software Engineer', 120000, 1),
         ('Account Manageer', 160000, 2),
         ('Acountant', 12500, 2),
         ('Legal' 'Team Lead', 250000, 3),
          ('Lawyer', 190000, 3);

            INSERT INTO employees (first_name, last_name, role_id)
        VALUES
             ('Ashley', 'Rodriguez', 1),
             ('Kevin', 'Tupik', 2),
             ('Kunal', 'Sigh', 3),
             ('Nalia', 'Brown', 4),
              ('Lara', 'Lourd', 5),
              ('Tom', 'Allen', 6);