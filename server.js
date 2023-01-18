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
                'Add a Department', ' Add a Role', 'Add an Employee', 'Update an Employee Role'],
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
            else if ((answer.init === 'Add a Department')) {
                let result = 'viewDepartments';
                addDepartment(result);
            }
            else if ((answer.init === 'Add a Role')) {
                let result = 'Add a Role';
                addRole(result);
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

const addRole = (result) => {
    console.log(result);
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
            console.log(data.title);
            console.log(data.salary);
            console.log(data.department);

            // const add = "INSERT INTO viewEmployees (first_name, last_name) VALUES (?,?)";
            const view = db.query(`SELECT * FROM roles WHERE title = ${data.title}`, (err, datam) => {
                if (err) {
                    console.log('error');
                } else {
                    console.log(view);
                }
            })
            init();
        })
    // //         .catch(err => console.log(err));
};

const addDepartment = (result) => {
    console.log(result);
    prompt(
        {
            type: 'input',
            message: 'What is the name of the Department you would like to add ?',
            name: 'department',
        },
    )
        .then((data) => {
            console.log(data.department);
            const val = data.department;

            const add = "INSERT INTO viewDepartments (name) VALUES (?)";
            db.query(add, [val], (err, data) => {
                if (err) {
                    console.log('error');
                } else {
                    console.log('sucess');
                }
            })
            init();
        })
        .catch(err => console.log(err));
};








