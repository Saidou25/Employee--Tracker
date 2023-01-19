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
        .catch(err => console.log(err));
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

init();




