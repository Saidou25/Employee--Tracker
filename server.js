const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
    user: "root",
    database: "employee_db",

});

const init = () => {
    prompt(
        {
            type: 'list',
            message: 'What would you like to do ?',
            name: 'init',
            choices: ['View all Departments', 'View all Roles', 'View all Employees',
                'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        },
    )
        .then((answer) => {
            if (answer.init.includes('Departments')) {
                let result = 'Departments';
                showTables(result);

            }
            else if (answer.init.includes('Roles')) {
                let result = 'Roles';
                showTables(result);

            }
            else if (answer.init.includes('Employees')) {
                let result = 'Employees';
                showTables(result);

            }
            else if (answer.init === 'Add a Department') {
                let result = 'viewDepartments';
                addDepartment(result);
            }
            else if (answer.init === 'Add a Role') {
                addRole();
            }
            else if (answer.init === 'Add an Employee') {
                addEmployee();
            }
            else if (answer.init === 'Update an Employee Role') {
                updateEmployee();
            }

        })
        .catch(err => console.log(err));
};

const showTables = (result) => {
    const showTable = 'SELECT * FROM ' + 'view' + result;
    db.query(showTable, (err, showTable) => {
        console.table(showTable);
        init();
    });
};

let depChoices = [];

const addDepartment = (result) => {

    prompt(
        {
            type: 'input',
            message: 'What is the name of the Department you would like to add ?',
            name: 'department',
        },
    )
        .then((data) => {

            const newDpartment = data.department;
            const addD = depChoices.push(newDpartment);

            db.query("INSERT INTO viewDepartments (name) VALUES (?)", [newDpartment], (err, data) => {
                if (err) {
                    console.log('error');
                } else {

                    console.log(`A new Department '${newDpartment}' was successfully created.`);
                }
            })
            init();
        })
};

const addRole = (result) => {

    prompt([
        {
            type: 'input',
            message: 'What is the title of the role you would like to add ?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the salary for that title ?',
            name: 'salary',
        },
        {
            type: 'list',
            message: 'What is the Department that role belongs to ?',
            choices: ['Finance', 'Engineering', 'Legal'],
            name: 'department',
        },

    ])
        .then((data) => {

            db.query(`INSERT INTO roles (title, salary, viewDepartment_id) VALUES ('${data.title}', '${data.salary}', 
            (SELECT id FROM viewDepartments WHERE name = '${data.department}'))`, (err) => {

                if (err) {
                    console.log('error');
                }
                init();
            })
        })
};

const addEmployee = () => {

    prompt([
        {
            type: 'input',
            message: 'Please enter the full name of the employee you would like to add ?',
            name: 'fullName',
        },
        {
            type: 'list',
            message: 'What is the Department of the employee you are looking to add ?',
            choices: ['Finance', 'Engineering', 'Legal'],
            name: 'department',
        },
        {
            type: 'list',
            message: 'What is the Role of the employee you are looking to add ?',
            choices: ['Lead Engineering', 'Software Engineer', 'Account Manager', 'Acountant', 'Legal Team Lead', 'Lawyer'],
            name: 'role',
        },
        {
            type: 'input',
            message: 'What is the salary of the employee you are looking to add ?',
            name: 'salary',
        },
        {
            type: 'list',
            message: 'What is the Manager s firs_name  the last_name of the employee you are looking to add ?',
            choices: ['Ashley Rodriguez', 'Kevin Tupik', 'Nalia Brown', 'Lara Lourd', 'Tom Allen', 'Alice Joke'],
            name: 'manager',
        },
    ])
        .then((data) => {
            const name = data.fullName.split(" ");
            const managerName = data.manager.split(" ");
         
            db.query(
                `INSERT INTO employees (first_name, last_name, viewDepartment_id, role_id, manager_id)
                 VALUES 
                 ('${name[0]}', '${name[1]}', 
                 (SELECT id FROM viewDepartments WHERE name = '${data.department}'), 
                 (SELECT id FROM roles WHERE title = '${data.role}'), 
                 (SELECT * FROM (SELECT manager_id FROM employees WHERE first_name = '${managerName[0]}' AND last_name = '${managerName[1]}')tblTmp))`, (err) => {

                if (err) return console.error(err);
            }
            )
            init();
        })
};

const updateEmployee = () => {

    prompt([
        {
            type: 'list',
            message: 'Which Employee woulk you like to update ?',
            choices: ['Ashley Rodriguez', 'Kevin Tupik', 'Nalia Brown', 'Lara Lourd', 'Tom Allen', 'Alice Joke'],
            name: 'employeeName',
        }, {
            type: 'list',
            message: 'Which role would you like to assigh to this employee ?',
            choices: ['Lead Engineering', 'Software Engineer', 'Account Manager', 'Acountant', 'Legal Team Lead', 'Lawyer'],
            name: 'employeeRole',
        },
    ])
        .then((data) => {
            const name = data.employeeName.split(" ");
            const title = data.employeeRole;
            console.log(name[0]);
            console.log(name[1]);
            console.log(title);

            db.query(
                `UPDATE employees SET role_id = (SELECT id FROM roles WHERE title = '${title}') WHERE id = (SELECT id FROM (SELECT id FROM employees WHERE first_name = '${name[0]}' AND last_name = '${name[1]}')tblTmp)`, (err) => {

                    if (err) return console.error(err);
                })
            console.log('success');
            init();
        })
};

init();

